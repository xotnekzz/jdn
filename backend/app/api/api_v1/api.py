from fastapi import APIRouter

from app.api.api_v1.endpoints import worship, test

api_router = APIRouter()
api_router.include_router(worship.router, prefix="/api/v1", tags=["worship"])
api_router.include_router(test.router, prefix="/api/v1", tags=["test"])