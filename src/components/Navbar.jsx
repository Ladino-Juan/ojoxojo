import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };


  return (
    <div
      className={`w-full h-[50px] fixed top-0 z-50 ${
        nav ? "bg-black" : "bg-amarillo"
      }`}
    >
      <div className="px-2 flex justify-around items-center w-full h-full text-xs">
        <a
          onClick={() => {
            navigate("/");
            closeNav();
          }}
          href="/"
          aria-label="ojoxojo tattoo studio home"
        >
          <img
            className="w-[18px]"
            src={
              !nav
                ? "assets/ojoxojo_logo.webp"
                : "assets/ojoxojo_logo_white.webp"
            }
            alt="ojoxojo tattoo logo"
          />
        </a>

        <div className="hidden md:flex text-black font-libre">
          <ul className="md:flex">
            <li className="pr-4 relative group">
              <a
                onClick={() => {
                  navigate("/daniel_bedoya");
                  closeNav();
                }}
                className="hover:text-blanco cursor-pointer transition-all duration-700"
                aria-label="tatuajes realizados en ojoxojo tattoo studio"
              >
                GALERIA
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                href="#contacto"
                onClick={closeNav}
                className="hover:text-blanco transition-all duration-700"
                aria-label="ojoxojo tattoo studio contacto"
              >
                CONTACTO
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                onClick={() => {
                  navigate("/#patrocinadores");
                  closeNav();
                }}
                href="/#patrocinadores"
                className="hover:text-blanco transition-all duration-700"
                aria-label="ojoxojo tattoo studio patrocinadores"
              >
                PATROCINADORES
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden ml-16 text-black" onClick={toggleNav}>
          {nav ? <XIcon className="w-5 text-blanco" /> : <MenuIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={`${
          nav
            ? "absolute bg-black text-blanco text-center w-full h-screen px-8 py-12 rounded-b-xl font-libre"
            : "hidden"
        }`}
      >
        <li className="pr-4 relative group">
          <a
            onClick={() => {
              navigate("/daniel_bedoya");
              closeNav();
            }}
            aria-label="tatuajes realizados en ojoxojo tattoo studio"
          >
            GALERIA
          </a>
        </li>
        <li className="pr-4 relative group">
          <a
            onClick={closeNav}
            href="#contacto"
            aria-label="ojoxojo tattoo studio contacto"
          >
            CONTACTO
          </a>
        </li>
        <li className="pr-4 relative group">
          <a
            onClick={() => {
              navigate("/#patrocinadores");
              closeNav();
            }}
            href="/#patrocinadores"
            aria-label="ojoxojo tattoo studio patrocinadores"
          >
            PATROCINADORES
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
