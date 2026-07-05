from schemas.transition import TransitionRequest


def run_cost_of_living_agent(data: TransitionRequest):

    city = data.destinationCity.lower()

    city_costs = {
        "bangalore": {
            "food": 5000,
            "transport": 2500,
            "utilities": 1800,
            "internet": 800
        },
        "hyderabad": {
            "food": 4500,
            "transport": 2200,
            "utilities": 1700,
            "internet": 800
        },
        "delhi": {
            "food": 5500,
            "transport": 2500,
            "utilities": 1900,
            "internet": 900
        }
    }

    costs = city_costs.get(city)

    if not costs:
        return {
            "message": "Cost of living data not available for this city."
        }

    total = (
        costs["food"]
        + costs["transport"]
        + costs["utilities"]
        + costs["internet"]
    )

    return {
        "city": data.destinationCity,
        "food": f"₹{costs['food']}",
        "transport": f"₹{costs['transport']}",
        "utilities": f"₹{costs['utilities']}",
        "internet": f"₹{costs['internet']}",
        "estimatedMonthlyExpenses": f"₹{total}"
    }