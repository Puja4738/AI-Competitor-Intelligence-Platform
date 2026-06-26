# 🚀 Nexus Competitor Intelligence Platform

> **AI-Powered Startup Competitor Analysis & Market Intelligence Platform**

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Groq](https://img.shields.io/badge/Groq-AI-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)

# 📖 Overview

The **Nexus Competitor Intelligence Platform** is an AI-powered web application designed to help founders, entrepreneurs, startups, and product managers quickly analyze a startup idea and gain comprehensive competitive intelligence.

Instead of spending hours manually researching competitors, market trends, feature gaps, customer pain points, and potential leads, users simply enter a startup idea or company name. The platform leverages **Groq's Llama 3.3-70B model** to generate structured business intelligence in seconds.

The application automatically analyzes:

* Existing competitors
* Competitive positioning
* Feature gaps
* Sales opportunities
* Product recommendations
* Market recommendations
* Customer acquisition opportunities
* Explainability of AI-generated insights
* Source references
* Market landscape

All results are displayed through a modern dashboard with multiple dedicated pages and can be exported as **PDF** or **CSV** reports.

# 🎯 Problem Statement

Startup founders often struggle with:

* Identifying direct competitors
* Understanding market positioning
* Finding missing features
* Discovering customer pain points
* Building sales strategies
* Finding target companies
* Identifying decision makers
* Generating actionable recommendations

Traditional competitor research requires visiting numerous websites such as:

* Crunchbase
* G2
* LinkedIn
* SimilarWeb
* Gartner

This process is slow, repetitive, and difficult to summarize into meaningful business insights.

The Nexus Competitor Intelligence Platform automates this entire workflow using AI.

# 💡 Solution

The application provides an end-to-end AI-powered competitor intelligence workflow.

Users simply enter:

* Startup Idea
* Company Name
* Website URL

The application sends the request to the backend API, which communicates with the Groq AI model. The model analyzes the input and returns structured JSON data that powers every section of the application.

The user receives:

* Founder Dashboard
* Competitor Analysis
* Lead Generation
* Feature Gap Analysis
* AI Recommendations
* Sales Recommendations
* Product Recommendations
* Market Recommendations
* Explainability Report
* Source References
* Market Overview

# ✨ Key Features

## 📊 Founder Dashboard

Provides a high-level overview including:

* Biggest Threat
* Biggest Opportunity
* Top Lead
* Growth Potential
* Build Next Recommendation

## 🏢 Competitor Analysis

Displays:

* Competitor Name
* Website
* Category
* Strengths
* Weaknesses
* Pricing
* Positioning

Helping founders understand the competitive landscape.

## 🎯 Lead Generation

Generates potential business leads with:

* Company Name
* Industry
* Contact Priority
* Opportunity Score
* Decision Makers

## 📈 Feature Gap Analysis

Identifies opportunities where competitors are lacking.

Examples include:

* AI Resume Builder
* Mobile Optimization
* Personalized Recommendations
* Analytics Dashboard
* Integration Support

This helps founders prioritize future product development.

## 💼 Recommendation Engine

AI generates strategic business recommendations including:

* Product Improvements
* User Experience Enhancements
* Growth Opportunities
* Marketing Suggestions
* Platform Expansion

## 🤝 Sales Recommendations

Generates valuable sales intelligence including:

### Top Companies to Contact

* Microsoft
* Google
* Amazon
* IBM
* Meta

### Decision Makers

* CEO
* CTO
* Product Managers
* HR Directors
* Engineering Heads

This helps startups prioritize outreach.

## 📦 Product Recommendations

AI recommends:

* New Features
* Competitive Advantages
* Product Enhancements
* Customer Experience Improvements
* Platform Integrations

## 🌍 Market Recommendations

Generates:

* Market Opportunities
* Industry Trends
* Expansion Ideas
* Growth Areas
* Market Risks

Helping businesses make strategic decisions.

## 🔍 Explainability

Every AI-generated insight includes:

* Confidence Score
* Analysis Type
* Source
* Supporting Evidence
* Reasoning
* Why Results Were Generated

This improves trust and transparency.

## 📚 Source References

Displays trusted industry sources used during AI reasoning.

Examples include:

* LinkedIn
* Crunchbase
* Gartner
* SimilarWeb
* G2

## 📈 Market Landscape Overview

Provides:

* Market Size
* Growth Rate
* Competition Level
* Market Opportunity

Giving founders a quick snapshot of the industry.

## 📄 Export Features

Users can export complete analysis as:

* PDF Report
* CSV Report

making it easy to share results with stakeholders.

# 🖥️ Technology Stack

## Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS
* Context API

## Backend

* Next.js API Routes
* Groq AI API
* 
## AI Model

* Llama 3.3 70B Versatile

## State Management

* React Context API

## Styling

* Tailwind CSS

## Export Libraries

* html2canvas
* jsPDF

## Development Tools

* VS Code
* npm
* Git
* GitHub

# 📂 Project Structure

nexus-ai-assignment
│
├── app
│   ├── api
│   │   └── analyze
│   │       └── route.ts
│   │
│   ├── competitors
│   ├── dashboard
│   ├── explainability
│   ├── feature-gap
│   ├── leads
│   ├── recommendations
│   ├── sources
│   ├── context
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── SearchForm.tsx
│   ├── FounderDashboard.tsx
│   ├── CompetitorTable.tsx
│   ├── LeadTable.tsx
│   ├── FeatureGapChart.tsx
│   ├── RecommendationPanel.tsx
│   ├── SalesRecommendations.tsx
│   ├── AdvancedRecommendations.tsx
│   ├── ExplainabilityPanel.tsx
│   ├── SourceReferences.tsx
│   ├── MarketOverview.tsx
│   └── Navbar.tsx
│
├── services
├── utils
├── lib
├── public
├── types
├── .env.local
├── package.json
└── README.md

# 🏗️ System Architecture

The Nexus Competitor Intelligence Platform follows a modern client-server architecture using **Next.js App Router**, **React Context API**, and **Groq AI** for intelligent competitor analysis.

                           User
                             │
                             ▼
                   Search Startup Idea
                             │
                             ▼
                    SearchForm Component
                             │
                             ▼
                   POST /api/analyze
                             │
                             ▼
                  Next.js API Route
                             │
                             ▼
                  Groq Llama 3.3 70B
                             │
                             ▼
                  Structured JSON Response
                             │
                             ▼
                AnalysisContext Provider
                             │
       ┌─────────────┬──────────────┬──────────────┐
       ▼             ▼              ▼
 Founder Dashboard Competitors   Leads
       ▼             ▼              ▼
 Feature Gap   Recommendations  Explainability
                             ▼
                      Source References
                             ▼
                     Export PDF / CSV

# 🧩 Frontend Architecture

The frontend is built using reusable React components and follows a modular architecture.

layout.tsx
│
├── Navbar
├── Sidebar
└── Page Content
      │
      ▼
page.tsx
│
├── SearchForm
├── FounderDashboard
├── CompetitorTable
├── LeadTable
├── FeatureGapChart
├── RecommendationPanel
├── SalesRecommendations
├── ExplainabilityPanel
├── SourceReferences
└── MarketOverview

Each component is responsible for rendering one specific section of the application while sharing data through the React Context API.


# 🤖 AI Analysis Workflow

The application uses Groq's **Llama 3.3 70B Versatile** model to generate structured competitor intelligence.

## Workflow

1. User enters a startup idea or company name.
2. SearchForm sends the request to the backend.
3. API Route builds a structured prompt.
4. Prompt is sent to Groq AI.
5. Groq generates structured JSON.
6. JSON is stored in Analysis Context.
7. All components automatically re-render with new data.

User Input
     │
     ▼
SearchForm
     │
     ▼
fetch("/api/analyze")
     │
     ▼
API Route
     │
     ▼
Groq AI
     │
     ▼
Structured JSON
     │
     ▼
Context API
     │
     ▼
Dashboard Components

# 🔄 Application Workflow

User
 │
 ▼
Enter Startup Idea
 │
 ▼
Click Analyze
 │
 ▼
Loading State
 │
 ▼
Backend API
 │
 ▼
Groq AI
 │
 ▼
Structured JSON
 │
 ▼
Analysis Context
 │
 ├── Dashboard
 ├── Competitors
 ├── Leads
 ├── Feature Gap
 ├── Recommendations
 ├── Explainability
 ├── Sources
 └── Market Overview
 │
 ▼
Export PDF / CSV

# 🧠 React Context API

Instead of passing data through multiple levels of components, the application uses **React Context API** for global state management.

### Responsibilities

* Stores AI-generated analysis
* Makes data available across all pages
* Eliminates prop drilling
* Automatically updates UI after analysis

AnalysisContext

↓

analysisData

↓

setAnalysisData()

↓

All Components


# 📡 API Documentation

## Endpoint

http
POST /api/analyze

### Request

{
  "idea": "AI Resume Builder"
}

### Response

{
  "dashboard": {},
  "competitors": [],
  "leads": [],
  "featureGap": {},
  "recommendations": {},
  "salesRecommendations": {},
  "productRecommendations": {},
  "marketRecommendations": {},
  "explainability": {},
  "sources": [],
  "marketOverview": {}
}

# 📂 Data Flow

SearchForm
      │
      ▼
API Route
      │
      ▼
Groq AI
      │
      ▼
JSON Response
      │
      ▼
AnalysisContext
      │
      ├── Dashboard
      ├── Competitors
      ├── Leads
      ├── Feature Gap
      ├── Recommendations
      ├── Explainability
      ├── Sources
      └── Market Overview

# ⚙️ Installation

Clone the repository.

```bash
git clone https://github.com/Puja4738/AI-Competitor-Intelligence-Platform.git
```

Navigate into the project.

```bash
cd nexus-ai-assignment
```

Install dependencies.

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env.local` file in the root directory.

```env
GROQ_API_KEY=your groq api key


# ▶️ Running the Project

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```text
http://localhost:3000
```

Build the project for production.

```bash
npm run build
```

Run the production build.

```bash
npm start
```

Project Deployment link.

```bash
https://ai-competitor-intelligence-platform.vercel.app/
```

---

# 📤 Export Functionality

The application supports exporting AI-generated reports.

## PDF Export

* Generates a professional PDF report.
* Includes all dashboard sections.
* Suitable for presentations and stakeholder meetings.

## CSV Export

* Exports structured competitor and lead data.
* Can be opened in Excel or Google Sheets.

---

# 🛡️ Error Handling

The application includes:

* Input validation
* Loading indicators
* API error handling
* Empty state handling
* Invalid response handling
* Graceful UI fallbacks

# 🚀 Future Enhancements

Planned improvements include:

* Authentication and user accounts
* Save analysis history
* Multiple AI model support
* Real-time competitor monitoring
* Interactive charts
* Team collaboration
* Dark mode
* Advanced filtering
* AI-powered SWOT analysis
* Email report sharing
* Cloud database integration
* Deployment on Vercel

---

# 👨‍💻 Author

**Puja Kumari**

B.Tech in Computer Science & Engineering
Galgotias University

Java Full Stack Developer | AI Enthusiast | Next.js Developer

---

# 📄 License

This project was developed as part of the **Nexus Internship Assignment** for educational and evaluation purposes.

---

# 🙏 Acknowledgements

Special thanks to:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Groq AI
* Llama 3.3 70B Model
* Vercel
* Open Source Community

---

⭐ If you found this project useful, consider giving it a star on GitHub!
