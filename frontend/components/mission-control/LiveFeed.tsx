"use client";

import { useEffect, useState } from "react";

const logs = [
  "🧠 Planning Agent initialized...",
  "📍 Analysing relocation strategy...",
  "💼 Searching jobs...",
  "🏠 Finding nearby housing...",
  "🏥 Looking for hospitals...",
  "🎓 Checking schools...",
  "💰 Optimising budget...",
  "⚠️ Calculating risks...",
  "🤝 Resolving conflicts...",
  "✅ Transition plan generated.",
];

export default function LiveFeed() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      if (i < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 Live Mission Feed
      </h2>

      <p className="mt-2 text-zinc-400">
        Real-time AI orchestration
      </p>

      <div className="mt-8 space-y-4">

        {visibleLogs.map((log, index) => (

          <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-[#182233] p-4 animate-pulse"
          >

            <div className="h-3 w-3 rounded-full bg-cyan-400" />

            <p className="text-zinc-200">
              {log}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}