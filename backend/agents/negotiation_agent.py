import json
from services.gemini_service import ask_gemini


def run_negotiation_agent(
    planning,
    jobs,
    housing,
    budget,
    schemes,
    cost_of_living,
    education,
    healthcare,
):

    prompt = f"""
You are an expert AI relocation advisor.

Analyze the following relocation information.

Planning:
{planning}

Jobs:
{jobs}

Housing:
{housing}

Budget:
{budget}

Government Schemes:
{schemes}

Cost of Living:
{cost_of_living}

Education:
{education}

Healthcare:
{healthcare}

Return ONLY valid JSON.

The JSON format MUST be:

{{
    "bestJob": "",
    "bestHousing": "",
    "budgetAdvice": "",
    "governmentBenefits": "",
    "healthcareAdvice": "",
    "educationAdvice": "",
    "risks": "",
    "finalRecommendation": ""
}}

Do not include markdown.
Do not include explanation.
Return JSON only.
"""

    try:
        response = ask_gemini(prompt)
    except Exception:
        return {
            "bestJob": "",
            "bestHousing": "",
            "budgetAdvice": "",
            "governmentBenefits": "",
            "healthcareAdvice": "",
            "educationAdvice": "",
            "risks": "",
            "finalRecommendation": "AI recommendation is temporarily unavailable. Showing the agent results collected so far."
        }

    response = response.replace("```json", "").replace("```", "").strip()

    try:
        recommendation = json.loads(response)
    except Exception:
        recommendation = {
            "finalRecommendation": response
        }

    return recommendation