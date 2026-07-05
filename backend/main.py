from fastapi import FastAPI
from api.routes import router
from fastapi.middleware.cors import CORSMiddleware
from services.job_service import search_jobs
app = FastAPI(
    title="Transition Engine API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/jobs")
def get_jobs(query: str, location: str):
    return search_jobs(query, location)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "🚀 Transition Engine API is running successfully!"
    }