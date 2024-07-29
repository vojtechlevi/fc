import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo1 from "../assets/FruktCentralen-logo-white-text.svg";

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
            ? "text-white absolute top-0 left-0 z-20 flex justify-between items-center h-24 w-full mx-auto px-6 lg:px-20"
            : " absolute top-0 left-0 z-20 duration-[400ms] text-white flex justify-between items-center h-24 w-full mx-auto px-6 lg:px-20 md:bg-transparent"
        }
      >
        <div className="flex items-center ">
          <img src={logo1} alt="Fruktcentralen" className="w-64" />
        </div>

        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#Home">Hem</a>
          </li>
          <li className="p-4">
            <a href="#About">Om oss</a>
          </li>
          <li className="p-4">
            <a href="">Sortiment</a>
          </li>
          <li className="p-4">
            <a href="#Contact">Kontakt</a>
          </li>
          <li className="p-4">
            <a href="">Logga in</a>
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
          showMenu
            ? ` fixed bg-[#0a0a0a] z-10 right-0 top-0 w-[100%] opacity-100 h-screen duration-[1s] md:hidden `
            : " fixed z-10 top-[-100%] w-[100%] h-screen bg-[#0a0a0a] opacity-0 duration-[1s]"
        }
      >
        <ul className=" pt-52 text-white uppercase md:hidden text-center tracking-widest">
          <li className="p-4">
            <a href="#Home" onClick={handleMenu}>
              Hem
            </a>
          </li>
          <li className="p-4">
            <a href="#About" onClick={handleMenu}>
              Om oss
            </a>
          </li>
          <li className="p-4">
            <a href="" onClick={handleMenu}>
              Sortiment
            </a>
          </li>
          <li className="p-4">
            <a href="#Contact" onClick={handleMenu}>
              Kontakt
            </a>
          </li>
          <li className="p-4">
            <a href="" onClick={handleMenu}>
              Logga in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
