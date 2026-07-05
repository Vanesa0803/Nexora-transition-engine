from services.job_service import search_jobs


def run_job_agent(data):
    try:
        return search_jobs(
            query=data.occupation,
            location=data.destinationCity
        )
    except Exception as e:
        print("Job Agent Error:", e)

        return [
            {
                "title": "Job data temporarily unavailable",
                "company": "",
                "salary": "",
                "location": data.destinationCity,
                "applyLink": None
            }
        ]