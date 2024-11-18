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
    <>
      <Navbar />
      <div className=" h-screen w-full ">
        <div className="relative w-full h-full">
          <div className="relative h-screen overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1700046193059-990728fd7ce4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="harvest"
              className="object-contain aspect-square h-full w-full translate-y-[200px] z-10 translate-x-[240px]  md:translate-y-[100px] md:-translate-x-[500px] md:scale-x-[-1] rotate-[20deg] xl:-translate-x-[800px] "
            />
            <img
              src="https://images.unsplash.com/photo-1700046193059-990728fd7ce4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="harvest"
              className="absolute top-0 left-2 object-contain aspect-square h-full w-full rotate-180 md:rotate-0 -translate-x-[180px] -translate-y-[200px]  md:-translate-y-[0px] md:translate-x-[500px] xl:hidden"
            />
          </div>
          <div className="absolute top-0 left-0 w-full lg:z-10 h-full flex flex-col items-center justify-center">
            {!showPasswordReset ? (
              <form
                onSubmit={signInWithPassword}
                className="h-[500px] bg-white/70  w-[90%] md:w-1/3 2xl:w-[20%] rounded-lg flex flex-col gap-12 px-12 justify-center border"
              >
                <div className="">
                  <input
                    className=" appearance-none bg-transparent w-full py-2 px-3 text-black placeholder-black leading-tight focus:outline-none focus:shadow-outline border-b-2 border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Mailadress"
                  />
                </div>
                <div className="">
                  <input
                    className=" appearance-none bg-transparent w-full py-2 px-3 text-black placeholder-black leading-tight focus:outline-none focus:shadow-outline border-b-2 border-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Lösenord"
                  />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <button
                    className="bg-green-500 hover:bg-green-700 w-2/3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Logga in
                  </button>
                  {errorMessage && (
                    <p className="text-red-500 text-xs italic">
                      {errorMessage}
                    </p>
                  )}
                </div>
                <div className="flex flex-col text-xs mt-18 text-center">
                  <p>
                    Glömt ditt lösenord?
                    <button
                      className="pl-1 font-bold text-xs text-green-500 hover:text-green-800"
                      onClick={() => setShowPasswordReset(true)}
                    >
                      Klicka här
                    </button>
                  </p>

                  <p>
                    Inget konto?
                    <a
                      className="pl-1 font-bold text-xs text-green-500 hover:text-green-800"
                      href="/kontakt"
                    >
                      Kontakta oss
                    </a>
                  </p>
                </div>
              </form>
            ) : (
              <PasswordReset
                showPasswordReset={showPasswordReset}
                setShowPasswordReset={setShowPasswordReset}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
