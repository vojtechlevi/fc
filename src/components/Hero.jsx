import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div id="Home" className="text-white">
      <div className=" mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-green-300 text-sm md:text-lg">
          DIN GROSSIST NÄR KÖKET FÅR BESTÄMMA
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Väx med oss.
        </h1>
        <div className="flex justify-center">
          <p>Hos oss hittar du allt inom</p>
          <ReactTyped
            className="ml-2 font-bold"
            strings={["Frukt/Grönt", "Kolonial", "Frysvaror"]}
            typeSpeed={50}
            backSpeed={30}
            showCursor={false}
            loop
          />
        </div>
        <p className="text-md text-gray-500 mt-2 w-[400px] mx-auto">
          Det naturliga valet för restauranger när det gäller livsmedel i
          Göteborg med omnejd
        </p>
        <button className="bg-green-300 text-black w-[150px] rounded-md my-6 mx-auto py-4">
          Bli kund idag
        </button>
      </div>
    </div>
  );
}

export default Hero;
