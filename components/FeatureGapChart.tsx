"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface FeatureGap {
  feature: string;
  gap: number;
}

interface Props {
  data?: FeatureGap[];
}

export default function FeatureGapChart({
  data = [],
}: Props) {

  const gapData =
    data.length > 0
      ? data
      : [
          {
            feature: "Waiting",
            gap: 0,
          },
        ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Feature Gap Analysis
      </h2>

      <div className="bg-white w-full h-[400px] rounded-xl shadow-md p-4">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={gapData}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="feature"
              width={150}
            />

            <Tooltip />

            <Bar dataKey="gap" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}