type Job = {
  title: string;
  location: string;
  salary: string;
};

type JobSectionProps = {
  jobs: Job[];
};

export default function JobSection({ jobs }: JobSectionProps) {
  return (
    <section className="space-y-5">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          💼 Recommended Jobs
        </h2>

        <p className="text-zinc-400">
          {jobs.length} opportunities found
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {jobs.map((job, index) => (

          <div
            key={index}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-zinc-900"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {job.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  📍 {job.location}
                </p>

              </div>

              <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                LIVE
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <p className="text-2xl font-bold text-green-400">
                {job.salary}
              </p>

              <button className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
                View →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}