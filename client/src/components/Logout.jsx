import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        navigate("/");
      } else {
        console.error("Logout failed: ", error.message);
      }
    } catch (err) {
      console.error("An unexpected error occurred: ", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-green-300 text-black rounded-lg"
    >
      Logga ut
    </button>
  );
};

export default Logout;
