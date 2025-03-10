import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ContactsChart from "~/components/ContactsChart";
import ContactSourcesChart from "~/components/ContactSourcesChart";
import ShopifyRevenueChart from "~/components/ShopifyRevenueChart";
import { ChartPie } from "lucide-react";
import { ChartColumnBig } from "lucide-react";
import { ChartLine } from "lucide-react";

export const clientLoader = async () => {
  return {
    contacts: {
      lastWeek: [398, 412, 425, 430, 445, 460, 430],
      thisWeek: [438, 438, 450, 459, 482, 483, 492],
    },
    support: {
      email: "help@keaz.app",
    },
    shopifyRevenue: {
      lastWeek: 15874,
      thisWeek: 20023,
    },
    contactSources: [
      {
        source: "Shopify Order",
        count: 232,
      },
      {
        source: "Shopify Widget",
        count: 35,
      },
      {
        source: "Chat-In",
        count: 125,
      },
      {
        source: "Instagram Bio Link",
        count: 48,
      },
      {
        source: "Manually Created",
        count: 11,
      },
    ],
  };
};

const Dashboard = () => {
  const data = useLoaderData<typeof clientLoader>();

  const [selectedChart, setSelectedChart] = useState<"contacts" | "sources" | "revenue">(
    "contacts"
  );

  return (
    <div className="w-full max-w-4xl mx-auto md:p-4 p-1">
      {/* Chart Selection Buttons */}
      <div className="flex justify-center flex-wrap gap-4 sm:mb-6 mb-3">
        <button
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl ${
            selectedChart === "contacts"
              ? "bg-white border-2 border-[#a7a7a7]"
              : "bg-neutral-200 text-secondary hover:opacity-60 hover:cursor-pointer"
          }`}
          onClick={() => setSelectedChart("contacts")}
        >
          <ChartLine />
          Contacts Over Time
        </button>
        <button
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl ${
            selectedChart === "sources"
              ? "bg-white border-2 border-[#a7a7a7]"
              : "bg-neutral-200 text-secondary hover:opacity-60 hover:cursor-pointer"
          }`}
          onClick={() => setSelectedChart("sources")}
        >
          <ChartPie />
          Contact Sources
        </button>
        <button
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl ${
            selectedChart === "revenue"
              ? "bg-white border-2 border-[#a7a7a7]"
              : "bg-neutral-200 text-secondary hover:opacity-60 hover:cursor-pointer"
          }`}
          onClick={() => setSelectedChart("revenue")}
        >
          <ChartColumnBig />
          Shopify Revenue
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t-2 border-gray-300 mb-6"></div>

      {selectedChart === "contacts" && <ContactsChart />}
      {selectedChart === "sources" && <ContactSourcesChart />}
      {selectedChart === "revenue" && <ShopifyRevenueChart />}
    </div>
  );
};

export default Dashboard;
