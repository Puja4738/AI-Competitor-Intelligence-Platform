"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import SourceReferences
from "@/components/SourceReferences";

export default function SourcesPage() {

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
        Source References
      </h1>

      <SourceReferences
        data={
            analysisData.sources || []
        }
     />

    </div>
  );
}