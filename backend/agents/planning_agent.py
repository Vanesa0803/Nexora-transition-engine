from schemas.transition import TransitionRequest


def run_planning_agent(data: TransitionRequest):

    recommendations = []

    risk = "Low"

    priority = "Employment"

    if int(data.income) < 20000:
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
            "Build a 3-month financial buffer."
        )

    if "child" in data.familyMembers.lower():
        recommendations.append(
            "Search for nearby schools before relocating."
        )

    recommendations.append(
        "Complete local government registration after arrival."
    )

    recommendations.append(
        f"Look for {data.occupation} opportunities in {data.destinationCity}."
    )

    return {
        "agent": "Planning Agent",

        "summary":
            f"{data.occupation} relocating from "
            f"{data.currentCity} to {data.destinationCity}.",

        "priority": priority,

        "risk": risk,

        "estimatedBudget":
            f"₹{data.housingBudget} housing + daily expenses",

        "recommendations": recommendations
    }