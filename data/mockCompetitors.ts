import { Competitor } from "@/types/competitor";

export const mockCompetitors: Competitor[] = [
  {
    name: "Resume.io",
    website: "https://resume.io",
    pricing: "$25/month",
    audience: "Job Seekers",
    features: [
      "Resume Builder",
      "Templates",
      "Cover Letters"
    ],
    strengths: [
      "Easy to use",
      "Large template library"
    ],
    weaknesses: [
      "Limited AI features"
    ],
    confidence: 95
  },

  {
    name: "Zety",
    website: "https://zety.com",
    pricing: "$23/month",
    audience: "Students & Professionals",
    features: [
      "Resume Builder",
      "ATS Optimization",
      "Templates"
    ],
    strengths: [
      "ATS Friendly",
      "Strong Branding"
    ],
    weaknesses: [
      "Expensive"
    ],
    confidence: 92
  },

  {
    name: "Kickresume",
    website: "https://kickresume.com",
    pricing: "$19/month",
    audience: "Job Seekers",
    features: [
      "AI Resume",
      "Cover Letter Generator"
    ],
    strengths: [
      "AI Assistance"
    ],
    weaknesses: [
      "Smaller template collection"
    ],
    confidence: 90
  }
];