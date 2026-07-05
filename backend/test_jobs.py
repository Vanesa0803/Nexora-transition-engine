from services.job_service import search_jobs

jobs = search_jobs(
    query="Construction Worker",
    location="Bangalore"
)

print(jobs)