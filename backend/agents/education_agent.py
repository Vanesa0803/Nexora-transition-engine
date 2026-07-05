from schemas.transition import TransitionRequest


def run_education_agent(data: TransitionRequest):

    family = data.familyMembers.lower()

    if "child" not in family and "children" not in family:
        return {
            "required": False,
            "message": "No school-age children detected."
        }

    city = data.destinationCity.lower()

    schools = {
        "bangalore": [
            {
                "name": "National Public School",
                "area": "Whitefield"
            },
            {
                "name": "Delhi Public School",
                "area": "Electronic City"
            }
        ],
        "hyderabad": [
            {
                "name": "Oakridge International School",
                "area": "Gachibowli"
            },
            {
                "name": "Delhi Public School",
                "area": "Miyapur"
            }
        ],
        "delhi": [
            {
                "name": "Modern School",
                "area": "Barakhamba Road"
            },
            {
                "name": "Delhi Public School RK Puram",
                "area": "RK Puram"
            }
        ]
    }

    return {
        "required": True,
        "schools": schools.get(city, [])
    }