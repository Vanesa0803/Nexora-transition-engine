type Props = {
  insights: any;
};

export default function InsightsWidget({ insights }: Props) {
  if (!insights) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-bold text-white">
        🧠 AI Insights
      </h2>

      <div className="mt-6 space-y-5">

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            Risk Level
          </p>

          <h2 className="mt-2 text-4xl font-bold text-red-400">
            {insights.risk}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            Priority
          </p>

          <h2 className="mt-2 text-xl font-bold text-cyan-400">
            {insights.priority}
          </h2>
        </div>

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            AI Recommendation
          </p>

          <p className="mt-2 text-zinc-200">
            {insights.recommendations?.[0]}
          </p>
        </div>

      </div>

    </div>
  );
}