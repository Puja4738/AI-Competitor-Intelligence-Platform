interface FeatureItem {
  feature: string;
  ours: boolean;
  competitorA: boolean;
  competitorB: boolean;
  competitorC: boolean;
}

interface Props {
  data?: FeatureItem[];
}

export default function FeatureMatrix({
  data = [],
}: Props) {

  if (data.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Feature Comparison Matrix
        </h2>

        <p className="text-gray-500">
          Run an analysis to compare features.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Feature Comparison Matrix
      </h2>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">
              Feature
            </th>

            <th className="border p-2">
              Our Product
            </th>

            <th className="border p-2">
              Competitor A
            </th>

            <th className="border p-2">
              Competitor B
            </th>

            <th className="border p-2">
              Competitor C
            </th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item.feature}>

              <td className="border p-2">
                {item.feature}
              </td>

              <td className="border p-2 text-center">
                {item.ours ? "✅" : "❌"}
              </td>

              <td className="border p-2 text-center">
                {item.competitorA ? "✅" : "❌"}
              </td>

              <td className="border p-2 text-center">
                {item.competitorB ? "✅" : "❌"}
              </td>

              <td className="border p-2 text-center">
                {item.competitorC ? "✅" : "❌"}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}