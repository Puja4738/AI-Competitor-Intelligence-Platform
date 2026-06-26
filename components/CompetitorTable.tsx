import { Competitor } from "@/types/competitor";

interface Props {
  competitors?: Competitor[];
}

export default function CompetitorTable({
  competitors = [],
}: Props) {

  if (competitors.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Competitor Analysis
        </h2>

        <p className="text-gray-500">
          Run an analysis to view competitors.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">

      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Competitor Analysis
      </h2>

      <table className="w-full border border-gray-300">

        <thead>
          <tr className="bg-gray-200">

            <th className="border p-3">
              Name
            </th>

            <th className="border p-3">
              Pricing
            </th>

            <th className="border p-3">
              Audience
            </th>

            <th className="border p-3">
              Confidence
            </th>

          </tr>
        </thead>

        <tbody>

          {competitors.map((competitor) => (
            <tr
              key={competitor.name}
              className="hover:bg-gray-50"
            >
              <td className="border p-3">
                {competitor.name}
              </td>

              <td className="border p-3">
                {competitor.pricing}
              </td>

              <td className="border p-3">
                {competitor.audience}
              </td>

              <td className="border p-3">
                {competitor.confidence}%
              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}