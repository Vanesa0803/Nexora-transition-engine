import FormCard from "./FormCard";
import InputField from "./InputField";
import SectionTitle from "./SectionTitle";

type StepOneProps = {
  data: {
    occupation: string;
    income: string;
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

      <div className="grid gap-6">

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
                Your occupation helps NEXORA recommend the most relevant jobs.
              </p>
            </div>

          </div>

          <div className="space-y-6">

            <InputField
              label="Occupation"
              placeholder="Teacher, Electrician, Driver..."
              value={data.occupation}
              onChange={(value) =>
                updateData("occupation", value)
              }
            />

            <InputField
              label="Monthly Income"
              placeholder="₹25,000"
              type="number"
              value={data.income}
              onChange={(value) =>
                updateData("income", value)
              }
            />

            <InputField
              label="Family Members"
              placeholder="Example: Wife + 2 Children"
              value={data.familyMembers}
              onChange={(value) =>
                updateData("familyMembers", value)
              }
            />

          </div>

        </FormCard>

      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

        <div className="flex gap-4">

          <div className="text-3xl">
            🤖
          </div>

          <div>

            <h3 className="font-semibold text-blue-300">
              AI Insight
            </h3>

            <p className="mt-2 text-zinc-300">
              Your profession and income help our Job Agent,
              Budget Agent and Housing Agent work together to
              build recommendations tailored specifically to you.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}