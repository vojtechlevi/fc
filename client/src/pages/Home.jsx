import React, { useRef } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const mainRef = useRef(null);
  return (
    <>
      <Navbar mainRef={mainRef} />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Home;
