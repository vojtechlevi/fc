import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assortment from "./pages/Assortment";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CompleteRegistration from "./pages/ContinueRegistration";
import AuthConfirm from "./pages/AuthConfirm";

import supabase from "./utils/supabaseClient";
import ProtectedRoute from "./utils/protectedRoute";
import UserContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState(null);
  const userContextValue = { user, setUser };

  useEffect(() => {
    const session = supabase.auth.session;
    setUser(session?.user);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
        // intentionally left blank
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
          <Route path="/auth/confirm" element={<AuthConfirm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
