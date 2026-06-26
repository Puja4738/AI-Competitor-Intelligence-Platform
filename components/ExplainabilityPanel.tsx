interface ExplainabilityPanelProps {
  data: any;
}

export default function ExplainabilityPanel({
  data,
}: ExplainabilityPanelProps) {
  if (!data) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">

      <h2 className="text-3xl font-bold mb-6">
        Explainability & Transparency
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Confidence Score
          </h3>

          <p className="text-green-600 text-2xl font-bold">
            {data.confidence}%
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Source
          </h3>

          <p>
            {data.source}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Analysis Type
          </h3>

          <p>
            {data.type}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Reasoning
          </h3>

          <p>
            {data.reasoning}
          </p>
        </div>

      </div>

      <div className="mt-6 border rounded-lg p-4 bg-gray-50">

        <h3 className="font-semibold mb-2">
          Why These Results Were Generated
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            Competitors were selected based on
            similarity to the startup idea and
            target market.
          </li>

          <li>
            Features were recommended based on
            observed gaps in competitor offerings.
          </li>

          <li>
            Leads were ranked according to
            relevance, industry alignment, and
            likelihood of conversion.
          </li>

          <li>
            Recommendations were generated using
            market trends, competitor positioning,
            and AI-based analysis.
          </li>

        </ul>

      </div>

    </div>
  );
}