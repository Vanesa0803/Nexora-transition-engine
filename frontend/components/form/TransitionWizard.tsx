"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";

export default function TransitionWizard() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [transitionData, setTransitionData] = useState({
    occupation: "",
    monthlyIncome: "",
    savings: "",
    housingBudget: "",
    familyMembers: "",
    educationRequirement: "None",
    currentCity: "",
    destinationCity: "",
  });

  const updateData = (field: string, value: string) => {
    setTransitionData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const nextStep = async () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    const payload = {
      occupation: transitionData.occupation.trim(),
      currentCity: transitionData.currentCity.trim(),
      destinationCity: transitionData.destinationCity.trim(),

      monthlyIncome: Number(transitionData.monthlyIncome),
      savings: Number(transitionData.savings),
      familyMembers: Number(transitionData.familyMembers),
      housingBudget: Number(transitionData.housingBudget),

      educationRequirement: transitionData.educationRequirement,
    };

    console.log("PAYLOAD");
    console.log(payload);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      

      if (!response.ok) {
        const error = await response.text();
        console.log(error);
        throw new Error(error);
      }

      const result = await response.json();

      console.log("PLAN RECEIVED");
      console.log(result);

      localStorage.setItem(
        "planningResult",
        JSON.stringify(result)
      );

      localStorage.setItem(
        "transitionData",
        JSON.stringify(payload)
      );

      router.push("/loading");
    } catch (error) {
      console.error(error);
      alert("Failed to connect to Transition Engine.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

      <ProgressBar step={step} />

      <div className="my-10">

        {step === 1 && (
          <StepOne
            data={{
              occupation: transitionData.occupation,
              monthlyIncome: transitionData.monthlyIncome,
              familyMembers: transitionData.familyMembers,
              educationRequirement:
                transitionData.educationRequirement,
            }}
            updateData={updateData}
          />
        )}

        {step === 2 && (
          <StepTwo
            data={{
              currentCity: transitionData.currentCity,
              destinationCity: transitionData.destinationCity,
              savings: transitionData.savings,
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
            ? "🚀 Launch Transition Engine"
            : "Next →"}
        </button>

      </div>

    </div>
  );
}