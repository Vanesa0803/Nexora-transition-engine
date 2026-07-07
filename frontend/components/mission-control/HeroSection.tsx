export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#08101D] via-[#0D1525] to-[#13253A] p-10">

      <div className="flex items-center justify-between gap-10">

        {/* LEFT */}

        <div className="max-w-2xl">

          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase">
            Mission To Transition
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight text-white">
            Your Transition
            <br />
            is Underway 🚀
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-400 leading-8">
            TRANSIFY's AI agents are coordinating your relocation,
            searching jobs, comparing homes,
            planning finances and preparing your complete transition.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              View AI Report
            </button>

            <button className="rounded-[32px] border border-slate-600 px-8 py-4 text-white hover:border-cyan-400">
              Live Tracking
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative w-[360px] rounded-3xl border border-cyan-400/20 bg-[#09111E] p-7 shadow-2xl">

  <div className="absolute right-6 top-6 h-3 w-3 animate-pulse rounded-full bg-green-400"></div>

  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
    Live Mission
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    ACTIVE
  </h2>

  <div className="mt-8 space-y-5">

    <div>
      <div className="flex justify-between text-sm text-slate-400">
        <span>Mission Progress</span>
        <span>68%</span>
      </div>

      <div className="mt-2 h-2 rounded-full bg-slate-800">
        <div className="h-2 w-[68%] rounded-full bg-cyan-400"></div>
      </div>
    </div>

    <div className="rounded-[32px] bg-[#101B2D] p-5">

      <p className="text-xs uppercase tracking-widest text-slate-500">
        Current Route
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        Delhi → Bengaluru
      </h3>

    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-2xl bg-[#101B2D] p-4">
        <p className="text-xs text-slate-500">
          AI Agents
        </p>

        <h3 className="mt-2 text-2xl font-bold text-cyan-400">
          8
        </h3>
      </div>

      <div className="rounded-2xl bg-[#101B2D] p-4">
        <p className="text-xs text-slate-500">
          ETA
        </p>

        <h3 className="mt-2 text-2xl font-bold text-cyan-400">
          14 min
        </h3>
      </div>

    </div>

  </div>

</div>

      </div>

    </section>
  );
}