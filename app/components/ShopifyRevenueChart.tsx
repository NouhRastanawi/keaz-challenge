import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useLoaderData } from "react-router";
import type { clientLoader } from "../routes/dashboard";

const ShopifyRevenueChart: React.FC = () => {
  const data = useLoaderData<typeof clientLoader>();

  // Convert data into chart-friendly format
  const chartData = [
    { name: "Last Week", revenue: data.shopifyRevenue.lastWeek },
    { name: "This Week", revenue: data.shopifyRevenue.thisWeek },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Shopify Revenue Comparison</h2>

      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={50}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShopifyRevenueChart;
