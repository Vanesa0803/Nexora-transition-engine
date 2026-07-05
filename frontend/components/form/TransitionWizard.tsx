"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";

export default function TransitionWizard() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [transitionData, setTransitionData] = useState({
  occupation: "",
  income: "",
  familyMembers: "",
  currentCity: "",
  destinationCity: "",
  housingBudget: "",
});

  const nextStep = async () => {
  if (step < 3) {
    setStep(step + 1);
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transitionData),
    });

    const result = await response.json();

// Save AI planning result
localStorage.setItem(
  "planningResult",
  JSON.stringify(result)
);

// Save user's form
localStorage.setItem(
  "transitionData",
  JSON.stringify(transitionData)
);

router.push("/loading");
  } catch (error) {
    console.error(error);
    alert("Failed to connect to Transition Engine.");
  }
};

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateData = (field: string, value: string) => {
  setTransitionData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

      <ProgressBar step={step} />

      <div className="my-10">
        {step === 1 && (
  <StepOne
    data={{
      occupation: transitionData.occupation,
      income: transitionData.income,
      familyMembers: transitionData.familyMembers,
    }}
    updateData={updateData}
  />
)}
        {step === 2 && (
  <StepTwo
    data={{
      currentCity: transitionData.currentCity,
      destinationCity: transitionData.destinationCity,
      housingBudget: transitionData.housingBudget,
    }}
    updateData={updateData}
  />
)}
        {step === 3 && (
  <StepThree
    data={transitionData}
  />
)}
      </div>

      <div className="flex justify-between">

        <button
          onClick={previousStep}
          disabled={step === 1}
          className="rounded-lg border border-zinc-700 px-6 py-2 disabled:opacity-30"
        >
          ← Back
        </button>

        <button
  onClick={nextStep}
  className="rounded-lg bg-blue-600 px-6 py-2 hover:bg-blue-700"
>
  {step === 3
  ? "🚀 Launch My Mission"
  : "Continue →"}
</button>

      </div>
    </div>
  );
}