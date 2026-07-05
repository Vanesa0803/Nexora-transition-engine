type MissionHeroProps = {
  transition: {
    occupation: string;
    currentCity: string;
    destinationCity: string;
    familyMembers: string;
  };
};

export default function MissionHero({
  transition,
}: MissionHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0B1220] via-[#111827] to-[#162033] p-10">

      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Mission Control
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight text-white">
            Your Transition
            <br />
            is Underway 🚀
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Nexora's AI agents are analyzing your relocation, searching
            jobs, finding homes and preparing your complete transition plan.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
              View AI Report
            </button>

            <button className="rounded-xl border border-zinc-700 px-6 py-3 text-white hover:border-cyan-400">
              Live Tracking
            </button>

          </div>

        </div>

        <div className="hidden lg:block">

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0F172A]/80 p-8">

            <p className="text-sm text-zinc-500">
              CURRENT MISSION
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              {transition.currentCity}
            </h2>

            <p className="mt-2 text-zinc-500">
              ↓
            </p>

            <h2 className="mt-2 text-2xl font-bold text-cyan-400">
              {transition.destinationCity}
            </h2>

            <div className="mt-6 h-2 rounded-full bg-zinc-800">

              <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

            </div>

            <p className="mt-3 text-sm text-zinc-400">
              Mission Progress • 68%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}