import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useLoaderData } from "react-router";
import type { clientLoader } from "../routes/dashboard";

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff6384"];
const COLORS = ["#001f3d", "#0075db", "#3bc0ed", "#80ffd4", "#b1f7ef"];

const ContactSourcesChart: React.FC = () => {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div className="w-full max-w-2xl mx-auto md:p-4 p-1">
      <h2 className="text-xl font-semibold text-center pb-4">Contact Sources Breakdown</h2>

      <div className="w-full h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Legend verticalAlign="bottom" height={50} />

            <Pie
              data={data.contactSources}
              dataKey="count"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {/* Assign colors dynamically */}
              {data.contactSources.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContactSourcesChart;
