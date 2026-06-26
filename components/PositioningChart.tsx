"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PositioningItem {
  name: string;
  price: number;
  features: number;
}

interface Props {
  data?: PositioningItem[];
}

export default function PositioningChart({
  data = [],
}: Props) {

  const chartData =
    data.length > 0
      ? data
      : [
          {
            name: "Waiting",
            price: 0,
            features: 0,
          },
        ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Competitor Positioning Graph
      </h2>

      <div className="w-full h-[400px] border rounded-lg p-4">
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart>
            <CartesianGrid />

            <XAxis
              type="number"
              dataKey="price"
              name="Price"
            />

            <YAxis
              type="number"
              dataKey="features"
              name="Features"
            />

            <Tooltip />

            <Scatter data={chartData} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}