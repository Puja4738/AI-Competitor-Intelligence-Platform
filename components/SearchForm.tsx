"use client";

import { useState } from "react";

interface Props {
  setAnalysisData: (data: any) => void;
}

export default function SearchForm({
  setAnalysisData,
}: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) return;

  const handleAnalyze = async () => {

    if (loading) return;

    if (!input.trim()) {
      alert(
        "Please enter a startup idea, company name, or website URL."
      );
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        "/api/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            idea: input,
          }),
        }
      );

      const result =
        await response.json();

      if (
        result.success &&
        result.analysis
      ) {
        setAnalysisData(
          result.analysis
        );
      } else {
        alert(
          result.message ||
            "Analysis failed. Please try again."
        );
      }

    } catch (error) {

      console.error(error);

      alert(
        "Network error. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="Enter Product Idea, Company Name, or Website URL"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        className="w-full border border-gray-300 rounded-lg p-3"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className={`
          px-6
          py-3
          rounded-lg
          text-white
          font-medium
          transition-all
          duration-200
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}