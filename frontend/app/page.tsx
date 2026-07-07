import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import AgentsSection from "@/components/landing/AgentsSection";
import WhySection from "@/components/landing/WhySection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <AgentsSection />
      <WhySection />
      <Footer />
    </>
  );
}