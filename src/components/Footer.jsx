import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div
      id="Contact"
      className=" bg-[#080808] h-[400px] w-full px-10 flex flex-col justify-center"
    >
      <div className="flex justify-around">
        <div className="text-white text-xs h-32 flex flex-col justify-center">
          <a href="#Home">
            <img src={logo} alt="Fruktcentralen logo" className="w-10" />
          </a>
        </div>

        <div className="text-white text-xs  h-32 justify-between flex flex-col">
          <h2 className="font-bold">Öppettider</h2>
          <p>Måndag - Fredag: 05:00 - 18:00</p>
          <p>Lördag: 05:00 - 09:00</p>
          <p>Söndag: Stängt</p>
        </div>

        <div className="text-white text-xs h-32 justify-between flex flex-col">
          <h2 className="font-bold">Kontakt</h2>
          <p>031-22 56 90</p>
          <p>info@fruktcentralen.se</p>
          <p>Tagenevägen 34A</p>
          <p>417 05 Göteborg</p>
        </div>
      </div>

      <div className=" mt-10 text-white jusitfy-center text-center">
        <div className="h-[1px] w-[90%] bg-white mx-auto"></div>
        <p className="mt-10">© 2021 Fruktcentralen</p>
      </div>
    </div>
  );
}

export default Footer;
