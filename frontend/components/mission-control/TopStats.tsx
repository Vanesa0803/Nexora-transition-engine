type Props = {
  plan: any;
};

export default function TopStats({ plan }: Props) {
  const stats = [
    {
      title: "Jobs Found",
      value: plan?.jobs?.length || 0,
      change: "Live",
      icon: "💼",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Housing",
      value: plan?.housing?.length || 0,
      change: "Live",
      icon: "🏠",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Risk",
      value: plan?.risk || "Unknown",
      change: "AI",
      icon: "⚠️",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Monthly Income",
      value: `₹${plan?.budget?.monthlyIncome || 0}`,
      change: "Live",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="group rounded-3xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">{stat.title}</p>

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

            <span className="text-sm text-zinc-500">
              live data
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}