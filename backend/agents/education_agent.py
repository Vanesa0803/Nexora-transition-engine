from schemas.transition import TransitionRequest


def run_education_agent(data: TransitionRequest):

    if data.familyMembers <= 1:
        return {
            "required": False,
            "message": "No school planning required."
        }

    schools = {
        "Bengaluru": [
            "Delhi Public School, Whitefield",
            "National Public School, Indiranagar",
            "Orchids International School"
        ],
        "Hyderabad": [
            "Chirec International School",
            "Oakridge International School",
            "Delhi Public School Hyderabad"
        ],
        "Delhi": [
            "Modern School",
            "Delhi Public School RK Puram",
            "Bal Bharati Public School"
        ]
    }

    return {
        "required": True,
        "recommendedSchools": schools.get(
            data.destinationCity,
            ["Search nearby CBSE schools"]
        )
    }