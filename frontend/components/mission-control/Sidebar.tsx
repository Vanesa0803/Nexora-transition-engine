export default function Sidebar() {
  const menu = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "🧠", label: "Mission" },
    { icon: "💼", label: "Jobs" },
    { icon: "🏠", label: "Housing" },
    { icon: "🏥", label: "Healthcare" },
    { icon: "🎓", label: "Education" },
    { icon: "💰", label: "Budget" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside className="w-72 rounded-3xl border border-white/10 bg-[#0E1728] p-6">

      <h1 className="text-3xl font-extrabold tracking-wider text-cyan-400">
        NEXORA
      </h1>

      <p className="mt-2 text-sm text-zinc-500">
        Transition Engine
      </p>

      <div className="mt-10 space-y-2">

        {menu.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition ${
              item.active
                ? "bg-cyan-500 text-black font-bold"
                : "text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}

      </div>

      <div className="mt-14 rounded-2xl bg-cyan-500/10 p-5 border border-cyan-500/20">

        <p className="text-xs text-zinc-400">
          AI Status
        </p>

        <h2 className="mt-2 text-xl font-bold text-cyan-400">
          8 Agents Active
        </h2>

      </div>

    </aside>
  );
}