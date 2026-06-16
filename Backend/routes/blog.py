from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from typing import List, Optional
from datetime import datetime, timezone

from ..database import get_db
from ..models.blog import BlogPost
from ..schemas.blog import (
    BlogPostCreate,
    BlogPostResponse,
    BlogPostSummary,
    slugify,
)

router = APIRouter(prefix="/blogs", tags=["Blog"])


@router.get(
    "",
    response_model=List[BlogPostSummary],
    summary="List blog posts",
)
async def list_blogs(
    skip: int = 0,
    limit: int = 10,
    category: Optional[str] = Query(default=None, description="Filter by category"),
    db: AsyncSession = Depends(get_db),
) -> List[BlogPostSummary]:
    query = select(BlogPost).order_by(BlogPost.published_at.desc())

    if category:
        query = query.where(
            func.lower(BlogPost.category) == category.strip().lower()
        )

    query = query.offset(skip).limit(limit)
    result = await db.execute(query)
    return result.scalars().all()


@router.get(
    "/{slug}",
    response_model=BlogPostResponse,
    summary="Get single blog post by slug",
)
async def get_blog(
    slug: str,
    db: AsyncSession = Depends(get_db),
) -> BlogPostResponse:
    result = await db.execute(
        select(BlogPost).where(BlogPost.slug == slug)
    )
    post = result.scalar_one_or_none()

    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found.",
        )

    return post


@router.post(
    "",
    response_model=BlogPostResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create blog post (admin)",
)
async def create_blog(
    payload: BlogPostCreate,
    db: AsyncSession = Depends(get_db),
) -> BlogPostResponse:
    base_slug = slugify(payload.title)

    # Make slug unique if it already exists
    slug = base_slug
    result = await db.execute(select(BlogPost).where(BlogPost.slug == slug))
    if result.scalar_one_or_none():
        suffix = int(datetime.now(timezone.utc).timestamp())
        slug = f"{base_slug}-{suffix}"

    post = BlogPost(
        title=payload.title,
        slug=slug,
        category=payload.category,
        excerpt=payload.excerpt,
        content=payload.content,
        read_time=payload.read_time,
    )
    db.add(post)

    try:
        await db.commit()
        await db.refresh(post)
    except Exception as exc:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not create blog post.",
        ) from exc

    return post


@router.put(
    "/{slug}",
    response_model=BlogPostResponse,
    summary="Update blog post (admin)",
)
async def update_blog(
    slug: str,
    payload: BlogPostCreate,
    db: AsyncSession = Depends(get_db),
) -> BlogPostResponse:
    result = await db.execute(
        select(BlogPost).where(BlogPost.slug == slug)
    )
    post = result.scalar_one_or_none()

    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found.",
        )

    post.title     = payload.title
    post.category  = payload.category
    post.excerpt   = payload.excerpt
    post.content   = payload.content
    post.read_time = payload.read_time

    try:
        await db.commit()
        await db.refresh(post)
    except Exception as exc:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not update blog post.",
        ) from exc

    return post


@router.delete(
    "/{slug}",
    response_model=dict,
    summary="Delete blog post (admin)",
)
async def delete_blog(
    slug: str,
    db: AsyncSession = Depends(get_db),
) -> dict:
    result = await db.execute(
        select(BlogPost).where(BlogPost.slug == slug)
    )
    post = result.scalar_one_or_none()

    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found.",
        )

    await db.delete(post)
    await db.commit()

    return {"success": True, "message": "Blog post deleted."}
