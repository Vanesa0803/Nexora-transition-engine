export default function InsightsWidget() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-6">

      <h2 className="text-2xl font-bold text-white">
        🧠 AI Insights
      </h2>

      <div className="mt-6 space-y-5">

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            Success Probability
          </p>

          <h2 className="mt-2 text-4xl font-bold text-green-400">
            94%
          </h2>

          <p className="mt-2 text-zinc-400">
            Very high chance of a successful relocation.
          </p>
        </div>

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            Biggest Risk
          </p>

          <h2 className="mt-2 text-xl font-bold text-red-400">
            Housing availability
          </h2>
        </div>

        <div className="rounded-2xl bg-[#182233] p-5">
          <p className="text-sm text-zinc-400">
            AI Recommendation
          </p>

          <p className="mt-2 text-zinc-200">
            Secure accommodation before accepting the offer to reduce relocation risk.
          </p>
        </div>

      </div>

    </div>
  );
}