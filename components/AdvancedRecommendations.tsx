interface Props {
  productRecommendations?: {
    topFeaturesToBuild: {
      feature: string;
      reason: string;
    }[];

    topCompetitiveAdvantages: {
      advantage: string;
      reason: string;
    }[];
  };

  marketRecommendations?: {
    topOpportunities: {
      opportunity: string;
      reason: string;
    }[];

    topRisks: {
      risk: string;
      reason: string;
    }[];
  };
}

export default function AdvancedRecommendations({
  productRecommendations,
  marketRecommendations,
}: Props) {

  if (
    !productRecommendations &&
    !marketRecommendations
  ) {
    return null;
  }

  return (
    <div className="space-y-8">

      {/* Product Recommendations */}

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-3xl font-bold mb-6">
          Product Recommendations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Features To Build Next
            </h3>

            <div className="space-y-3">

              {productRecommendations?.topFeaturesToBuild?.map(
                (item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <p className="font-semibold">
                      {item.feature}
                    </p>

                    <p className="text-gray-600">
                      {item.reason}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Competitive Advantages
            </h3>

            <div className="space-y-3">

              {productRecommendations?.topCompetitiveAdvantages?.map(
                (item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <p className="font-semibold">
                      {item.advantage}
                    </p>

                    <p className="text-gray-600">
                      {item.reason}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Market Recommendations */}

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-3xl font-bold mb-6">
          Market Recommendations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Opportunities
            </h3>

            <div className="space-y-3">

              {marketRecommendations?.topOpportunities?.map(
                (item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <p className="font-semibold">
                      {item.opportunity}
                    </p>

                    <p className="text-gray-600">
                      {item.reason}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Market Risks
            </h3>

            <div className="space-y-3">

              {marketRecommendations?.topRisks?.map(
                (item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <p className="font-semibold">
                      {item.risk}
                    </p>

                    <p className="text-gray-600">
                      {item.reason}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}