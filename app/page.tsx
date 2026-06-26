"use client";

import jsPDF from "jspdf";
import { useRef } from "react";

import { useState } from "react";

import SearchForm from "@/components/SearchForm";
import CompetitorTable from "@/components/CompetitorTable";
import FeatureMatrix from "@/components/FeatureMatrix";
import PricingChart from "@/components/PricingChart";
import PositioningChart from "@/components/PositioningChart";
import FounderDashboard from "@/components/FounderDashboard";
import LeadTable from "@/components/LeadTable";
import FeatureGapChart from "@/components/FeatureGapChart";
import RecommendationPanel from "@/components/RecommendationPanel";

import InsightPanel from "@/components/InsightPanel";
import MarketOverview from "@/components/MarketOverview";
import SalesRecommendations from "@/components/SalesRecommendations";
import AdvancedRecommendations from "@/components/AdvancedRecommendations";
import ExplainabilityPanel
from "@/components/ExplainabilityPanel";
import SourceReferences
from "@/components/SourceReferences";
import {
  useAnalysis,
} from "./context/AnalysisContext";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  const {
    analysisData,
    setAnalysisData,
  } = useAnalysis();

  const [loading, setLoading] =
    useState(false);

    const dashboardRef =
    useRef<HTMLDivElement>(null);

   const exportPDF = () => {
    if (!analysisData) {

      alert(
        "Please generate analysis first."
      );

      return;
    }

    const pdf = new jsPDF();

    let y = 15;

    const addTitle = (title: string) => {
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text(title, 10, y);
      y += 10;
    };

    const addLine = (text: string) => {
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");

      const lines = pdf.splitTextToSize(text, 180);

      pdf.text(lines, 10, y);

      y += lines.length * 6;

      if (y > 270) {
        pdf.addPage();
        y = 15;
      }
    };

    // =====================================================
    // REPORT TITLE
    // =====================================================

    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");

    pdf.text(
      "Nexus Competitor Intelligence Report",
      10,
      y
    );

    y += 15;

    // =====================================================
    // DASHBOARD
    // =====================================================

    addTitle("Founder Dashboard");

    addLine(
      `Biggest Threat: ${
        analysisData.dashboard?.biggestThreat || ""
      }`
    );

    addLine(
      `Biggest Opportunity: ${
        analysisData.dashboard?.biggestOpportunity || ""
      }`
    );

    addLine(
      `Top Lead: ${
        analysisData.dashboard?.topLead || "No Lead Found"
      }`
    );

    addLine(
      `Growth Potential: ${
        analysisData.dashboard?.growthPotential || ""
      }`
    );

    addLine(
      `Build Next: ${
        analysisData.dashboard?.buildNext || ""
      }`
    );

    y += 5;

    // =====================================================
    // INSIGHT VALIDATION
    // =====================================================

    addTitle("Insight Validation");

    addLine(
      `Confidence Score: ${
        analysisData.metadata?.confidence || ""
      }%`
    );

    addLine(
      `Source: ${
        analysisData.metadata?.source || ""
      }`
    );

    addLine(
      `Analysis Type: ${
        analysisData.metadata?.type || ""
      }`
    );

    addLine(
      `Reasoning: ${
        analysisData.metadata?.reasoning || ""
      }`
    );

    y += 5;

    // =====================================================
    // MARKET OVERVIEW
    // =====================================================

    addTitle("Market Overview");

    addLine(
      `Market Size: ${
        analysisData.marketOverview?.marketSize || ""
      }`
    );

    addLine(
      `Growth Rate: ${
        analysisData.marketOverview?.growthRate || ""
      }`
    );

    addLine(
      `Competition Level: ${
        analysisData.marketOverview
          ?.competitionLevel || ""
      }`
    );

    addLine(
      `Opportunity: ${
        analysisData.marketOverview
          ?.opportunity || ""
      }`
    );

    y += 5;

    // =====================================================
    // COMPETITORS
    // =====================================================

    addTitle("Competitors");

    analysisData.competitors?.forEach(
      (competitor: any, index: number) => {
        addLine(
          `${index + 1}. ${competitor.name}`
        );

        addLine(
          `Pricing: ${competitor.pricing}`
        );

        addLine(
          `Audience: ${competitor.audience}`
        );

        addLine(
          `Confidence: ${competitor.confidence}%`
        );

        y += 2;
      }
    );

    // =====================================================
    // LEADS
    // =====================================================

    addTitle("Lead Generation");

    analysisData.leads?.forEach(
      (lead: any, index: number) => {
        addLine(
          `${index + 1}. ${lead.company}`
        );

        addLine(
          `Contact: ${lead.contact}`
        );

        addLine(
          `Title: ${lead.title}`
        );

        addLine(
          `Email: ${lead.email}`
        );

        addLine(
          `Location: ${lead.location}`
        );

        addLine(
          `Confidence: ${lead.confidence}%`
        );

        y += 2;
      }
    );

    // =====================================================
    // FEATURE GAPS
    // =====================================================

    addTitle("Feature Gaps");

    analysisData.featureGaps?.forEach(
      (gap: any) => {
        addLine(
          `${gap.feature} (Gap Score: ${gap.gap})`
        );
      }
    );

    // =====================================================
    // RECOMMENDATIONS
    // =====================================================

    addTitle("Recommendations");

    analysisData.recommendations?.forEach(
      (recommendation: string) => {
        addLine(`• ${recommendation}`);
      }
    );

    // =====================================================
    // PRODUCT RECOMMENDATIONS
    // =====================================================

    if (
      analysisData.productRecommendations
    ) {
      addTitle("Product Recommendations");

      analysisData.productRecommendations.topFeaturesToBuild?.forEach(
        (item: any) => {
          addLine(
            `Feature: ${item.feature}`
          );

          addLine(
            `Reason: ${item.reason}`
          );
        }
      );

      analysisData.productRecommendations.topFeatureGaps?.forEach(
        (item: any) => {
          addLine(
            `Gap: ${item.feature}`
          );

          addLine(
            `Reason: ${item.reason}`
          );
        }
      );
    }

   // =====================================================
  // MARKET RECOMMENDATIONS
  // =====================================================

  if (analysisData.marketRecommendations) {

    addTitle("Market Recommendations");

    addLine("");
    addLine("TOP OPPORTUNITIES");
    addLine("");

    analysisData.marketRecommendations.topOpportunities?.forEach(
      (item: any, index: number) => {

        addLine(
          `${index + 1}. ${item.opportunity}`
        );

        addLine(
          `Reason: ${item.reason}`
        );

        addLine("");
      }
    );

    addLine("");
    addLine("TOP RISKS");
    addLine("");

    analysisData.marketRecommendations.topRisks?.forEach(
      (item: any, index: number) => {

        addLine(
          `${index + 1}. ${item.risk}`
        );

        addLine(
          `Reason: ${item.reason}`
        );

        addLine("");
      }
    );
  }
    // =====================================================
    // SALES RECOMMENDATIONS
    // =====================================================

    if (
      analysisData.salesRecommendations
    ) {
      addTitle("Sales Recommendations");

      analysisData.salesRecommendations.topCompanies?.forEach(
        (company: any) => {
          addLine(
            `Company: ${company.company}`
          );

          addLine(
            `Reason: ${company.reason}`
          );
        }
      );

      analysisData.salesRecommendations.topDecisionMakers?.forEach(
        (person: any) => {
          addLine(
            `${person.name} - ${person.title}`
          );

          addLine(
            `Company: ${person.company}`
          );

          addLine(
            `Reason: ${person.reason}`
          );
        }
      );
    }

    pdf.save(
      "nexus-competitor-analysis.pdf"
    );
  };

  const exportCSV = () => {
    if (!analysisData) return;

    const rows = [];

    rows.push([
      "SECTION",
      "NAME",
      "DETAILS",
    ]);

    // Competitors
    analysisData.competitors?.forEach(
      (c: any) => {
        rows.push([
          "Competitor",
          c.name,
          `Pricing: ${c.pricing} | Audience: ${c.audience}`,
        ]);
      }
    );

    // Leads
    analysisData.leads?.forEach(
      (lead: any) => {
        rows.push([
          "Lead",
          lead.company,
          `${lead.contact} | ${lead.title} | ${lead.email}`,
        ]);
      }
    );

    // Recommendations
    analysisData.recommendations?.forEach(
      (rec: string) => {
        rows.push([
          "Recommendation",
          rec,
          "",
        ]);
      }
    );

    // Product Recommendations
    analysisData.productRecommendations?.topFeaturesToBuild?.forEach(
      (item: any) => {
        rows.push([
          "Feature To Build",
          item.feature,
          item.reason,
        ]);
      }
    );

    // Market Opportunities
    analysisData.marketRecommendations?.opportunities?.forEach(
      (item: any) => {
        rows.push([
          "Opportunity",
          item.title,
          item.reason,
        ]);
      }
    );

    // Sales Companies
    analysisData.salesRecommendations?.topCompanies?.forEach(
      (item: any) => {
        rows.push([
          "Target Company",
          item.company,
          item.reason,
        ]);
      }
    );

    const csvContent = rows
      .map((row) =>
        row
          .map((value) => `"${value}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "nexus-analysis-report.csv";

    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    
     <>

    <main>

      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Nexus Competitor Intelligence Platform
        </h1>

        <p className="text-lg text-gray-600">
          Discover competitors, identify feature gaps,
          generate leads, and uncover growth opportunities.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4 flex-wrap">
        <SearchForm
          setAnalysisData={setAnalysisData}
        />

        {!analysisData && (

        <div className="bg-white p-8 rounded-lg shadow">

          <h2 className="text-xl font-bold">
            Ready for Analysis
          </h2>

          <p className="text-gray-600 mt-2">
            Enter a startup idea, company name,
            or website URL to generate
            competitor insights.
          </p>

        </div>

        )}

        {analysisData && (
          <div className="flex gap-4 flex-wrap">

            <button
              onClick={exportPDF}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Export PDF
            </button>

            <button
              onClick={exportCSV}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
            >
              Export CSV
            </button>

          </div>
        )}
      </div>

      {analysisData && (
        <div ref={dashboardRef}>
          <div className="my-12" />

          {/* Founder Dashboard */}
          <section
            id="dashboard"
            className="bg-white p-6 rounded-xl shadow-md mb-12"
          >
            <FounderDashboard
              dashboard={analysisData.dashboard}
            />

            <InsightPanel
              metadata={analysisData.metadata}
            />

            <ExplainabilityPanel
              data={analysisData.metadata}
            />

            <SourceReferences
              data={analysisData.sources}
            />

            <MarketOverview
              data={analysisData.marketOverview}
            />
          </section>

          {/* Competitor Analysis */}
          <section id="competitors" className="mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Competitor Analysis
            </h2>

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
                  analysisData?.featureMatrix || []
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
          </section>

          {/* Lead Generation */}
          <section id="leads" className="mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Lead Generation
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <LeadTable
                leads={
                  analysisData.leads || []
                }
              />
            </div>
          </section>

          {/* Feature Gap Analysis */}
          <section id="feature-gap" className="mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Feature Gap Analysis
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <FeatureGapChart
                data={
                  analysisData.featureGaps || []
                }
              />
            </div>
          </section>

          {/* Recommendations */}
          <section id="recommendations" className="mt-16 mb-20">
            <h2 className="text-3xl font-bold mb-6">
              Recommendations
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <RecommendationPanel
                recommendations={
                  analysisData.recommendations || []
                }
              />
              <SalesRecommendations
                data={analysisData.salesRecommendations}
              />

              <AdvancedRecommendations
                productRecommendations={
                  analysisData.productRecommendations
                }
                marketRecommendations={
                  analysisData.marketRecommendations
                }
              />
            </div>
          </section>

          {/* Explainability */}
          <section
            id="explainability"
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Explainability
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <ExplainabilityPanel
                data={analysisData.metadata}
              />
            </div>
          </section>

          {/* Sources */}
          <section
            id="sources"
            className="mt-16 mb-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Source References
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <SourceReferences
                data={analysisData.sources}
              />
            </div>
          </section>


        </div>
      )}
    </main>
    </>
  );
}