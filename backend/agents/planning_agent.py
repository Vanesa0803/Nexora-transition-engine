from schemas.transition import TransitionRequest


def run_planning_agent(data: TransitionRequest):

    recommendations = []

    risk = "Low"
    priority = "Employment"

    if data.monthlyIncome < 30000:
        recommendations.append(
            "Prioritize affordable shared accommodation."
        )
        recommendations.append(
            "Maintain at least one month of emergency savings."
        )
        risk = "High"

    else:
        recommendations.append(
            "Explore family-friendly rental housing."
        )
        recommendations.append(
            "Build a 3-month emergency fund."
        )

    if data.familyMembers > 2:
        recommendations.append(
            "Look for schools and family healthcare nearby."
        )

    recommendations.append(
        "Complete local government registration after arrival."
    )

    recommendations.append(
        f"Search for {data.occupation} jobs in {data.destinationCity}."
    )

    return {
        "agent": "Planning Agent",
        "summary": f"{data.occupation} relocating from {data.currentCity} to {data.destinationCity}.",
        "priority": priority,
        "risk": risk,
        "estimatedBudget": f"Income ₹{data.monthlyIncome}/month",
        "recommendations": recommendations
    }