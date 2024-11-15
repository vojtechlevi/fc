import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <div
        className="snap-end flex justify-between p-12 bg-auto border-t-2 border-black"
        /* style={{ backgroundImage: `url(${footerPattern})` }} */
      >
        <div className="w-[700px] flex flex-col ">
          <div className="flex flex-col md:flex-row  mb-4 gap-12 font-thin">
            <div className="gap-2 flex flex-col">
              <p className="font-bold">Öppettider</p>
              <p>Vardagar: 05:00 - 18:00</p>
              <p>Lördagar: 05:00 - 09:00</p>
              <p>Söndagar: Stängt</p>
            </div>
            <div className="gap-2 flex flex-col">
              <p className="font-bold">Fruktcentralen</p>
              <p>Om oss</p>
              <p>Sortiment</p>
              <p>Jobba på Fruktcentralen</p>
            </div>
            <div className="gap-2 flex flex-col ">
              <p className="font-bold">Kundservice</p>
              <p>Reklamation</p>
              <p>Kontakt</p>
              <p>Behandling av personuppgifter</p>
              <p>Cookies</p>
            </div>
          </div>
          <div className="bg-black w-[100%] h-[1px] mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 w-full mt-4  md:items-start ">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src={logo} alt="" className="w-12 flex justify-center" />
              </Link>
              <div className="text-sm">
                <p>Fruktcentralen AB</p>
                <p>Tagenevägen 34 A, 42537 Hisings Kärra</p>
                <a className="hover:text-gray-400 text-lg" href="tel:031225690">
                  +46 31 22 56 90
                </a>
              </div>
            </div>

            <div className="flex md:flex-col gap-2 items-center text-xs md:text-center md:justify-center">
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/Fruktcentralen.gbg">
                  <img
                    src={facebook}
                    alt=""
                    className="w-[20px] flex justify-center"
                  />
                </a>
                <a href="https://www.instagram.com/fruktcentralen/">
                  <img
                    src={instagram}
                    alt=""
                    className="w-[24px] flex justify-center"
                  />
                </a>
              </div>
              <p>
                Följ oss för mer <br className="hidden md:flex" /> inspiration
                och nyheter!
              </p>
            </div>
          </div>
        </div>
        <iframe
          title="Map"
          className="hidden xl:flex"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.5408750681327!2d11.990462476608574!3d57.77519653443828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff56ab64c9349%3A0x51dda2ad159a63a8!2sFruktcentralen%20Sverige%20AB!5e0!3m2!1ssv!2sse!4v1722354917658!5m2!1ssv!2sse"
          width="400"
          height="250"
          style={{ border: "", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Footer;
