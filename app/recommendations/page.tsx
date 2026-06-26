"use client";

import { useAnalysis }
from "../context/AnalysisContext";

import RecommendationPanel
from "@/components/RecommendationPanel";

import SalesRecommendations
from "@/components/SalesRecommendations";

import AdvancedRecommendations
from "@/components/AdvancedRecommendations";

export default function RecommendationsPage() {

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

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        Recommendations
      </h1>

      {/* Recommendation Engine */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">

        <RecommendationPanel
          recommendations={
            analysisData.recommendations || []
          }
        />

      </div>

      {/* Sales Recommendations */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">

        <SalesRecommendations
          data={
            analysisData.salesRecommendations
          }
        />

      </div>

      {/* Product + Market Recommendations */}
      <div className="bg-white p-6 rounded-xl shadow-md">

        <AdvancedRecommendations
          productRecommendations={
            analysisData.productRecommendations
          }
          marketRecommendations={
            analysisData.marketRecommendations
          }
        />

      </div>

    </div>
  );
}