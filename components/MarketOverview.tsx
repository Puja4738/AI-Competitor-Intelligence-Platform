interface MarketOverviewData {
  marketSize: string;
  growthRate: string;
  competitionLevel: string;
  opportunity: string;
}

interface Props {
  data?: MarketOverviewData;
}

export default function MarketOverview({
  data,
}: Props) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Market Landscape Overview
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Market Size
          </h3>
          <p>{data.marketSize}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Growth Rate
          </h3>
          <p>{data.growthRate}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Competition Level
          </h3>
          <p>{data.competitionLevel}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Opportunity
          </h3>
          <p>{data.opportunity}</p>
        </div>

      </div>
    </div>
  );
}