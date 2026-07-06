from serpapi import GoogleSearch
from config import SERPAPI_KEY


def search_houses(location: str):

    params = {
        "engine": "google",
        "q": f"2 BHK rent in {location}",
        "api_key": SERPAPI_KEY
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    print("HOUSING RESPONSE:")
    print(results)

    houses = []

    for result in results.get("organic_results", [])[:5]:

        houses.append({
            "title": result.get("title"),
            "area": result.get("title"),
            "source": result.get("source"),
            "link": result.get("link"),
            "snippet": result.get("snippet")
        })

    return houses