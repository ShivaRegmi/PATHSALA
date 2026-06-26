from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import settings
from .database import engine, Base

# Import all models so SQLAlchemy registers them before create_all
from .models.contact import ContactMessage       # noqa: F401
from .models.subscriber import Subscriber        # noqa: F401
from .models.blog import BlogPost                # noqa: F401

from .routes.contact import router as contact_router
from .routes.subscriber import router as subscriber_router
from .routes.blog import router as blog_router


# ── Lifespan: auto-create tables on startup ───────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


# ── App ───────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="AI Pathsala",
    description=(
        "Backend API for the AIPathsala website.\n\n"
        "Handles contact form submissions, newsletter subscriptions, and blog posts."
    ),
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registered API routes
app.include_router(contact_router)
app.include_router(subscriber_router)
app.include_router(blog_router)


@app.get("/")
async def root():
    return {"message": "AI Pathsala Backend is running!"}