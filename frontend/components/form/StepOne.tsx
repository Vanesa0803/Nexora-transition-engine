import FormCard from "./FormCard";
import InputField from "./InputField";
import SectionTitle from "./SectionTitle";

type StepOneProps = {
  data: {
    occupation: string;
    monthlyIncome: string;
    educationRequirement: string;
    familyMembers: string;
  };

  updateData: (field: string, value: string) => void;
};
 

export default function StepOne({
  data,
  updateData,
}: StepOneProps) {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="👤 Personal Profile"
        subtitle="Let's begin by understanding your current situation before our AI agents build your transition strategy."
      />

      <FormCard>
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl">
            💼
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Professional Details
            </h2>

            <p className="text-zinc-400">
              Your occupation helps TRANSIFY recommend the best jobs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <InputField
            label="Occupation"
            placeholder="Software Engineer"
            value={data.occupation}
            onChange={(value) => updateData("occupation", value)}
          />

          <InputField
            label="Monthly Income"
            placeholder="50000"
            type="number"
            value={data.monthlyIncome}
            onChange={(value) => updateData("monthlyIncome", value)}
          />

          <InputField
  label="Family Members"
  placeholder="4"
  type="number"
  value={data.familyMembers}
  onChange={(value) =>
    updateData("familyMembers", value)
  }
/>

          <div>
  <label className="mb-2 block text-sm font-medium text-white">
    Education Requirement
  </label>

  <select
    value={data.educationRequirement}
    onChange={(e) =>
      updateData("educationRequirement", e.target.value)
    }
    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
  >
    <option>None</option>
    <option>School</option>
    <option>College</option>
    <option>Both</option>
  </select>
</div>
        </div>
      </FormCard>
    </div>
  );
}