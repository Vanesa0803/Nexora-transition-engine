type GovernmentScheme = {
  name: string;
  description: string;
  eligibility: string;
};

type Props = {
  schemes?: GovernmentScheme[];
};

export default function GovernmentSchemesPanel({
  schemes,
}: Props) {
  if (!schemes || schemes.length === 0) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0F172A] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🏛 Government Support Agent
          </h2>

          <p className="text-zinc-400">
            Schemes you may be eligible for
          </p>
        </div>

        <span className="rounded-full bg-green-500/20 px-4 py-2 font-semibold text-green-400">
          ACTIVE
        </span>

      </div>

      <div className="mt-6 space-y-4">

        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#182233] p-5 border border-white/5"
          >
            <h3 className="text-lg font-semibold text-white">
              {scheme.name}
            </h3>

            <p className="mt-2 text-zinc-400">
              {scheme.description}
            </p>

            <div className="mt-3 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
              {scheme.eligibility}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}