export interface AnalysisData {
  competitors: {
    name: string;
    pricing: string;
    audience: string;
    confidence: number;
  }[];

  pricing: {
    name: string;
    price: number;
  }[];

  dashboard: {
    biggestThreat: string;
    biggestOpportunity: string;
    topLead: string;
    growthPotential: string;
    buildNext: string;
  };

  recommendations: string[];
}