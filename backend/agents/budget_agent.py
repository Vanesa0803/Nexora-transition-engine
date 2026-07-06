from schemas.transition import TransitionRequest


def run_budget_agent(data: TransitionRequest):

    income = data.monthlyIncome

    remaining = income * 0.60

    if remaining >= 20000:
        risk = "Low"
        priority = "Healthy Budget"

    elif remaining >= 10000:
        risk = "Medium"
        priority = "Manage Spending Carefully"

    else:
        risk = "High"
        priority = "Budget is Very Tight"

    return {
        "monthlyIncome": income,
        "estimatedExpenses": income - remaining,
        "remainingBudget": remaining,
        "risk": risk,
        "priority": priority,
        "recommendations": [
            "Avoid spending more than 40% on rent.",
            "Maintain emergency savings.",
            "Track monthly expenses."
        ]
    }