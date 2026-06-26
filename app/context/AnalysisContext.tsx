"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

const AnalysisContext = createContext<any>(null);

export function AnalysisProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [analysisData, setAnalysisData] =
    useState(null);

  return (
    <AnalysisContext.Provider
      value={{
        analysisData,
        setAnalysisData,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  return useContext(AnalysisContext);
}