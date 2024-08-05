import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

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

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
          >
            Hem
          </Link>
          <Link to="/about">Om oss</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/assortment">Sortiment</Link>
          <Link to="/login">Logga in</Link>
        </div>

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
            ? `fixed text-white items-center justify-center flex bg-[#0a0a0a] z-10 right-0 top-0 w-[100%] opacity-100 h-screen duration-[1s] md:hidden `
            : " fixed  z-10 top-[-100%] w-[100%] h-screen bg-[#0a0a0a] opacity-0 duration-[1s]"
        }
      >
        <div className="flex flex-col gap-8 items-center text-xl">
          <Link to="/" onClick={handleMenu}>
            Hem
          </Link>
          <Link to="/about" onClick={handleMenu}>
            Om oss
          </Link>
          <Link to="/contact" onClick={handleMenu}>
            Kontakt
          </Link>
          <Link to="/assortment" onClick={handleMenu}>
            Sortiment
          </Link>
          <Link to="/login" onClick={handleMenu}>
            Logga in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
