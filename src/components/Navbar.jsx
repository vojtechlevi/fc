import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="text-white sticky top-0 left-0 bg-[#0a0a0a] flex justify-between items-center h-24 w-full mx-auto px-4 lg:px-20">
      <div className="flex items-center">
        <img src={logo} alt="Fruktcentralen" className="w-12" />
        <div className="ml-2">
          <h1 className="w-full text-3xl font-bold">Fruktcentralen</h1>
          <p className=" text-xs">ER PERSONLIGA MATGROSSIST</p>
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
        {!showMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !showMenu
            ? "bg-[#0a0a0a] z-1 fixed right-0 top-24 w-[100%] h-full border-l border-l-gray-900 ease duration-500 md:hidden"
            : "fixed right-[-100%]"
        }
      >
        <ul className="pt-24 uppercase md:hidden text-center tracking-widest">
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
