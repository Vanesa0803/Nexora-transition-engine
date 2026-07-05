export default function MissionHeader() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            🚀 Transition Engine
          </h1>

          <p className="mt-2 text-zinc-400">
            Coordinating specialized AI agents for your relocation.
          </p>
        </div>

        <div className="space-y-2 text-right">

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Mission ID
            </p>

            <p className="font-semibold text-white">
              TE-2026-001
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Status
            </p>

            <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
              ACTIVE
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}