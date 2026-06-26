import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.idea || body.idea.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a startup idea",
        },
        {
          status: 400,
        }
      );
    }

    const input = body.idea?.trim();

    if (!input) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a startup idea, company name or website URL."
        },
        { status: 400 }
      );
    }

    const prompt = `
Return ONLY valid JSON.

Do not add markdown.
Do not add explanations.
Do not wrap inside triple backticks.

Analyze this startup idea:

${body.idea}

Generate:

- At least 5 competitors
- At least 5 leads
- At least 5 feature gaps
- Market opportunities
- Product recommendations
- Sales recommendations
- Founder dashboard insights

Return EXACTLY this JSON structure:

{
  "metadata": {
    "confidence": 90,
    "reasoning": "",
    "source": "AI Analysis / Public Industry Knowledge",
    "type": "Verified"
  },

    "sources": [
    {
      "name": "",
      "url": "",
      "type": ""
    }
  ]

  "dashboard": {
    "biggestThreat": "",
    "biggestOpportunity": "",
    "topLead": "",
    "growthPotential": "",
    "buildNext": ""
  },

  "marketOverview": {
    "marketSize": "",
    "growthRate": "",
    "competitionLevel": "",
    "opportunity": ""
  },

  "salesRecommendations": {
    "topCompanies": [
      {
        "company": "",
        "reason": ""
      }
    ],

    "topDecisionMakers": [
      {
        "name": "",
        "title": "",
        "company": "",
        "reason": ""
      }
    ]
  },

  "productRecommendations": {
    "topFeaturesToBuild": [
      {
        "feature": "",
        "reason": ""
      }
    ],

    "topCompetitiveAdvantages": [
      {
        "advantage": "",
        "reason": ""
      }
    ]
  },

  "marketRecommendations": {
    "topOpportunities": [
      {
        "opportunity": "",
        "reason": ""
      }
    ],

    "topRisks": [
      {
        "risk": "",
        "reason": ""
      }
    ]
  },

  "competitors": [
    {
      "name": "",
      "pricing": "",
      "audience": "",
      "confidence": 90
    }
  ],

  "pricing": [
    {
      "name": "",
      "price": 20
    }
  ],

  "positioning": [
    {
      "name": "",
      "price": 20,
      "features": 80
    }
  ],

  "leads": [
    {
      "company": "",
      "website": "",
      "industry": "",
      "employeeSize": "",
      "location": "",
      "contact": "",
      "title": "",
      "linkedin": "",
      "email": "",
      "confidence": 90
    }
  ],

  "featureGaps": [
    {
      "feature": "",
      "gap": 3
    }
  ],

  "featureMatrix": [
    {
      "feature": "",
      "ours": true,
      "competitorA": true,
      "competitorB": false,
      "competitorC": true,
      "competitorD": false,
      "competitorE": true
    }
  ],

  "recommendations": [
    ""
  ]
}

Rules:

- Return at least 5 competitors.
- Return at least 5 leads.
- Return at least 5 feature gaps.
- Return at least 5 topCompanies.
- Return at least 5 topDecisionMakers.
- Return at least 5 opportunities.
- Return at least 5 risks.
- Return at least 5 featuresToBuild.
- Return at least 5 competitiveAdvantages.
- Confidence score must be between 0 and 100.

Generate at least 5 source references.

Each source should contain:
- name
- url
- type

Use realistic sources such as:
- LinkedIn
- Crunchbase
- Gartner
- SimilarWeb
- G2
- Product Hunt

Return valid JSON only.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are an expert startup analyst. Always return valid JSON only.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.3,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Groq Error:", errorText);

      return NextResponse.json(
        {
          success: false,
          message: "Groq API failed",
        },
        {
          status: 500,
        }
      );
    }

    if (!response.ok) {

      const errorText =
        await response.text();

      console.error(
        "Groq Error:",
        errorText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "AI service temporarily unavailable."
        },
        {
          status: 500
        }
      );
    }

    const data =
      await response.json();

    const content =
      data?.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        {
          success: false,
          message: "No AI response received",
        },
        {
          status: 500,
        }
      );
    }

    try {
      const cleaned = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      if (
        !parsed.competitors ||
        parsed.competitors.length === 0
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "No competitors found."
          }
        );
      }

      console.log("=================================");
      console.log("AI JSON RESPONSE");
      console.log("=================================");
      console.log(
        JSON.stringify(parsed, null, 2)
      );
      console.log("=================================");

      return NextResponse.json({
        success: true,
        analysis: parsed,
      });
    } catch (parseError) {
      console.error(
        "JSON Parse Error:",
        parseError
      );

      console.error(
        "RAW AI RESPONSE:",
        content
      );

      return NextResponse.json({
        success: false,
        rawResponse: content,
        message: "AI returned invalid JSON",
      });
    }
  } catch (error: any) {
    console.error(
      "API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}