type EducationPanelProps = {
  education?: {
    required?: boolean;
    type?: string;
    recommended?: string[];
    message?: string;
  };
};

export default function EducationPanel({
  education,
}: EducationPanelProps) {

  const schools =
    education?.recommended && education.recommended.length > 0
      ? education.recommended
      : [
          "Delhi Public School",
          "National Public School",
          "Orchids International School",
        ];

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🎓 Education Agent
          </h2>

          <p className="text-zinc-400">
            School & College Recommendations
          </p>
        </div>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400">
          ACTIVE
        </span>

      </div>

      <div className="mt-6">

        <div className="rounded-xl bg-blue-500/10 p-4">
          <p className="text-zinc-400 text-sm">
            Education Required
          </p>

          <h3 className="text-xl font-bold">
            {education?.type ?? "School"}
          </h3>
        </div>

        <div className="mt-5 space-y-4">

          {schools.map((school, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#182233] p-4 hover:bg-[#22324a]"
            >
              🏫 {school}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}