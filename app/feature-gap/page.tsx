"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import FeatureGapChart
from "@/components/FeatureGapChart";

export default function FeatureGapPage() {

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
        Feature Gap Analysis
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">

        <FeatureGapChart
          data={
            analysisData.featureGaps || []
          }
        />

      </div>

      

    </div>
  );
}