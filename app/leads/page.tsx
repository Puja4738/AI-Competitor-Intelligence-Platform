"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import LeadTable
from "@/components/LeadTable";

export default function LeadsPage() {

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
        Lead Generation
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">

        <LeadTable
          leads={
            analysisData.leads || []
          }
        />

      </div>

    </div>
  );
}