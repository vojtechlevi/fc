import React from "react";
import image from "../assets/pexels-mark-stebnicki-2749165.jpg";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div id="Home" className="text-white">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <img
          className="w-full h-full object-cover absolute top-0 left-0 -z-10 border-none opacity-80"
          src={image}
          alt="farm"
          srcset=""
        />
        <h1 className="text-green-300 text-xs md:text-lg">
          DIN GROSSIST NÄR KÖKET FÅR BESTÄMMA
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Väx med oss.
        </h1>
        <div className="flex justify-center text-sm">
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
        <p className="text-xs text-gray-300 mt-2 mx-auto max-w-[300px]">
          Det naturliga valet för restauranger när det gäller livsmedel i
          Göteborg med omnejd
        </p>
        <button className="bg-green-300 text-black w-[150px] rounded-md my-6 mx-auto py-4">
          <a href="#Contact">Bli kund idag</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
