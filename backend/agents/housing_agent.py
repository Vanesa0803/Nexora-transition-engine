from schemas.transition import TransitionRequest


def run_housing_agent(data: TransitionRequest):

    city = data.destinationCity.lower()

    housing = {
        "bangalore": [
            {
                "area": "Whitefield",
                "rent": "₹8,000/month",
                "rating": "⭐⭐⭐⭐☆",
            },
            {
                "area": "Electronic City",
                "rent": "₹7,500/month",
                "rating": "⭐⭐⭐⭐☆",
            },
            {
                "area": "Marathahalli",
                "rent": "₹9,000/month",
                "rating": "⭐⭐⭐⭐⭐",
            },
        ],

        "hyderabad": [
            {
                "area": "Miyapur",
                "rent": "₹7,000/month",
                "rating": "⭐⭐⭐⭐☆",
            },
            {
                "area": "Kukatpally",
                "rent": "₹8,000/month",
                "rating": "⭐⭐⭐⭐⭐",
            },
            {
                "area": "Gachibowli",
                "rent": "₹9,500/month",
                "rating": "⭐⭐⭐⭐☆",
            },
        ],
    }

    return housing.get(city, [])