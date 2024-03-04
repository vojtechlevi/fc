import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div>
      <div
        className={
          !showMenu
            ? "text-white relative z-20 flex justify-between items-center h-24 w-full mx-auto px-4 lg:px-20"
            : " bg-[#0a0a0a] relative z-20 duration-[400ms] text-white flex justify-between items-center h-24 w-full mx-auto px-4 lg:px-20 md:bg-transparent"
        }
      >
        <div className="flex items-center">
          <img src={logo} alt="Fruktcentralen" className="w-12 " />
          <div className="ml-2">
            <h1 className="w-full text-xl md:text-3xl font-bold">
              Fruktcentralen
            </h1>
            <p className=" text-[8px] md:text-xs">ER PERSONLIGA MATGROSSIST</p>
          </div>
        </div>

        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#Home">Hem</a>
          </li>
          <li className="p-4">
            <a href="#About">Om oss</a>
          </li>
          <li className="p-4">
            <a href="#Contact">Kontakt</a>
          </li>
        </ul>

        <div onClick={handleMenu} className="block cursor-pointer md:hidden">
          {showMenu ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
      </div>
      <div
        className={
          !showMenu
            ? " fixed z-10 top-[-100%] bg-[#0a0a0a]"
            : ` fixed bg-[#0a0a0a] z-10 right-0 top-24 w-[100%] h-full duration-[1s] md:hidden `
        }
      >
        <ul className=" pt-52 text-white uppercase md:hidden text-center tracking-widest">
          <li className="p-4" onClick={handleMenu}>
            <a href="#Home">Hem</a>
          </li>
          <li className="p-4" onClick={handleMenu}>
            <a href="#About">Om oss</a>
          </li>
          <li className="p-4" onClick={handleMenu}>
            <a href="#Contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
