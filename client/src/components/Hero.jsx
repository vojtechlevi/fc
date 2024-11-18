import React from "react";
function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="Home" className="text-white snap-end h-screen">
      <div className="relative w-full h-screen-navbar mx-auto flex flex-col justify-center lg:items-start bg-gradient-to-b from-transparent from-75% to-white">
        <img
          className="w-full h-screen-navbar object-cover absolute top-0 left-0 -z-10 border-none"
          src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/farm.png?t=2024-11-14T12%3A41%3A38.458Z"
          alt="farm"
          loading="lazy"
        />

        <div className="lg:ml-20 text-center lg:text-start">
          <h1 className="text-green-300 text-xs md:text-lg 2xl:text-3xl">
            DIN GROSSIST NÄR KÖKET FÅR BESTÄMMA
          </h1>
          <h1 className="text-4xl lg:text-8xl 2xl:text-9xl font-bold tracking-wide">
            Väx med oss.
          </h1>
          <p className="text-sm text-white font-bold mt-2 2xl:text-2xl">
            Det naturliga valet för restauranger när det gäller <br />
            livsmedel i Göteborg med omnejd
          </p>
          <div className="flex w-full gap-4 mt-4 justify-center lg:justify-start">
            <button className="text-white backdrop-blur-sm bg-green-500 hover:bg-white hover:text-black rounded-md py-3 px-4 transition-colors duration-500 ease-in-out 2xl:py-4 2xl:px-6">
              <a href="/kontakt">Bli kund idag</a>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-green-500 backdrop-blur-sm bg-white hover:bg-green-500 hover:text-white rounded-md py-3 px-4 transition-colors duration-500 ease-in-out 2xl:py-4 2xl:px-6"
            >
              Läs mer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
