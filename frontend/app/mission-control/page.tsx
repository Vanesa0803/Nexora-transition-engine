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
    <main className="min-h-screen bg-[#060B14] text-white">
      <div className="mx-auto flex max-w-[1700px] gap-6 p-6">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <HeroSection />

          <TopStats />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <JobsPanel jobs={plan?.jobs} />

              <HousingPanel houses={plan?.housing} />

              <LiveFeed />
            </div>

            <div className="space-y-6">
              <BudgetWidget budget={plan?.budget} />

              <InsightsWidget insights={plan} />

              <QuickActions />
            </div>
          </div>

          <Timeline />
        </div>
      </div>
    </main>
  );
}