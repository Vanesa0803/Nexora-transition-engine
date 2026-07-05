type House = {
  area: string;
  rent: string;
  rating: string;
};

type HousingSectionProps = {
  housing: House[];
};

export default function HousingSection({
  housing,
}: HousingSectionProps) {
  return (
    <section className="space-y-5">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          🏠 Housing Options
        </h2>

        <p className="text-zinc-400">
          {housing.length} homes available
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {housing.map((home, index) => (

          <div
            key={index}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {home.area}
                </h3>

                <p className="mt-2 text-yellow-400">
                  ⭐ {home.rating}
                </p>

              </div>

              <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                VERIFIED
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <p className="text-2xl font-bold text-cyan-400">
                {home.rent}
              </p>

              <button className="rounded-xl bg-cyan-500 px-4 py-2 text-black font-semibold transition hover:scale-105">
                View →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}