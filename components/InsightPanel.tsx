interface Metadata {
  confidence: number;
  reasoning: string;
  source: string;
  type: string;
}

interface Props {
  metadata?: Metadata;
}

export default function InsightPanel({
  metadata,
}: Props) {
  if (!metadata) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-10">
      <h2 className="text-2xl font-bold mb-4">
        Insight Validation
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Confidence Score
          </h3>

          <p className="text-xl font-bold text-green-600">
            {metadata.confidence}%
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Source
          </h3>

          <p>{metadata.source}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Analysis Type
          </h3>

          <p>{metadata.type}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">
            Supporting Evidence
          </h3>

          <p>{metadata.reasoning}</p>
        </div>

      </div>
    </div>
  );
}