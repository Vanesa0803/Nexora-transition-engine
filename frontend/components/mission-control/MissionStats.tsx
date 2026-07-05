type MissionStatsProps = {
  jobs: number;
  housing: number;
  hospitals: number;
  schools: number;
  schemes: number;
};

export default function MissionStats({
  jobs,
  housing,
  hospitals,
  schools,
  schemes,
}: MissionStatsProps) {
  const stats = [
    {
      icon: "💼",
      title: "Jobs Found",
      value: jobs,
      color: "text-cyan-400",
    },
    {
      icon: "🏠",
      title: "Housing",
      value: housing,
      color: "text-green-400",
    },
    {
      icon: "🏥",
      title: "Hospitals",
      value: hospitals,
      color: "text-red-400",
    },
    {
      icon: "🎓",
      title: "Schools",
      value: schools,
      color: "text-yellow-400",
    },
    {
      icon: "🏛️",
      title: "Gov Schemes",
      value: schemes,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-5">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg hover:border-cyan-500 transition"
        >

          <div className="text-3xl">
            {item.icon}
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            {item.title}
          </p>

          <h2 className={`mt-2 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}