import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useLoaderData } from "react-router";
import type { clientLoader } from "../routes/dashboard";

const ContactsChart: React.FC = () => {
  const data = useLoaderData<typeof clientLoader>();
  const [showLastWeek, setShowLastWeek] = useState(true);

  // Convert contacts data into Recharts-compatible format
  const chartData = data.contacts.lastWeek.map((count, index) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index], // I assumed the data goes from Monday to Sunday (7 data entries ==> 7 days?), so I added days
    lastWeek: count,
    thisWeek: data.contacts.thisWeek[index],
  }));

  return (
    <div className="w-full max-w-4xl mx-auto md:p-4 p-2">
      <h2 className="text-xl font-semibold text-center mb-4">Weekly Contact Trends</h2>
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-all"
          onClick={() => setShowLastWeek(!showLastWeek)}
        >
          {showLastWeek ? "Hide Last Week" : "Show Last Week"}
        </button>
      </div>
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            {showLastWeek && (
              <Line
                type="monotone"
                dataKey="lastWeek"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                animationDuration={400}
              />
            )}
            <Line
              type="monotone"
              dataKey="thisWeek"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={400}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContactsChart;
