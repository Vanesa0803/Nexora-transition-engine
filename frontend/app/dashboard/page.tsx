"use client";

import { useEffect, useState } from "react";

type Job = {
  title: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string;
};

export default function DashboardPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [transition, setTransition] = useState<any>(null);
const [planningResult, setPlanningResult] = useState<any>(null);

useEffect(() => {
  const transitionData = localStorage.getItem("transitionData");
  const planningData = localStorage.getItem("planningResult");

  if (!transitionData) return;

  const data = JSON.parse(transitionData);

  setTransition(data);

  if (planningData) {
    setPlanningResult(JSON.parse(planningData));
  }

  fetch(
    `http://127.0.0.1:8000/jobs?query=${encodeURIComponent(
      data.occupation
    )}&location=${encodeURIComponent(
      data.destinationCity
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
      setLoading(false);
    });
}, []);

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">
        AI Job Recommendations
      </h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-700 p-6"
            >
              <h2 className="text-xl font-semibold">
                {job.title}
              </h2>

              <p>{job.company}</p>

              <p>{job.location}</p>

              <p>{job.salary}</p>

              <a
                href={job.applyLink}
                target="_blank"
                className="text-blue-400 underline"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}