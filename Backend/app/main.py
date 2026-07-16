from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .database.database import engine
from .database.base import Base


# Import models so SQLAlchemy registers them before create_all
from .database.models import ContactMessage, Subscriber  # noqa: F401

from .api.router import api_router
from app.api.routes.blog import router as blog_router   

# ── Lifespan: create tables on startup ───────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


# ── App ───────────────────────────────────────────────────────
app = FastAPI(
    title="A and I Pathshala Global API",
    description=(
        "Backend API for aipathshalaglobal.com.\n\n"
        "Active endpoints:\n"
        "- POST /contact — contact form (Contact.jsx + ContextualForm.jsx)\n"
        "- POST /subscribe — newsletter signup\n"
        "- DELETE /subscribe/{email} — unsubscribe\n"
    ),
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)


# ── CORS ─────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Routes ───────────────────────────────────────────────────
app.include_router(api_router)


# ── Health check ─────────────────────────────────────────────
@app.get("/health", tags=["Health"])
async def health() -> dict:
    return {
        "status": "ok",
        "app": "A and I Pathshala Global API",
        "env": settings.APP_ENV,
    }
