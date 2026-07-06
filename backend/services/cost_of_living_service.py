import json

from services.gemini_service import ask_gemini


def estimate_cost_of_living(city, family_members):

    prompt = f"""
You are an expert relocation advisor.

Estimate the average monthly living expenses in {city}, India.

Family Members: {family_members}

Return ONLY valid JSON.

{{
    "food": 0,
    "transport": 0,
    "utilities": 0,
    "internet": 0,
    "miscellaneous": 0,
    "total": 0
}}

Do not include markdown.
Do not explain anything.
Return JSON only.
"""

    response = ask_gemini(prompt)

    response = response.replace("```json", "").replace("```", "").strip()

    return json.loads(response)