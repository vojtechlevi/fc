// src/pages/CompleteRegistration.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/userContext";
import supabase from "../utils/supabaseClient";

const CompleteRegistration = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Om ingen användare är inloggad, omdirigera till login-sidan
      navigate("/login");
    }
  }, [user, navigate]);

  const handleCompleteRegistration = async () => {
    if (!username) {
      setError("Username cannot be empty");
      return;
    }

    try {
      const { error } = await supabase
        .from("profiles")
        .update({ username })
        .eq("id", user.id);

      if (error) throw error;

      // Omdirigera till dashboard när registreringen är slutförd
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Complete Your Registration</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleCompleteRegistration}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Complete Registration
      </button>
    </div>
  );
};

export default CompleteRegistration;
