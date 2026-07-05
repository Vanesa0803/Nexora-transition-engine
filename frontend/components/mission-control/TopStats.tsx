const stats = [
  {
    title: "Jobs Found",
    value: "127",
    change: "+24%",
    icon: "💼",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Housing",
    value: "54",
    change: "+12%",
    icon: "🏠",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+8%",
    icon: "🎯",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Budget Saved",
    value: "₹1.8L",
    change: "+31%",
    icon: "💰",
    color: "from-orange-500 to-red-500",
  },
];

export default function TopStats() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="group rounded-3xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-zinc-400">
                {stat.title}
              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                {stat.value}
              </h2>

            </div>

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-3xl shadow-xl`}
            >
              {stat.icon}
            </div>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
              {stat.change}
            </span>

            <span className="text-zinc-500 text-sm">
              this month
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}