import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={
        !nav
          ? "w-full h-[50px] bg-amarillo fixed top-0 z-50"
          : "bg-black w-full h-[50px] fixed top-0 z-50"
      }
    >
      <div className="px-2 flex justify-around items-center w-full h-full text-xs">
        <a
          onClick={() => navigate("/")}
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
          ></img>
        </a>

        <div className="hidden md:flex text-black font-libre">
          <ul className="hidden md:flex">
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/daniel_bedoya")}
                className="hover:text-blanco transition-all duration-700"
                href="/daniel_bedoya"
                aria-label="tatuajes realizados en ojoxojo tattoo studio"
              >
                GALERIA
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                className="hover:text-blanco transition-all duration-700"
                href="#contacto"
                aria-label="ojoxojo tattoo studio contacto"
              >
                CONTACTO
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
              onClick={() => navigate("/#patrocinadores")}
                className="hover:text-blanco transition-all duration-700"
                href="/#patrocinadores"
                aria-label="ojoxojo tattoo studio patrocinadores"
              >
                PATROCINADORES
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden ml-16 text-black" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5 text-blanco" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-black text-blanco text-center w-full h-screen px-8 py-12 rounded-b-xl font-libre"
        }
      >
        <li className="pr-4 relative group">
          <a
            onClick={() => navigate("/daniel_bedoya")}
            aria-label="tatuajes realizados en ojoxojo tattoo studio"
            href="/daniel_bedoya"
          >
            GALERIA
          </a>
        </li>
        <li className="pr-4 relative group">
          <a href="#contacto" aria-label="ojoxojo tattoo studio contacto">
            CONTACTO
          </a>
        </li>
        <li className="pr-4 relative group">
          <a
            onClick={() => navigate("/#patrocinadores")}
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
