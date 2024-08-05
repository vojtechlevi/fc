import React from "react";
import { useEffect } from "react";

const InstaWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    // Append script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-79400220-6a4b-4170-89e0-ced46c842a2f"
      data-elfsight-app-lazy
    ></div>
  );
};

export default InstaWidget;
