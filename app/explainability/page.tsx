"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import InsightPanel
from "@/components/InsightPanel";

import ExplainabilityPanel
from "@/components/ExplainabilityPanel";


export default function ExplainabilityPage() {

  const { analysisData } =
    useAnalysis();

  if (!analysisData) {
    return (
      <div className="p-10">
        No analysis available.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Explainability & Transparency
      </h1>

    

      {/* Explainability */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">

        <ExplainabilityPanel
          data={analysisData.metadata}
        />

      </div>

      {/* Why Generated */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Why These Results Were Generated
        </h2>

        <ul className="list-disc ml-6 space-y-3">

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
            relevance, industry alignment,
            and likelihood of conversion.
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