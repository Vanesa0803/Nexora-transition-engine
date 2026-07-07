type Props = {
  cost?: {
    food: number;
    transport: number;
    utilities: number;
    internet: number;
    miscellaneous: number;
  };
};

export default function CostOfLivingCard({ cost }: Props) {
  if (!cost) return null;

  const total =
    cost.food +
    cost.transport +
    cost.utilities +
    cost.internet +
    cost.miscellaneous;

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            💸 Cost of Living
          </h2>

          <p className="text-zinc-400">
            Estimated Monthly Expenses
          </p>
        </div>

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400 font-semibold">
          LIVE
        </span>
      </div>

      <div className="mt-6 space-y-4">

        <Row label="🍛 Food" value={cost.food} />

        <Row label="🚌 Transport" value={cost.transport} />

        <Row label="💡 Utilities" value={cost.utilities} />

        <Row label="🌐 Internet" value={cost.internet} />

        <Row label="🛍 Miscellaneous" value={cost.miscellaneous} />

        <div className="mt-5 border-t border-white/10 pt-5 flex justify-between">

          <span className="text-lg font-semibold text-white">
            Total Estimate
          </span>

          <span className="text-2xl font-bold text-cyan-400">
            ₹{total.toLocaleString()}
          </span>

        </div>

      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0F172A] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">
      <span className="text-zinc-300">{label}</span>

      <span className="font-semibold text-white">
        ₹{value.toLocaleString()}
      </span>
    </div>
  );
}