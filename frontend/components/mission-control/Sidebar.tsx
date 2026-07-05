export default function Sidebar() {
  const agents = [
    {
      icon: "🧠",
      title: "Planning Agent",
      status: "Completed",
      color: "text-green-400",
    },
    {
      icon: "💼",
      title: "Job Scout",
      status: "Searching...",
      color: "text-blue-400",
    },
    {
      icon: "🏠",
      title: "Housing Agent",
      status: "Scanning...",
      color: "text-orange-400",
    },
    {
      icon: "🏥",
      title: "Healthcare Agent",
      status: "Finding hospitals",
      color: "text-red-400",
    },
    {
      icon: "🎓",
      title: "Education Agent",
      status: "Finding schools",
      color: "text-purple-400",
    },
    {
      icon: "💰",
      title: "Budget Agent",
      status: "Optimizing",
      color: "text-green-300",
    },
    {
      icon: "⚖️",
      title: "Risk Agent",
      status: "Completed",
      color: "text-green-400",
    },
  ];

  return (
    <aside className="w-[300px] rounded-3xl border border-white/10 bg-[#0C1220] p-6">

      <h1 className="text-2xl font-black text-white">
        NEXORA
      </h1>

      <p className="mt-1 text-xs tracking-widest text-zinc-500 uppercase">
        AI Transition Engine
      </p>

      <div className="mt-8">

        <p className="mb-4 text-sm font-semibold text-zinc-400">
          AI AGENTS
        </p>

        <div className="space-y-3">

          {agents.map((agent) => (
            <div
              key={agent.title}
              className="rounded-2xl border border-white/5 bg-[#151C2E] p-4 hover:border-cyan-400/40 transition"
            >
              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  {agent.icon}
                </span>

                <div>

                  <h3 className="font-semibold text-white">
                    {agent.title}
                  </h3>

                  <p className={`text-sm ${agent.color}`}>
                    {agent.status}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm">

          <span className="text-zinc-400">
            Overall Progress
          </span>

          <span className="text-cyan-400">
            72%
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-zinc-800">

          <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

        </div>

      </div>

    </aside>
  );
}