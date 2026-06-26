interface Source {
  name: string;
  url: string;
  type: string;
}

interface Props {
  data?: Source[];
}

export default function SourceReferences({
  data,
}: Props) {

  if (!data?.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-3xl font-bold mb-6">
        Source References
      </h2>

      <div className="space-y-4">

        {data.map(
          (source, index) => (
            <div
              key={index}
              className="
                border
                rounded-lg
                p-4
                flex
                flex-col
                gap-2
              "
            >
              <h3 className="font-semibold">
                {source.name}
              </h3>

              <p className="text-sm text-gray-600">
                {source.type}
              </p>

              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="
                  text-blue-600
                  underline
                "
              >
                {source.url}
              </a>
            </div>
          )
        )}

      </div>
    </div>
  );
}