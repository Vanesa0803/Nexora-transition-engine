const API = "http://127.0.0.1:8000";

export async function getJobs(query: string, location: string) {
  const res = await fetch(
    `${API}/jobs?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

export async function createTransitionPlan(data: any) {
  const res = await fetch(`${API}/plan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create plan");
  }

  return res.json();
}