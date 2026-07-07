import FormCard from "./FormCard";
import InputField from "./InputField";
import SectionTitle from "./SectionTitle";

type StepTwoProps = {
  data: {
    currentCity: string;
    destinationCity: string;
    savings: string;
    housingBudget: string;
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
        title="📍 Relocation Details"
        subtitle="Tell TRANSIFY where you're relocating."
      />

      <FormCard>
        <div className="space-y-6">
          <InputField
            label="Current City"
            placeholder="Delhi"
            value={data.currentCity}
            onChange={(value) => updateData("currentCity", value)}
          />

          <InputField
            label="Destination City"
            placeholder="Bangalore"
            value={data.destinationCity}
            onChange={(value) => updateData("destinationCity", value)}
          />

          <InputField
            label="Current Savings"
            placeholder="100000"
            type="number"
            value={data.savings}
            onChange={(value) => updateData("savings", value)}

          />

          <InputField
    label="Housing Budget"
    placeholder="25000"
    type="number"
    value={data.housingBudget}
    onChange={(value) =>
        updateData("housingBudget", value)
    }
/>


        </div>
      </FormCard>
    </div>
  );
}