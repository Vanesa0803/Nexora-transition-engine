"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

type Job = {
  title: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string;
};

export default function DashboardPage() {
  const user = auth.currentUser;
  const [jobs, setJobs] = useState<any[]>([]);
  const [transition, setTransition] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  const saved = localStorage.getItem("transitionData");

  if (!saved) return;

  const data = JSON.parse(saved);

  setTransition(data);

  fetch(
    `https://transify-transition-engine.onrender.com/plan/jobs?query=${encodeURIComponent(
      data.occupation
    )}&location=${encodeURIComponent(
      data.destinationCity
    )}`
  )
    .then((res) => res.json())
    .then((jobs) => {
        console.log(jobs);
        setJobs(jobs);
        setLoading(false);
    });

}, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-10">

  <div className="flex items-center gap-4">

    <img
      src={user?.photoURL || ""}
      className="w-16 h-16 rounded-full"
    />

    <div>

      <h1 className="text-4xl font-bold">
        Welcome {user?.displayName}
      </h1>

      <p className="text-zinc-400">
        {user?.email}
      </p>

    </div>

  </div>

  <button
    onClick={async () => {
      await signOut(auth);
      window.location.href = "/";
    }}
    className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
  >
    Logout
  </button>

</div>

        {transition && (

  <div className="mt-6 bg-zinc-900 rounded-xl p-6">

    <p>
      <strong>Occupation:</strong> {transition.occupation}
    </p>

    <p>
      <strong>Current City:</strong> {transition.currentCity}
    </p>

    <p>
      <strong>Destination:</strong> {transition.destinationCity}
    </p>

    <p>
      <strong>Monthly Income:</strong> ₹{transition.income}
    </p>

  </div>

)}

        <h2 className="text-2xl font-semibold mb-6">
          Recommended Jobs
        </h2>

        {loading ? (
          <p className="text-gray-400">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-400">No jobs found.</p>
        ) : (
          <div className="space-y-5">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-700 bg-zinc-900 p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {job.title}
                </h3>

                <p className="mt-2 text-gray-300">
                  🏢 {job.company}
                </p>

                <p className="text-gray-400">
                  📍 {job.location}
                </p>

                <p className="text-green-400">
                  💰 {job.salary}
                </p>

                <a
  href={job.applyLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:from-blue-500 hover:to-cyan-400"
>
  🚀 Apply Now
</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}