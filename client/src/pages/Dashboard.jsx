import React, { useState, useContext, useEffect } from "react";

import UserContext from "../utils/userContext";
import ProductList from "../components/ProductList";
import { Nav } from "../components/Navbar";
import CartPage from "../components/Cart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState(null);
  const { user } = useContext(UserContext);

  /* useEffect(() => {
    const fetchProfile = async () => {
      // Fetch the user's profile
      console.log();
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.user.id)
        .single(); // Use .single() to get a single object instead of an array

      if (profileError) {
        console.log("Failed to fetch profile information.");
      } else {
        setProfile(profile);
      }
    };

    fetchProfile();
  }, [user?.user.id]); */

  const renderContent = () => {
    switch (activeTab) {
      case "shop":
        return <ProductList />;
      case "kampanjer":
        return <div>Kampanjer Content</div>;
      case "prislista":
        return <div>Prislista Content</div>;
      case "cart":
        return <CartPage />;
      case "profile":
        return <div>Profil</div>;
      default:
        return <div>Välj en flik för att se innehåll</div>;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen ">
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Content Area */}
        <div className="flex-1 p-4 bg-gray-100 pt-32">{renderContent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
