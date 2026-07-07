type Props = {
  recommendation?: {
    finalRecommendation?: string;
  };
};

export default function FinalRecommendation({
  recommendation,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 p-6">

      <div className="flex items-center gap-3">
        <div className="text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Final Recommendation
          </h2>

          <p className="text-zinc-400">
            Synthesized by TRANSIFY Decision Engine
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[#162033] p-5 leading-8 text-zinc-200">
        {recommendation?.finalRecommendation ||
          "Generating final recommendation..."}
      </div>
    </div>
  );
}