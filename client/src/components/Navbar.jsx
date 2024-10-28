import React, { useState } from "react";
import { Menu, X, ShoppingCart, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import supabase from "../utils/supabaseClient";
import { useCart } from "../utils/cartContext";

import logo1 from "../assets/FruktCentralen-logo-white-text.svg";
import logo2 from "../assets/FruktCentralen-logo-black-text.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="relative text-white">
        <div
          className={
            !showMenu
              ? " bg-black/20 fixed top-0 left-0 flex z-20 justify-between items-center h-24 w-full mx-auto px-6 lg:px-20"
              : " fixed top-0 z-20 left-0 duration-[400ms]  flex justify-between items-center h-24 w-full mx-auto px-6 lg:px-20 md:bg-transparent"
          }
        >
          <div className="flex items-center ">
            <img src={logo1} alt="Fruktcentralen" className="w-44 md:w-64" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Hem
            </Link>
            <Link
              to="/contact"
              className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Kontakt
            </Link>
            <Link
              to="/assortment"
              className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Sortiment
            </Link>
            <Link
              to="/login"
              className="ml-4 bg-green-300 text-black  p-2 rounded-lg"
            >
              Logga in
            </Link>
          </div>

          <div onClick={handleMenu} className="block cursor-pointer md:hidden">
            {showMenu ? <X size={20} /> : <Menu size={20} />}
          </div>
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
    </>
  );
}

export function Nav({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        navigate("/");
      } else {
        console.error("Logout failed: ", error.message);
      }
    } catch (err) {
      console.error("An unexpected error occurred: ", err);
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="relative">
        <div
          className={
            !showMenu
              ? "bg-white fixed top-0 left-0 flex z-20 justify-between items-center h-24 w-full mx-auto px-6 lg:px-20"
              : " fixed top-0 z-20 left-0 duration-[400ms]  flex justify-between items-center h-24 w-full mx-auto px-6 lg:px-20 md:bg-transparent"
          }
        >
          <div className="flex items-center ">
            <img src={logo2} alt="Fruktcentralen" className="w-44 md:w-56" />
          </div>

          <div className="p-4 flex items-center">
            {/* <h2 className="text-2xl font-bold">Hej {profile?.display_name}!</h2> */}
            {/* <p>Kund</p> */}

            <ul className="items-center hidden md:flex text-xs gap-2">
              <li>
                <button
                  onClick={() => setActiveTab("shop")}
                  className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ease-in ${
                    activeTab === "shop"
                      ? "bg-green-500 text-white "
                      : " text-black"
                  }`}
                >
                  Beställning
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("kampanjer")}
                  className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ease-in ${
                    activeTab === "kampanjer"
                      ? "bg-green-500 text-white"
                      : "text-black"
                  }`}
                >
                  Kampanjer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("prislista")}
                  className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ease-in ${
                    activeTab === "prislista"
                      ? "bg-green-500 text-white"
                      : "text-black"
                  }`}
                >
                  Prislista
                </button>
              </li>

              {/* Lägg till fler flikar här */}
            </ul>
          </div>

          <div className="hidden md:flex text-white items-center justify-center bg-green-500 py-2 px-4 rounded-lg gap-4">
            <UserRound
              onClick={() => setActiveTab("profile")}
              className=" cursor-pointer"
              size={18}
            />
            <Link href="cart" className="relative">
              <ShoppingCart
                onClick={() => setActiveTab("cart")}
                className="mr-6 relative cursor-pointer"
                size={18}
              />

              {cartItems.length === 0 ? (
                ""
              ) : (
                <span className="pointer-events-none cursor-none absolute -top-2 left-2 text-[10px] w-4 h-4 items-center flex justify-center bg-red-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => handleLogout()}
              className={`px-4 py-2 text-xs border bg-green-500 text-nowrap rounded-lg`}
            >
              Logga ut
            </button>
          </div>
          <div className="flex md:hidden items-center bg-green-500 py-4 px-4 rounded-lg gap-4">
            <UserRound
              onClick={() => setActiveTab("profile")}
              size={16}
              className="mr-2 text-white cursor-pointer"
            />
            <Link href="cart" className="relative">
              <ShoppingCart
                onClick={() => setActiveTab("cart")}
                className="relative cursor-pointer text-white"
                size={16}
              />

              {cartItems.length === 0 ? (
                ""
              ) : (
                <span className="pointer-events-none cursor-none text-white absolute -top-2 left-2 text-[10px] w-4 h-4 items-center flex justify-center bg-red-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <div
              onClick={handleMenu}
              className="block cursor-pointer md:hidden ml-2 select-none "
            >
              {showMenu ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={` flex justify-center items-center
          ${
            showMenu
              ? `fixed text-white bg-[#ffffff] z-10 right-0 top-0 w-[100%] opacity-100 h-screen duration-[1s] md:hidden `
              : " fixed  z-10 top-[-100%] w-[100%] h-screen bg-[#ffffff] opacity-0 duration-[1s]"
          }`}
      >
        <div className="p-4 flex flex-col gap-4">
          {/* <h2 className="text-2xl font-bold">Hej {profile?.display_name}!</h2>
          <p>Kund</p> */}

          <ul className="mt-8 space-y-2">
            <li>
              <button
                onClick={() => (setActiveTab("shop"), handleMenu())}
                className={`w-full  py-2 px-4 rounded-lg ${
                  activeTab === "shop"
                    ? "bg-green-600 text-white"
                    : "text-black"
                }`}
              >
                Beställning
              </button>
            </li>
            <li>
              <button
                onClick={() => (setActiveTab("kampanjer"), handleMenu())}
                className={`w-full  py-2 px-4 rounded-lg ${
                  activeTab === "kampanjer"
                    ? "bg-green-600 text-white"
                    : "text-black"
                }`}
              >
                Kampanjer
              </button>
            </li>
            <li>
              <button
                onClick={() => (setActiveTab("prislista"), handleMenu())}
                className={`w-full  py-2 px-4 rounded-lg ${
                  activeTab === "prislista"
                    ? "bg-green-600 text-white"
                    : "text-black"
                }`}
              >
                Prislista
              </button>
            </li>
            <li>
              <button
                onClick={() => (handleMenu(), handleLogout())}
                className={`px-4 w-full py-2 text-xs border bg-green-500 text-nowrap rounded-lg`}
              >
                Logga ut
              </button>
            </li>

            {/* Lägg till fler flikar här */}
          </ul>
        </div>
      </div>
    </>
  );
}
