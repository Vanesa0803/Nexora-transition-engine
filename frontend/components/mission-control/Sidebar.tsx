"use client";

export default function Sidebar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const menu = [
    { icon: "🏠", label: "Dashboard", id: "hero" },
    { icon: "🧠", label: "Mission", id: "timeline" },
    { icon: "💼", label: "Jobs", id: "jobs" },
    { icon: "🏠", label: "Housing", id: "housing" },
    { icon: "🎓", label: "Education", id: "education" },
    { icon: "💰", label: "Budget", id: "budget" },
  ];

  return (
    <aside className="sticky top-6 h-[95vh] w-72 rounded-3xl border border-white/10 bg-[#0E1728]/80 backdrop-blur-xl p-6">

      <h1 className="text-3xl font-extrabold tracking-wider text-cyan-400">
        TRANSIFY
      </h1>

      <p className="mt-2 text-sm text-zinc-500">
        Transition Engine
      </p>

      <div className="mt-10 space-y-2">
        {menu.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.id)}
            className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-zinc-300 transition hover:bg-cyan-500 hover:text-black"
          >
            <span className="text-xl">{item.icon}</span>

            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
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