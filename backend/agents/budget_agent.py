from schemas.transition import TransitionRequest


def run_budget_agent(data: TransitionRequest):

    income = int(data.income)
    housing = int(data.housingBudget)

    remaining = income - housing

    if remaining >= 12000:
        risk = "Low"
        priority = "Healthy Budget"

    elif remaining >= 7000:
        risk = "Medium"
        priority = "Manage Spending Carefully"

    else:
        risk = "High"
        priority = "Budget is Very Tight"

    return {
        "monthlyIncome": f"₹{income}",
        "housingCost": f"₹{housing}",
        "remainingBudget": f"₹{remaining}",
        "risk": risk,
        "priority": priority,
        "recommendations": [
            "Avoid spending more than 40% on rent.",
            "Maintain an emergency fund.",
            "Track monthly expenses carefully."
        ]
    }