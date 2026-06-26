interface Props {
  recommendations?: string[];
}

export default function RecommendationPanel({
  recommendations = [],
}: Props) {

  if (recommendations.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Recommendation Engine
        </h2>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">
            Run an analysis to view recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Recommendation Engine
      </h2>

      <div className="bg-white border rounded-xl shadow-md p-6">

        <ul className="space-y-4">

          {recommendations.map(
            (recommendation, index) => (
              <li
                key={index}
                className="
                  border-b
                  pb-3
                  last:border-b-0
                "
              >
                <div className="font-medium">
                  {recommendation}
                </div>
              </li>
            )
          )}

        </ul>

      </div>

    </div>
  );
}