from fastapi import APIRouter

router = APIRouter(
    prefix="/blog",
    tags=["Blog"],
)

dummy_blogs = [
    {
        "id": 1,
        "title": "Welcome to AI Pathsala",
        "author": "Shiva Regmi",
        "description": "This is the first dummy blog.",
    },
    {
        "id": 2,
        "title": "AI in Education",
        "author": "AI Pathsala",
        "description": "How AI is changing the future of learning.",
    },
    {
        "id": 3,
        "title": "FastAPI + React",
        "author": "Admin",
        "description": "Building modern full-stack applications.",
    },
]

@router.get("/")
async def get_blogs():
    return dummy_blogs