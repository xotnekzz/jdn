from fastapi import APIRouter

from app.api.api_v1.endpoints import worship

api_router = APIRouter()
api_router.include_router(worship.router, prefix="/api/v1", tags=["worship"])