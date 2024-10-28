import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";
import PasswordReset from "../components/PasswordReset"; // Importera lösenordsåterställningskomponenten

const Login = () => {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPasswordReset, setShowPasswordReset] = useState(false); // State för att visa lösenordsåterställningskomponenten

  function handleChange(event) {
    setErrorMessage("");
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const signInWithPassword = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Mailadress och lösenord krävs.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage("Inloggning misslyckades. Vänligen försök igen.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="w-full max-w-md">
        {!showPasswordReset ? (
          <form
            onSubmit={signInWithPassword}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              {errorMessage && (
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
              )}
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                onClick={() => setShowPasswordReset(true)}
              >
                Glömt ditt lösenord?
              </a>
            </div>
          </form>
        ) : (
          <PasswordReset />
        )}
      </div>
    </div>
  );
};

export default Login;
