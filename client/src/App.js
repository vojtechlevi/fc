import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assortment from "./pages/Assortment";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./utils/protectedRoute";
import supabase from "./utils/supabaseClient";
import UserContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState(null);
  const userContextValue = { user, setUser };

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const user = session?.user ?? null;
        setUser(user);
      }
    );

    // Cleanup the listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <Navbar />
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
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
