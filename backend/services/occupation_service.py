from services.gemini_service import ask_gemini


def normalize_occupation(user_input: str) -> str:
    """
    Converts informal occupations into the best Google Jobs search keyword.
    Example:
    AI -> Machine Learning Engineer
    Coder -> Software Engineer
    Doctor -> MBBS Doctor
    """

    prompt = f"""
You are helping a job search engine.

Convert the following occupation into ONE standard professional job title
that would return the BEST results on Google Jobs.

Rules:
- Return ONLY the job title.
- No explanation.
- Maximum 4 words.

Occupation:
{user_input}
"""

    try:
        response = ask_gemini(prompt)
        return response.strip()

    except Exception:
        return user_input