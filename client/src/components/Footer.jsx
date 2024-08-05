import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="w-full p-12 flex bg-black justify-between">
        <div className="w-42 text-white flex items-end">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4 mr-2 w-full">
              <Link to="/">
                <img src={logo} alt="" className="w-8 flex justify-center" />
              </Link>
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
            <p className="text-xs"> &#169; 2024 Fruktcentralen AB</p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-center items-center gap-4">
          <p className="text-center">
            Tagenevägen 34A, <br /> 425 37 Hisings Kärra
          </p>
          <p>031 - 22 56 90</p>
          <p>order@fruktcentralen.se</p>
          <div className="text-center">
            <p>Kundservice</p>
            <p>Vardagar: 05:00 - 18:00</p>
            <p>Lördagar: 05:00 - 09:00</p>
            <p>Söndagar: Stängt</p>
          </div>
        </div>
        <div className="text-white">
          <p>Om oss</p>
          <p>Kontakt</p>
          <p>Sortiment</p>
        </div>
        <iframe
          title="Map"
          className="hidden lg:flex"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.5408750681327!2d11.990462476608574!3d57.77519653443828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff56ab64c9349%3A0x51dda2ad159a63a8!2sFruktcentralen%20Sverige%20AB!5e0!3m2!1ssv!2sse!4v1722354917658!5m2!1ssv!2sse"
          width="400"
          height="300"
          style={{ border: "", borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Footer;
