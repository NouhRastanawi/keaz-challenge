import { useLoaderData } from "react-router";
import ContactsChart from "~/components/ContactsChart";

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

  console.log(data.support);
  console.table(data.shopifyRevenue);
  console.table(data.contacts);
  console.table(data.contactSources);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* <h3 className="font-mono">/app/routes/dashboard.tsx</h3> */}
      <ContactsChart />
    </div>
  );
};

export default Dashboard;
