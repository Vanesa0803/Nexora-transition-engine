from schemas.transition import TransitionRequest


def run_planning_agent(data: TransitionRequest):

    recommendations = []

    risk = "Low"
    priority = "Employment"

    # Income Analysis
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

    # Family Size
    if data.familyMembers >= 3:
        recommendations.append(
            "Consider a 2BHK or larger house for your family."
        )
    else:
        recommendations.append(
            "A 1BHK apartment should be sufficient."
        )

    # Education Planning
    if data.educationRequirement == "School":
        recommendations.append(
            "Find nearby schools before relocating."
        )

    elif data.educationRequirement == "College":
        recommendations.append(
            "Explore colleges and universities in the destination city."
        )

    elif data.educationRequirement == "Both":
        recommendations.append(
            "Plan for both school and higher education options."
        )

    # Government
    recommendations.append(
        "Complete local government registration after arrival."
    )

    # Jobs
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