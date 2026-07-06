from serpapi import GoogleSearch
from config import SERPAPI_KEY
from services.occupation_service import normalize_occupation


def search_jobs(query: str, location: str):
    normalized_query = normalize_occupation(query)

    print("Original:", query)
    print("Normalized:", normalized_query)

    params = {
        "engine": "google_jobs",
        "q": f"{normalized_query} {location}",
        "api_key": SERPAPI_KEY
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    jobs = []


    print("FULL RESPONSE:")
    print(results)

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