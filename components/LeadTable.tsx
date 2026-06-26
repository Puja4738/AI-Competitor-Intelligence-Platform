interface Lead {
  company: string;
  website: string;
  industry: string;
  employeeSize: string;
  location: string;
  contact: string;
  title: string;
  linkedin: string;
  email: string;
  confidence: number;
}

interface Props {
  leads?: Lead[];
}

export default function LeadTable({
  leads = [],
}: Props) {

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Lead Generation
        </h2>

        <p className="text-gray-500">
          Run an analysis to generate leads.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">

      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Lead Generation
      </h2>

      <table className="min-w-full border border-gray-300">

        <thead>
          <tr className="bg-gray-100">

            <th className="border p-3">
              Company
            </th>

            <th className="border p-3">
              Website
            </th>

            <th className="border p-3">
              Industry
            </th>

            <th className="border p-3">
              Employees
            </th>

            <th className="border p-3">
              Location
            </th>

            <th className="border p-3">
              Contact
            </th>

            <th className="border p-3">
              Title
            </th>

            <th className="border p-3">
              LinkedIn
            </th>

            <th className="border p-3">
              Email
            </th>

            <th className="border p-3">
              Confidence
            </th>

          </tr>
        </thead>

        <tbody>

          {leads.map((lead, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50"
            >

              <td className="border p-3">
                {lead.company}
              </td>

              <td className="border p-3">
                {lead.website}
              </td>

              <td className="border p-3">
                {lead.industry}
              </td>

              <td className="border p-3">
                {lead.employeeSize}
              </td>

              <td className="border p-3">
                {lead.location}
              </td>

              <td className="border p-3">
                {lead.contact}
              </td>

              <td className="border p-3">
                {lead.title}
              </td>

              <td className="border p-3">
                {lead.linkedin}
              </td>

              <td className="border p-3">
                {lead.email}
              </td>

              <td className="border p-3 font-semibold text-green-600">
                {lead.confidence}%
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}