import FormCard from "./FormCard";
import SectionTitle from "./SectionTitle";

type StepThreeProps = {
  data: {
    occupation: string;
    monthlyIncome: string;
    savings: string;
    housingBudget: string;
    familyMembers: string;
    educationRequirement: string;
    currentCity: string;
    destinationCity: string;
  };
};

export default function StepThree({
  data,
}: StepThreeProps) {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="🚀 Mission Ready"
        subtitle="Review your details before launching TRANSIFY."
      />

      <FormCard>
        <div className="space-y-5">

          <SummaryItem
            icon="💼"
            label="Occupation"
            value={data.occupation}
          />

          <SummaryItem
            icon="💰"
            label="Monthly Income"
            value={`₹${data.monthlyIncome}`}
          />

          <SummaryItem
            icon="💳"
            label="Savings"
            value={`₹${data.savings}`}
          />

          <SummaryItem
            icon="🏠"
            label="Housing Budget"
            value={`₹${data.housingBudget}`}
          />

          <SummaryItem
            icon="🎓"
            label="Education Requirement"
            value={data.educationRequirement}
          />

          <SummaryItem
            icon="📍"
            label="Current City"
            value={data.currentCity}
          />

          <SummaryItem
            icon="🎯"
            label="Destination City"
            value={data.destinationCity}
          />

        </div>
      </FormCard>

      <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
        <h3 className="text-xl font-bold text-green-300">
          🤖 AI Agents Ready
        </h3>

        <p className="mt-3 text-zinc-300">
          TRANSIFY will now analyze your relocation using multiple AI
          agents to recommend jobs, housing, budgeting, education,
          healthcare and government schemes.
        </p>
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
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-5">
      <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-zinc-300">{label}</span>
      </div>

      <span className="font-semibold text-white">
        {value || "-"}
      </span>
    </div>
  );
}