"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-10 py-4">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/competitors">
          Competitors
        </Link>

        <Link href="/leads">
          Leads
        </Link>

        <Link href="/feature-gap">
          Feature Gap
        </Link>

        <Link href="/recommendations">
          Recommendations
        </Link>

        <Link href="/explainability">
          Explainability
        </Link>

        <Link href="/sources">
          Sources
        </Link>
      </div>
    </nav>
  );
}