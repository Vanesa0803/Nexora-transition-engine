from services.housing_service import search_houses


def run_housing_agent(data):
    try:
        return search_houses(data.destinationCity)

    except Exception as e:
        print("Housing Agent Error:", e)

        return []