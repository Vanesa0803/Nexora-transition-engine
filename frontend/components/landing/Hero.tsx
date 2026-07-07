"use client";

import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/GoogleLogin";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-8">

        <h1 className="text-3xl font-black tracking-tight">
          <span className="text-blue-500">TRANS</span>IFY
        </h1>

        <div className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm text-zinc-300">
          AI Transition Copilot
        </div>

      </nav>

      {/* Hero */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-8 pt-24 text-center">

        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-300">
          🚀 Multi-Agent AI for Social Impact
        </div>

        <h1 className="max-w-5xl text-6xl font-black leading-tight">

          for Life's Next Chapter

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Navigate your Next Life.
          </span>

        </h1>

        <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-3xl mx-auto">

  <span className="font-semibold text-white">
    Move to a new city with confidence.
  </span>

  <br />
  <br />

  TRANSIFY brings together five plus specialized AI agents to create one personalized transition plan covering jobs, housing, healthcare, budgeting, education, and government support.

</p>
        <div className="mt-12 flex gap-5 items-center">

  <div className="scale-110">
    <GoogleLogin />
  </div>

  <button
    className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg transition hover:bg-zinc-800"
  >
    Learn More
  </button>

</div>

        {/* Stats */}

        <div className="mt-24 grid w-full max-w-5xl grid-cols-4 gap-6">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-blue-400">5+</h2>
            <p className="mt-2 text-zinc-400">AI Agents</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-green-400">3+</h2>
            <p className="mt-2 text-zinc-400">Life Domains</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-purple-400">1</h2>
            <p className="mt-2 text-zinc-400">Unified Plan</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-cyan-400">AI</h2>
            <p className="mt-2 text-zinc-400">Decision Engine</p>
          </div>

        </div>

      </div>

    </section>
  );
}