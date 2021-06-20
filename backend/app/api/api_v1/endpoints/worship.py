from fastapi import APIRouter, Path
from fastapi.responses import PlainTextResponse

router = APIRouter()

@router.get("/", response_class=PlainTextResponse)
async def read():
    return "TEST"