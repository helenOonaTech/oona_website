import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {
  arabicIcon,
  emailIcon,
  englishIcon,
  logo,
  path,
  phoneIcon,
} from "../../assets";
import { useEffect, useState } from "react";
import Email from "../elements/Email";
import Phone from "../elements/Phone";
import Path from "../elements/Path";

function Header({ light = true }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [languageFlag, setLangFlag] = useState(englishIcon);
  const [language, setLang] = useState("English");
  const [languageMenu, setLangMenu] = useState(false);

  const handleMouseEnter = () => {
    setLangMenu(true);
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      const targ = e.target.id;
      if (targ !== "change_lang_menu") {
        setLangMenu(false);
      } else {
        setLangMenu(true);
      }
    };
    document.addEventListener("click", (e) => handleOutSideClick(e));

    return () => {
      document.removeEventListener("click", (e) => handleOutSideClick(e));
    };
  }, []);
  return (
    <div>
      <div
        className={`flex items-center justify-between border-b px-[8%] py-3 w-full mb-2 ${
          light ? "border-[#606060] " : "border-[#E1E1E1]"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="navbar_email flex items-center gap-2">
            <Email color={light ? "white" : "#202020"} />
            <span
              className={`${
                light ? "text-white" : "text-black"
              } font-normal text-xs`}
            >
              Info@oonatech.net
            </span>
          </div>
          <div className="navbar_phone flex items-center gap-2">
            <Phone color={light ? "white" : "#202020"} />
            <span
              className={`${
                light ? "text-white" : "text-black"
              } font-normal text-xs`}
            >
              +971 50 351 256552
            </span>
          </div>
        </div>
        <div className="flex items-center gap-0 relative change_lang_menu">
          <div className="flex items-center gap-2">
            {" "}
            <img src={languageFlag} alt="" width={24} />
            <button
              className="flex items-center gap-3"
              id="change_lang_menu"
              onClick={handleMouseEnter}
            >
              <span
                id="change_lang_menu"
                className={`text-xs ${
                  light ? "text-white" : "text-black"
                } font-normal`}
              >
                {language}
              </span>
              <Path color={light ? "white" : "black"} />
            </button>
          </div>
          {/* {languageMenu && ( */}
          <ul
            className={`absolute bg-white transition-all px-2 py-2 top-6 right-0 w-[150px] rounded-[8px] lang_menu ${
              languageMenu ? "popup_effect z-[100]" : "hidden"
            }`}
          >
            <li
              className="text-xs transition-all border-b py-2 px-2 cursor-pointer hover:bg-slate-200 hover:rounded-md"
              onClick={() => {
                setLang("English");
                setLangFlag(englishIcon);
                setLangMenu(false);
              }}
            >
              English
            </li>
            <li
              className="text-xs transition-all hover:rounded-md py-2 px-2 cursor-pointer hover:bg-slate-200"
              onClick={() => {
                setLang("العربية");
                setLangFlag(arabicIcon);
                setLangMenu(false);
              }}
            >
              العربية
            </li>
          </ul>
          {/* )} */}
        </div>
      </div>
      <div className="px-[8%] flex items-center justify-between pt-1">
        <img src={logo} className="mr-3" alt="Oona Logo" width={117} />

        <div className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:!font-normal items-center">
          <Link
            to="/"
            className={` ${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${pathname === "/" && "active"}`}
          >
            Home
          </Link>
          <Link
            className={`${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${pathname === "/" && "active"}`}
            to="/products"
          >
            Our Products
          </Link>
          <Link
            className={`${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${pathname === "/" && "active"}`}
            to="/career"
          >
            Career
          </Link>
          <Link
            className={`${light ? "text-white" : "text-[#202020]"} border  ${
              light ? "border-white" : "border-[#D8D8D8]"
            } rounded-[30px] font-normal text-xs py-2 px-4 ${
              pathname === "/" && "active"
            }`}
            to="/quote"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
