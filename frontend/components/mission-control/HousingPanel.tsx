const homes = [
  {
    area: "Koramangala",
    rent: "₹18,000/mo",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    area: "Indiranagar",
    rent: "₹22,000/mo",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  },
];

export default function HousingPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            🏠 Housing Intelligence
          </h2>

          <p className="text-zinc-400">
            Best AI recommended properties
          </p>

        </div>

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400 font-semibold">
          12 Matches
        </span>

      </div>

      <div className="mt-6 space-y-5">

        {homes.map((home) => (

          <div
            key={home.area}
            className="overflow-hidden rounded-2xl border border-white/5 bg-[#182233] hover:border-cyan-500 transition"
          >

            <img
              src={home.image}
              className="h-44 w-full object-cover"
            />

            <div className="p-5">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {home.area}
                  </h3>

                  <p className="text-zinc-400">
                    Bangalore
                  </p>

                </div>

                <div className="text-right">

                  <h2 className="font-bold text-green-400">
                    {home.rent}
                  </h2>

                  <p className="text-yellow-400">
                    ⭐ {home.rating}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}