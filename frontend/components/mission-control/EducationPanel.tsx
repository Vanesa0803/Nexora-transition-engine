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
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-bg-white/5 backdrop-blur-xl to-[#0F172A] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🎓 Education Agent
          </h2>

          <p className="text-zinc-400">
            School & College Recommendations
          </p>
        </div>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 font-semibold text-blue-400">
          ACTIVE
        </span>

      </div>

      <div className="mt-6">

        {!education?.required ? (

          <div className="rounded-2xl border border-white/10 p-5 text-zinc-400">
            {education?.message || "No education planning required."}
          </div>

        ) : (

          <>
            <div className="mb-5 rounded-2xl bg-blue-500/10 p-4">
              <p className="text-sm text-zinc-400">
                Education Required
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {education.type}
              </h3>
            </div>

            <div className="grid gap-4">

              {education.recommended?.map((school, index) => (

                <div
                  key={index}
                  className="rounded-2xl bg-[#182233] p-5 transition hover:bg-[#22324a]"
                >
                  <h3 className="font-semibold text-white">
                    🏫 {school}
                  </h3>
                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </div>
  );
}