import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Inaktivera scrollRestoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Flytta omedelbart till toppen
    window.scrollTo(0, 0);

    return () => {
      // Återställ scrollRestoration till auto om det behövs
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
