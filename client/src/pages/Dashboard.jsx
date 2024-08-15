import React, { useState, useContext, useEffect } from "react";

import UserContext from "../utils/userContext";
import Logout from "../components/Logout";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("shop");
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "shop":
        return <div>Shop Content</div>;
      case "kampanjer":
        return <div>Kampanjer Content</div>;
      case "prislista":
        return <div>Prislista Content</div>;
      default:
        return <div>Välj en flik för att se innehåll</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 text-white flex flex-col justify-between">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Hej!</h2>
          <p>Kund</p>

          <ul className="mt-8 space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("shop")}
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "shop" ? "bg-gray-700" : "bg-opacity-90"
                }`}
              >
                Webshop
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("kampanjer")}
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "kampanjer" ? "bg-gray-700" : "bg-opacity-90"
                }`}
              >
                Kampanjer
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("prislista")}
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "prislista" ? "bg-gray-700" : "bg-opacity-20"
                }`}
              >
                Prislista
              </button>
            </li>

            {/* Lägg till fler flikar här */}
          </ul>
        </div>
        <div className="flex justify-end">
          <Logout />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
