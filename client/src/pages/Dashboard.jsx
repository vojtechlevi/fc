import React, { useState, useContext, useEffect } from "react";

import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";
import { Nav } from "../components/Navbar";
import Profile from "../components/Profile";
import ProductList from "../components/ProductList";
import CartPage from "../components/Cart";
import DocumentGallery from "../components/DocumentGallery";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("shop");
  const { user, profile, setProfile } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) return; // Ensure user ID is available before querying

      const { data, error } = await supabase
        .from("customers")
        .select("*")
        .eq("auth_id", user.id) // Assuming "auth_id" links to Supabase's user ID
        .single();

      if (error) {
        console.error("Failed to fetch profile information:", error.message);
      } else {
        setProfile(data);
        console.log(user);
        console.log(data);
      }
    };

    fetchProfile();
  }, [user, setProfile]); // Correct dependency to check for `user.id`

  const renderContent = () => {
    switch (activeTab) {
      case "shop":
        return <ProductList />;
      case "kampanjer":
        return <DocumentGallery />;
      case "prislista":
        return <div>Prislista Content</div>;
      case "cart":
        return <CartPage />;
      case "profile":
        return <Profile profile={profile} />;
      default:
        return <div>Välj en flik för att se innehåll</div>;
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen mx-auto justify-center items-center max-w-[1440px] ">
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-h-screen w-full pt-24 px-4 ">{renderContent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
