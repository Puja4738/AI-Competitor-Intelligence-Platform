"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import FounderDashboard
from "@/components/FounderDashboard";

import InsightPanel
from "@/components/InsightPanel";

import ExplainabilityPanel
from "@/components/ExplainabilityPanel";

import SourceReferences
from "@/components/SourceReferences";

import MarketOverview
from "@/components/MarketOverview";

export default function DashboardPage() {

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
        Founder Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">

        <FounderDashboard
          dashboard={analysisData.dashboard}
        />

        <InsightPanel
          metadata={analysisData.metadata}
        />

        <MarketOverview
          data={analysisData.marketOverview}
        />

      </div>

    </div>
  );
}