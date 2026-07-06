import FormCard from "./FormCard";
import SectionTitle from "./SectionTitle";

type StepThreeProps = {
  data: {
    occupation: string;
    income: string;
    familyMembers: int;
    currentCity: string;
    destinationCity: string;
    housingBudget: string;
  };
};

export default function StepThree({
  data,
}: StepThreeProps) {
  return (
    <div className="space-y-8">

      <SectionTitle
        title="🚀 Mission Ready"
        subtitle="NEXORA has everything needed to launch your personalized transition strategy."
      />

      <FormCard>

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-3xl">
            ✅
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Mission Summary
            </h2>

            <p className="text-zinc-400">
              Please verify your details before our AI agents begin
              analyzing your transition.
            </p>

          </div>

        </div>

        <div className="space-y-5">

          <SummaryItem
            icon="💼"
            label="Profession"
            value={data.occupation}
          />

          <SummaryItem
            icon="💰"
            label="Monthly Income"
            value={`₹${data.monthlyIncome}`}
          />

          <SummaryItem
            icon="👨‍👩‍👧"
            label="Family"
            value={data.familyMembers}
          />

          <SummaryItem
            icon="📍"
            label="Current City"
            value={data.currentCity}
          />

          <SummaryItem
            icon="🎯"
            label="Destination"
            value={data.destinationCity}
          />

          <SummaryItem
            icon="🏠"
            label="Housing Budget"
            value={`₹${data.housingBudget}`}
          />

        </div>

      </FormCard>

      <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

        <div className="flex gap-4">

          <div className="text-4xl">
            🤖
          </div>

          <div>

            <h3 className="text-xl font-bold text-green-300">
              AI Agents Ready
            </h3>

            <p className="mt-3 text-zinc-300">

              Once you launch this mission, NEXORA will coordinate
              eight specialized AI agents to analyze your relocation,
              discover opportunities, evaluate risks and generate one
              personalized transition plan within seconds.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function SummaryItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-5">

      <div className="flex items-center gap-4">

        <span className="text-2xl">
          {icon}
        </span>

        <span className="text-zinc-300">
          {label}
        </span>

      </div>

      <span className="font-semibold text-white">
        {value || "-"}
      </span>

    </div>
  );
}