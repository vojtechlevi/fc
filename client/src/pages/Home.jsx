import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
