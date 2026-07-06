type Job = {
  title: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string | null;
};

type JobsPanelProps = {
  jobs?: Job[];
};

export default function JobsPanel({ jobs = [] }: JobsPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            💼 AI Job Matches
          </h2>

          <p className="text-zinc-400">
            {jobs.length} live opportunities found
          </p>
        </div>

        <span className="rounded-full bg-green-500/20 px-4 py-2 font-semibold text-green-400">
          LIVE
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {jobs.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-6 text-center text-zinc-400">
            No jobs found.
          </div>
        ) : (
          jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/5 bg-[#182233] p-5 transition hover:border-cyan-500 hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    {job.company}
                  </p>

                  <p className="text-sm text-zinc-500">
                    📍 {job.location}
                  </p>
                </div>

                <div className="text-right">
                  <h2 className="font-bold text-green-400">
                    {job.salary}
                  </h2>

                  {job.applyLink && (
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
                    >
                      Apply →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}