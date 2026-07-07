"use client";

import { useEffect, useState } from "react";


import LiveFeed from "@/components/mission-control/LiveFeed";
import Sidebar from "@/components/mission-control/Sidebar";
import HeroSection from "@/components/mission-control/HeroSection";
import TopStats from "@/components/mission-control/TopStats";
import JobsPanel from "@/components/mission-control/JobsPanel";
import HousingPanel from "@/components/mission-control/HousingPanel";
import BudgetWidget from "@/components/mission-control/BudgetWidget";
import InsightsWidget from "@/components/mission-control/InsightsWidget";
import Timeline from "@/components/mission-control/Timeline";
import QuickActions from "@/components/mission-control/QuickActions";
import EducationPanel from "@/components/mission-control/EducationPanel";
import FinalRecommendation from "@/components/mission-control/FinalRecommendation";
import CostOfLivingCard from "@/components/mission-control/CostOfLivingCard";
import GovernmentSchemesPanel from "@/components/mission-control/GovernmentSchemesPanel";

export default function MissionControlPage() {
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<any>(null);

  useEffect(() => {
  const savedPlan = localStorage.getItem("planningResult");

  if (savedPlan) {
    setPlan(JSON.parse(savedPlan));
  } else {
    console.error("No planning result found.");
  }

  setLoading(false);
}, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#060B14] text-white">
        <div className="text-2xl font-semibold animate-pulse">
          🚀 Launching Mission To Transition...
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

  {/* Background Glow */}
  <div className="absolute left-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px] animate-pulse" />

  <div className="absolute right-[-250px] top-[300px] h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[220px] animate-pulse" />

  <div className="absolute bottom-[-250px] left-1/3 h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[220px] animate-pulse" />

  <div className="relative z-10">

  {/* Animated background */}
  <div className="absolute inset-0 -z-10">

    <div className="absolute left-20 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />

    <div className="absolute right-20 top-60 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />

    <div className="absolute bottom-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px] animate-pulse" />

  </div>
      <div className="mx-auto flex max-w-[1700px] gap-6 p-6">
        <Sidebar />

        <div className="flex-1 space-y-6">

  <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#1E293B] p-8">

    <p className="text-cyan-400 font-semibold">
      🚀 AI Transition Command Center
    </p>

    <h1 className="mt-3 text-4xl font-black">
      Welcome to Your
      <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Personalized Transition Plan
      </span>
    </h1>

    <p className="mt-4 max-w-3xl text-zinc-400">
      Multiple AI agents have analyzed your relocation and prepared one unified strategy covering employment, housing, budgeting, education and government support.
    </p>

  </div>

  <TopStats plan={plan} />

  <div className="grid grid-cols-5 gap-4">

  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center transition-all hover:scale-105">
    <div className="text-3xl">💼</div>
    <p className="mt-2 font-semibold text-white">Employment</p>
    <span className="text-xs text-green-400 animate-pulse">● ACTIVE</span>
  </div>

  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-center transition-all hover:scale-105">
    <div className="text-3xl">🏠</div>
    <p className="mt-2 font-semibold text-white">Housing</p>
    <span className="text-xs text-blue-400 animate-pulse">● ACTIVE</span>
  </div>

  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-center transition-all hover:scale-105">
    <div className="text-3xl">💰</div>
    <p className="mt-2 font-semibold text-white">Budget</p>
    <span className="text-xs text-yellow-400 animate-pulse">● ACTIVE</span>
  </div>

  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-center transition-all hover:scale-105">
    <div className="text-3xl">🎓</div>
    <p className="mt-2 font-semibold text-white">Education</p>
    <span className="text-xs text-purple-400 animate-pulse">● ACTIVE</span>
  </div>

  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center transition-all hover:scale-105">
    <div className="text-3xl">🏛️</div>
    <p className="mt-2 font-semibold text-white">Government</p>
    <span className="text-xs text-cyan-400 animate-pulse">● ACTIVE</span>
  </div>

</div>

          <div className="grid grid-cols-12 gap-6">

  {/* LEFT COLUMN */}
  <div className="col-span-8 space-y-6">

    {/* Live Feed */}
    <section id="timeline">
      <LiveFeed />
    </section>

    {/* Jobs */}
    <section id="jobs">
      <JobsPanel jobs={plan?.jobs} />
    </section>

    {/* Housing */}
    <section id="housing">
      <HousingPanel houses={plan?.housing} />
    </section>

    {/* Education */}
    <section id="education">
      <EducationPanel education={plan?.education} />
    </section>

  </div>

  {/* RIGHT COLUMN */}
  <div className="col-span-4 space-y-6">

    <section id="budget">
      <BudgetWidget budget={plan?.budget} />
    </section>

    <CostOfLivingCard cost={plan?.costOfLiving} />

    <FinalRecommendation
      recommendation={plan?.finalRecommendation}
    />

    <GovernmentSchemesPanel
      schemes={plan?.governmentSchemes}
    />

    <InsightsWidget insights={plan} />

    <QuickActions />

  </div>

</div>

          <Timeline />
        </div>
      </div>
      </div>
    </main>
  );
}