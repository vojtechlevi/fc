import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assortment from "./pages/Assortment";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CompleteRegistration from "./pages/CompleteRegistration";

import supabase from "./utils/supabaseClient";
import ProtectedRoute from "./utils/protectedRoute";
import UserContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState(null);
  const userContextValue = { user, setUser };

  const navigate = useNavigate();

  useEffect(() => {
    const checkUserProfile = async () => {
      if (user) {
        // Kolla om användarens profil är komplett
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
        } else if (!profile || !profile.username) {
          // Omdirigera till complete-registration om profilen inte är komplett
          navigate("/complete-registration");
        }
      }
    };

    checkUserProfile();
  }, [user, navigate]);

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
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/complete-registration"
            element={
              <ProtectedRoute>
                <CompleteRegistration />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
