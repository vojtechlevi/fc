import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assortment from "./pages/Assortment";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CompleteRegistration from "./pages/ContinueRegistration";

import supabase from "./utils/supabaseClient";
import ProtectedRoute from "./utils/protectedRoute";
import UserContext from "./utils/userContext";
import { CartProvider } from "./utils/cartContext";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const userContextValue = { user, setUser, profile, setProfile };
  let navigate = useNavigate();

  useEffect(() => {
    // Retrieve user session from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/dashboard");
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          navigate("/dashboard");
          setUser(session?.user);
          console.log(event);
          localStorage.setItem("user", JSON.stringify(session?.user));
          break;
        case "SIGNED_OUT":
          console.log(event);
          setUser(null);
          localStorage.removeItem("user");
          break;
        default:
        // intentionally left blank
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/continue-registration"
            element={<CompleteRegistration />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <CartProvider>
                  <Dashboard />
                </CartProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
