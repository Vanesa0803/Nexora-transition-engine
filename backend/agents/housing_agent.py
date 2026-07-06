from services.housing_service import search_houses


def run_housing_agent(data):
    return search_houses(data.destinationCity)