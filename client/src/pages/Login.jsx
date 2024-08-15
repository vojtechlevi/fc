import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";

const Login = () => {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setErrorMessage("");
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function signInWithPassword(e) {
    e.preventDefault();

    // Form validation
    if (!formData.email && !formData.password) {
      setErrorMessage("Mailadress och lösenord krävs.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(translateErrorMessage(error.message));
        return;
      }

      if (data) {
        setUser(data);
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error);
    }
  }

  function translateErrorMessage(message) {
    const errorTranslations = {
      "Email and password are required.": "E-post och lösenord krävs.",
      "Invalid login credentials": "Ogiltiga inloggningsuppgifter",
    };

    return errorTranslations[message] || message;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Logga In</h2>
          <form onSubmit={signInWithPassword}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Lösenord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {errorMessage ? (
              <div className="w-full border-t-2 border-yrgo-blue bg-[#f2f2f2] lg:border-none ">
                <p className="py-4 text-center text-yrgo-blue">
                  {errorMessage}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Logga In
              </button>
              {/* <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Glömt ditt lösenord?
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
