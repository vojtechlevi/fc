import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log(user);
      const { error } = await supabase.auth.signOut();
      console.log("After signOut");

      if (!error) {
        console.log("no error");
        setUser(null);
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
