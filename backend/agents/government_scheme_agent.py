from schemas.transition import TransitionRequest


def run_government_scheme_agent(data: TransitionRequest):

    income = int(data.income)
    occupation = data.occupation.lower()

    schemes = []

    # Universal Schemes
    schemes.append({
        "name": "One Nation One Ration Card",
        "benefit": "Access ration benefits anywhere in India."
    })

    # Income Based
    if income <= 21000:
        schemes.append({
            "name": "Ayushman Bharat",
            "benefit": "Free healthcare coverage for eligible families."
        })

    # Worker Based
    if "construction" in occupation:
        schemes.append({
            "name": "e-Shram Card",
            "benefit": "Social security benefits for unorganized workers."
        })

        schemes.append({
            "name": "Building & Other Construction Workers Welfare Board",
            "benefit": "Education, healthcare and financial assistance."
        })

    return schemes