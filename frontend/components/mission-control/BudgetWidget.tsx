export default function BudgetWidget() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            💰 Budget Intelligence
          </h2>

          <p className="text-zinc-400">
            AI Financial Analysis
          </p>
        </div>

        <div className="rounded-2xl bg-green-500/20 px-4 py-2 text-green-400 font-bold">
          Healthy
        </div>

      </div>

      <div className="mt-8 space-y-6">

        <div>

          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">Monthly Budget</span>
            <span className="font-bold text-white">₹75,000</span>
          </div>

          <div className="h-3 rounded-full bg-zinc-700">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
              style={{ width: "82%" }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">Expected Expenses</span>
            <span className="font-bold text-white">₹61,500</span>
          </div>

          <div className="h-3 rounded-full bg-zinc-700">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
              style={{ width: "70%" }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">Savings Potential</span>
            <span className="font-bold text-cyan-400">
              ₹13,500
            </span>
          </div>

          <div className="h-3 rounded-full bg-zinc-700">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{ width: "30%" }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}