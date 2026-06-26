interface DashboardProps {
  dashboard?: {
    biggestThreat: string;
    biggestOpportunity: string;
    topLead: string;
    growthPotential: string;
    buildNext: string;
  };
}

export default function FounderDashboard({
  dashboard,
}: DashboardProps) {

  const dashboardData = [
    {
      title: "🚨 Biggest Threat",
      value:
        dashboard?.biggestThreat ||
        "Waiting for Analysis",
    },
    {
      title: "💡 Biggest Opportunity",
      value:
        dashboard?.biggestOpportunity ||
        "Waiting for Analysis",
    },
    {
      title: "🎯 Top Lead",
      value:
        dashboard?.topLead ||
        "Waiting for Analysis",
    },
    {
      title: "📈 Growth Potential",
      value:
        dashboard?.growthPotential ||
        "Waiting for Analysis",
    },
    {
      title: "🛠 Build Next",
      value:
        dashboard?.buildNext ||
        "Waiting for Analysis",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Founder Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {dashboardData.map((item) => (
          <div
            key={item.title}
            className="
              bg-white
              border
              rounded-xl
              shadow-md
              p-6
              hover:shadow-lg
              transition
            "
          >
            <h3 className="font-semibold text-sm mb-2">
              {item.title}
            </h3>

            <p className="text-lg font-bold">
              {item.value}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}