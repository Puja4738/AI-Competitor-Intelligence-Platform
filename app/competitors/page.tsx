"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import CompetitorTable
from "@/components/CompetitorTable";

import FeatureMatrix
from "@/components/FeatureMatrix";

import PricingChart
from "@/components/PricingChart";

import PositioningChart
from "@/components/PositioningChart";

export default function CompetitorsPage() {

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
        Competitor Analysis
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <CompetitorTable
          competitors={
            analysisData.competitors || []
          }
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <FeatureMatrix
          data={
            analysisData.featureMatrix || []
          }
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <PricingChart
          data={
            analysisData.pricing || []
          }
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <PositioningChart
          data={
            analysisData.positioning || []
          }
        />
      </div>

    </div>
  );
}