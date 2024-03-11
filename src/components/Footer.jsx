import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div id="Contact" className=" w-full p-10 flex flex-col justify-center">
      <div className=" flex flex-col ">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:mx-auto md:gap-48">
          <div className="text-white text-xs text-center h-32 gap-5 flex flex-col md:justify-between">
            <h2 className="font-bold uppercase">Öppettider</h2>
            <p>Måndag - Fredag: 05:00 - 18:00</p>
            <p>Lördag: 05:00 - 09:00</p>
            <p>Söndag: Stängt</p>
          </div>

          <div className="text-white text-xs text-center h-32 gap-5 flex flex-col md:justify-between">
            <h2 className="font-bold uppercase">Kontakt</h2>
            <p>031-22 56 90</p>
            <p>info@fruktcentralen.se</p>
            <p>Tagenevägen 34A, 417 05 Göteborg</p>
          </div>
        </div>
        <div className=" mt-10 text-white flex flex-col jusitfy-center text-center">
          <div className="text-white text-xs flex flex-row justify-center">
            {
              <div className="flex justify-center items-center mt-5 gap-5 md:flex-row">
                <a
                  href="https://www.instagram.com/fruktcentralen/"
                  className=""
                >
                  <FaInstagram size={25} color="rgb(74 222 128)" />
                </a>
                <a href="https://www.facebook.com/fruktcentralen" className="">
                  <FaFacebook size={25} color="rgb(74 222 128)" />
                </a>
              </div>
            }
          </div>
          <div className="h-[1px] w-[80%] my-10 bg-white mx-auto"></div>

          <p className="">© 2024 Fruktcentralen</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
