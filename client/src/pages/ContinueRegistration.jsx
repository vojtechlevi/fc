import React, { useState, useEffect } from "react";
import supabase from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const ContinueRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: user, error } = await supabase.auth.getUser();

      if (user) {
        console.log(user);
      }
      if (error) {
        setError("User is not logged in.");
        navigate("/login"); // Redirect to login if the user is not authenticated
      }
    };

    checkUser();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      setError("Failed to retrieve user information.");
      return;
    }

    if (!user || !user.id) {
      setError("User is not logged in or ID is missing.");
      console.log("User object:", user); // Log the user object
      return;
    }

    const { error: passwordError } = await supabase.auth.updateUser({
      password: password,
    });

    if (passwordError) {
      setError("Failed to update password: " + passwordError.message);
      return;
    }

    const { error } = await supabase.from("profiles").insert({
      id: user.id, // Associate the profile with the authenticated user
      display_name: fullName,
    });

    if (error) {
      setError("Failed to save profile information: " + error.message);
    } else {
      navigate("/dashboard"); // Redirect to the dashboard or another page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">
          Continue Registration
        </h2>
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded"
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
};

export default ContinueRegistration;
