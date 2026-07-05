type ProgressBarProps = {
  step: number;
};

const steps = [
  "Personal",
  "Relocation",
  "Review",
];

export default function ProgressBar({
  step,
}: ProgressBarProps) {
  const percentage = (step / 3) * 100;

  return (
    <div className="mb-10">

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Mission Brief
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          Prepare Your Transition
        </h1>

        <p className="mt-3 max-w-xl text-zinc-400">
          Tell NEXORA about your relocation. Our AI agents
          will collaborate to create one personalized
          transition strategy.
        </p>

      </div>

      <div className="flex items-center justify-between text-sm">

        {steps.map((label, index) => (
          <div
            key={label}
            className="flex flex-col items-center flex-1"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all

              ${
                step > index
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-zinc-700 text-zinc-500"
              }`}
            >
              {index + 1}
            </div>

            <span
              className={`mt-3 ${
                step > index
                  ? "text-white"
                  : "text-zinc-500"
              }`}
            >
              {label}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}