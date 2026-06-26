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

interface PricingItem {
  name: string;
  price: number;
}

interface Props {
  data?: PricingItem[];
}

export default function PricingChart({
  data = [],
}: Props) {
  const chartData =
    data.length > 0
      ? data
      : [
          {
            name: "Waiting",
            price: 0,
          },
        ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Pricing Comparison
      </h2>

      <div className="bg-white w-full h-[400px] rounded-xl shadow-md p-4">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="price" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}