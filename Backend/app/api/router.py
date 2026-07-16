from fastapi import APIRouter
from .routes.contact import router as contact_router
from .routes.subscriber import router as subscriber_router
from .routes.blog import router as blog_router


# Placeholder routers (static data — no active endpoints yet)


api_router = APIRouter()

# ── Active routes ─────────────────────────────────────────────
api_router.include_router(contact_router,    tags=["Contact"])
api_router.include_router(subscriber_router, tags=["Newsletter"])
api_router.include_router(blog_router,       tags=["Blog"])

# ── Placeholder routes (wired but empty — ready for future use) ──
