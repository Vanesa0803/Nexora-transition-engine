import TransitionWizard from "@/components/form/TransitionWizard";

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-3 text-center text-5xl font-bold">
          Mission Brief
        </h1>

        <p className="mb-12 text-center text-gray-400">
          Tell us about your upcoming transition.
        </p>

        <TransitionWizard />

      </div>
    </main>
  );
}