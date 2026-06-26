interface CompanyRecommendation {
  company: string;
  reason: string;
}

interface DecisionMaker {
  name: string;
  title: string;
  company: string;
  reason: string;
}

interface Props {
  data?: {
    topCompanies: CompanyRecommendation[];
    topDecisionMakers: DecisionMaker[];
  };
}

export default function SalesRecommendations({
  data,
}: Props) {

  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-3xl font-bold mb-8 text-slate-800">
        Sales Recommendations
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Companies */}

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Top Companies To Contact
          </h3>

          <div className="space-y-4">

            {data.topCompanies?.map(
              (company, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4"
                >
                  <h4 className="font-bold">
                    {company.company}
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {company.reason}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

        {/* Decision Makers */}

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Top Decision Makers
          </h3>

          <div className="space-y-4">

            {data.topDecisionMakers?.map(
              (person, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4"
                >
                  <h4 className="font-bold">
                    {person.name}
                  </h4>

                  <p>
                    {person.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {person.company}
                  </p>

                  <p className="mt-2 text-gray-600">
                    {person.reason}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}