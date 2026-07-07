type Props = {
  budget: any;
};

export default function BudgetWidget({ budget }: Props) {
  if (!budget) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-bg-white/5 backdrop-blur-xl to-[#0F172A] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">

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
          {budget.risk}
        </div>

      </div>

      <div className="mt-8 space-y-6">

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
              Monthly Income
            </span>

            <span className="font-bold text-white">
              ₹{budget.monthlyIncome}
            </span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
              Estimated Expenses
            </span>

            <span className="font-bold text-white">
              ₹{budget.estimatedExpenses}
            </span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
              Remaining Budget
            </span>

            <span className="font-bold text-cyan-400">
              ₹{budget.remainingBudget}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}