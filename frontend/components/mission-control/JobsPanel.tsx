const jobs = [
  {
    company: "Google",
    role: "Software Engineer",
    salary: "₹32 LPA",
    location: "Bangalore",
    match: "98%",
  },
  {
    company: "Microsoft",
    role: "Backend Developer",
    salary: "₹28 LPA",
    location: "Hyderabad",
    match: "95%",
  },
  {
    company: "Amazon",
    role: "Cloud Engineer",
    salary: "₹30 LPA",
    location: "Chennai",
    match: "92%",
  },
];

export default function JobsPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            💼 AI Job Matches
          </h2>

          <p className="text-zinc-400">
            Ranked by AI compatibility
          </p>
        </div>

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400 font-semibold">
          Live Search
        </span>

      </div>

      <div className="mt-6 space-y-4">

        {jobs.map((job) => (

          <div
            key={job.company}
            className="rounded-2xl border border-white/5 bg-[#182233] p-5 transition hover:border-cyan-500 hover:scale-[1.01]"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {job.role}
                </h3>

                <p className="text-zinc-400">
                  {job.company} • {job.location}
                </p>

              </div>

              <div className="text-right">

                <h2 className="text-xl font-bold text-green-400">
                  {job.salary}
                </h2>

                <p className="text-cyan-400">
                  {job.match} Match
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}