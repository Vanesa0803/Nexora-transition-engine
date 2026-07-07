"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const agents = [
  {
    icon: "🧠",
    title: "Planning Agent",
    action: "Building personalized relocation strategy...",
  },
  {
    icon: "💼",
    title: "Job Agent",
    action: "Scanning thousands of live job opportunities...",
  },
  {
    icon: "🏠",
    title: "Housing Agent",
    action: "Finding affordable housing options...",
  },
  {
    icon: "🏥",
    title: "Healthcare Agent",
    action: "Locating nearby hospitals & clinics...",
  },
  {
    icon: "🎓",
    title: "Education Agent",
    action: "Searching schools & colleges...",
  },
  {
    icon: "💰",
    title: "Budget Agent",
    action: "Calculating monthly expenses...",
  },
  {
    icon: "⚠️",
    title: "Risk Analysis",
    action: "Evaluating relocation risks...",
  },
  {
    icon: "🤝",
    title: "Negotiation Agent",
    action: "Preparing final recommendations...",
  },
];

export default function LoadingPage() {
  const router = useRouter();

  const [activeAgent, setActiveAgent] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => {
        if (prev === agents.length) {
          clearInterval(interval);

          setFinished(true);

          setTimeout(() => {
            router.push("/mission-control");
          }, 1800);

          return prev;
        }

        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-10 shadow-2xl">

        <div className="mb-10">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            TRANSIFY..
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Mission Control
          </h1>

          <p className="mt-3 text-zinc-400">
            Coordinating eight specialized AI agents to build your personalized
            transition plan.
          </p>

        </div>

        <div className="space-y-5">

          {agents.map((agent, index) => {

            const completed = index < activeAgent;
            const thinking = index === activeAgent;

            return (

              <div
                key={agent.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-lg font-semibold">

                      {agent.icon} {agent.title}

                    </h2>

                    <p className="text-sm text-zinc-400 mt-1">

                      {agent.action}

                    </p>

                  </div>

                  <div>

                    {completed ? (
                      <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                        ✓ Completed
                      </span>
                    ) : thinking ? (
                      <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400 animate-pulse">
                        Processing...
                      </span>
                    ) : (
                      <span className="rounded-full bg-zinc-800 px-4 py-2 text-zinc-500">
                        Waiting
                      </span>
                    )}

                  </div>

                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-800">

                  <div
                    className={`h-full transition-all duration-700 ${
                      completed
                        ? "w-full bg-green-500"
                        : thinking
                        ? "w-2/3 bg-gradient-to-r from-blue-500 to-cyan-400"
                        : "w-0"
                    }`}
                  />

                </div>

              </div>

            );
          })}

        </div>

        <div className="mt-10">

          {!finished ? (

            <>
              <div className="flex justify-between text-sm text-zinc-400">

                <span>Overall Progress</span>

                <span>{Math.round((activeAgent / agents.length) * 100)}%</span>

              </div>

              <div className="mt-3 h-4 overflow-hidden rounded-full bg-zinc-800">

                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                  style={{
                    width: `${(activeAgent / agents.length) * 100}%`,
                  }}
                />

              </div>

            </>

          ) : (

            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center">

              <h2 className="text-3xl font-bold text-green-400">

                ✅ Mission Complete

              </h2>

              <p className="mt-3 text-zinc-300">

                All AI agents have finished their analysis.

              </p>

              <p className="mt-2 text-cyan-400">

                Launching your personalized dashboard...

              </p>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}