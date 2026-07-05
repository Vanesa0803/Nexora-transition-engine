from schemas.transition import TransitionRequest


def run_healthcare_agent(data: TransitionRequest):

    city = data.destinationCity.lower()

    hospitals = {
        "bangalore": [
            {
                "name": "Manipal Hospital",
                "area": "Whitefield"
            },
            {
                "name": "Narayana Health",
                "area": "Electronic City"
            }
        ],

        "hyderabad": [
            {
                "name": "Apollo Hospitals",
                "area": "Jubilee Hills"
            },
            {
                "name": "Yashoda Hospital",
                "area": "Somajiguda"
            }
        ],

        "delhi": [
            {
                "name": "AIIMS Delhi",
                "area": "Ansari Nagar"
            },
            {
                "name": "Safdarjung Hospital",
                "area": "Safdarjung"
            }
        ]
    }

    return hospitals.get(city, [])