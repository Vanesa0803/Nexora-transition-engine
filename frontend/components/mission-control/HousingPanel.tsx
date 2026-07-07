type House = {
  title: string;
  area: string;
  source: string;
  link: string;
  snippet: string;
};

type HousingPanelProps = {
  houses?: House[];
};

export default function HousingPanel({ houses = [] }: HousingPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-bg-white/5 backdrop-blur-xl to-[#0F172A] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            🏠 Housing Intelligence
          </h2>

          <p className="text-zinc-400">
            {houses.length} live listings found
          </p>
        </div>

        <span className="rounded-full bg-green-500/20 px-4 py-2 font-semibold text-green-400">
          LIVE
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        {houses.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-6 text-center text-zinc-400">
            No houses found.
          </div>
        ) : (
          houses.map((house, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/5 bg-[#182233] p-5 transition hover:border-cyan-500 hover:scale-[1.01]"
            >
              <h3 className="text-lg font-bold text-white">
                {house.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {house.snippet}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-cyan-400">
                  {house.source}
                </span>

                <a
                  href={house.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:bg-cyan-400"
                >
                  View →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}