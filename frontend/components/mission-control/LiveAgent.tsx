type LiveAgentProps = {
  icon: string;
  title: string;
  description: string;
  status: string;
  progress: number;
};

export default function LiveAgent({
  icon,
  title,
  description,
  status,
  progress,
}: LiveAgentProps) {
  const statusColor =
    status === "Completed"
      ? "text-green-400"
      : status === "Thinking"
      ? "text-cyan-400"
      : "text-zinc-500";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-cyan-500 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="text-3xl">
            {icon}
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              {title}
            </h3>

            <p className="text-sm text-zinc-400">
              {description}
            </p>
          </div>

        </div>

        <span className={`font-semibold ${statusColor}`}>
          {status}
        </span>

      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-3 text-xs text-zinc-500">
        {progress}% completed
      </p>

    </div>
  );
}