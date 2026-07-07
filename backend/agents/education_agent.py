from schemas.transition import TransitionRequest


def run_education_agent(data: TransitionRequest):

    if data.educationRequirement == "None":
        return {
            "required": False,
            "message": "No education assistance required."
        }

    if data.educationRequirement == "School":
        schools = {
            "Bengaluru": [
                "Delhi Public School, Whitefield",
                "National Public School",
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
            ],
            "Mumbai": [
                "Dhirubhai Ambani International School",
                "Bombay Scottish School",
                "Podar International School"
            ]
        }

        return {
            "required": True,
            "type": "School",
            "recommended": schools.get(
                data.destinationCity,
                ["Search nearby CBSE schools"]
            )
        }

    elif data.educationRequirement == "College":
        colleges = {
            "Bengaluru": [
                "Christ University",
                "RV College of Engineering",
                "PES University"
            ],
            "Hyderabad": [
                "IIIT Hyderabad",
                "Osmania University",
                "JNTU Hyderabad"
            ],
            "Delhi": [
                "Delhi University",
                "NSUT",
                "IIIT Delhi"
            ],
            "Mumbai": [
                "IIT Bombay",
                "NMIMS",
                "Mumbai University"
            ]
        }

        return {
            "required": True,
            "type": "College",
            "recommended": colleges.get(
                data.destinationCity,
                ["Search nearby colleges"]
            )
        }

    elif data.educationRequirement == "Both":
        return {
            "required": True,
            "type": "School & College",
            "recommended": [
                "Top nearby schools",
                "Top nearby colleges"
            ]
        }

    return {
        "required": False,
        "message": "No education assistance required."
    }