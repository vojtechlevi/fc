import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient";

const AuthConfirm = () => {
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const tokenHash = query.get("token_hash");
    const type = query.get("type");

    const verifyMagicLink = async () => {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type,
      });

      if (error) {
        setError("Verification failed: " + error.message);
      } else {
        // Redirect to the continue registration page
        navigate("/continue-registration");
      }
    };

    if (tokenHash && type) {
      verifyMagicLink();
    } else {
      setError("Invalid magic link");
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <p>Verifying your login...</p>
        )}
      </div>
    </div>
  );
};

export default AuthConfirm;
