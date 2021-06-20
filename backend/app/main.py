from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from app.api.api_v1.api import api_router

app = FastAPI()
app.include_router(api_router)

@app.get("/")
async def root():
	return RedirectResponse("https://127.0.0.1/docs")