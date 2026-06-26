"use client";

import Link from "next/link";

export default function Sidebar() {

const sections = [
{
href: "/dashboard",
label: "Dashboard",
},
{
href: "/competitors",
label: "Competitors",
},
{
href: "/leads",
label: "Leads",
},
{
href: "/feature-gap",
label: "Feature Gap",
},
{
href: "/recommendations",
label: "Recommendations",
},
{
href: "/explainability",
label: "Explainability",
},
{
href: "/sources",
label: "Sources",
},
];

return ( <aside
   className="
     fixed
     top-14
     left-0
     w-64
     h-[calc(100vh-64px)]
     bg-white
     border-r
     shadow-md
     z-40
     overflow-y-auto
   "
 > <div className="p-6">
    <h2 className="text-2xl font-bold mb-8">
      Sections
    </h2>

    <nav className="flex flex-col space-y-3">

      {sections.map((section) => (

        <Link
          key={section.href}
          href={section.href}
          className="
            w-full
            text-left
            px-5
            py-3
            rounded-lg
            font-medium
            text-gray-700
            hover:bg-blue-50
            hover:text-blue-600
            transition-all
            duration-200
            block
          "
        >
          {section.label}
        </Link>

      ))}

    </nav>

  </div>
</aside>

);
}
