from serpapi import GoogleSearch
from config import SERPAPI_KEY


def search_jobs(query: str, location: str):
    params = {
        "engine": "google_jobs",
        "q": f"{query} {location}",
        "api_key": SERPAPI_KEY
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    jobs = []


    print(results.keys())
    print(results.get("jobs_results"))

    for job in results.get("jobs_results", [])[:5]:

        apply_options = job.get("apply_options", [])

        if apply_options:
            apply_link = apply_options[0].get("link")
        else:
            apply_link = None

        jobs.append({
            "title": job.get("title") or job.get("name"),
            "company": job.get("company_name") or job.get("company"),
            "location": job.get("location"),
            "salary": job.get("salary") or "Not disclosed",
            "applyLink": apply_link,
        })

    return jobs