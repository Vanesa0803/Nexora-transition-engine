import FormCard from "./FormCard";
import InputField from "./InputField";
import SectionTitle from "./SectionTitle";

type StepTwoProps = {
  data: {
    currentCity: string;
    destinationCity: string;
    savings: string;
  };
  updateData: (field: string, value: string) => void;
};

export default function StepTwo({
  data,
  updateData,
}: StepTwoProps) {
  return (
    <div className="space-y-8">

      <SectionTitle
        title="📍 Relocation Mission"
        subtitle="Tell NEXORA where you're headed so our AI agents can prepare your move."
      />

      <FormCard>

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
            🌍
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Destination Details
            </h2>

            <p className="text-zinc-400">
              Your destination helps our Job, Housing, Healthcare,
              Education and Government Scheme Agents gather local
              opportunities.
            </p>

          </div>

        </div>

        <div className="space-y-6">

          <InputField
            label="Current City"
            placeholder="Patna"
            value={data.currentCity}
            onChange={(value) =>
              updateData("currentCity", value)
            }
          />

          <InputField
            label="Destination City"
            placeholder="Bengaluru"
            value={data.destinationCity}
            onChange={(value) =>
              updateData("destinationCity", value)
            }
          />

          <InputField
  label="Current Savings"
  placeholder="200000"
  type="number"
  value={data.savings}
  onChange={(value) =>
    updateData("savings", value)
  }
/>
        </div>

      </FormCard>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <div className="flex gap-4">

          <div className="text-3xl">
            🚀
          </div>

          <div>

            <h3 className="font-semibold text-cyan-300">
              Mission Preview
            </h3>

            <p className="mt-2 text-zinc-300">
              Based on your destination city, NEXORA will discover
              live job opportunities, affordable housing, nearby
              hospitals, schools, government schemes and estimate
              your monthly living expenses.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}