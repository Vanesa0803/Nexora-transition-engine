type AgentCardProps = {
  icon: string;
  title: string;
  status: string;
  description: string;
  progress: number;
};

export default function AgentCard({
  icon,
  title,
  status,
  description,
  progress,
}: AgentCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg transition-all hover:border-blue-500">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="text-3xl">
            {icon}
          </div>

          <div>
            <h2 className="font-semibold text-white">
              {title}
            </h2>

            <p className="text-sm text-zinc-400">
              {description}
            </p>
          </div>

        </div>

        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
          {status}
        </span>

      </div>

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-xs text-zinc-400">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 w-full rounded-full bg-zinc-800">

          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

    </div>
  );
}