import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  arabicIcon,
  englishIcon,
  facebook,
  facebookBorder,
  instagramBorder,
  linkedBorder,
  logo,
} from "../../assets";
import Email from "../elements/Email";
import Path from "../elements/Path";
import Phone from "../elements/Phone";
import { languages } from "../../translate";

function Header({ light = true, setUsedLang, useLang }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [languageFlag, setLangFlag] = useState(englishIcon);
  const [language, setLang] = useState(
    localStorage.getItem("language") === "EN" ? "English" : "العربية"
  );
  const [languageMenu, setLangMenu] = useState(false);
  const [menuSideBar, setMenu] = useState(false);

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
        <div className="flex md:items-center gap-2 md:gap-4 flex-col md:flex-row">
          <div className="navbar_email flex items-center gap-2">
            <Email color={light ? "white" : "#202020"} />
            <span
              className={`${
                light ? "text-white" : "text-black"
              } font-normal md:text-xs text-xs`}
            >
              Info@oonatech.net
            </span>
          </div>
          <div className="navbar_phone flex items-center gap-2">
            <Phone color={light ? "white" : "#202020"} />
            <span
              className={`${
                light ? "text-white" : "text-black"
              } font-normal md:text-xs text-xs`}
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
                localStorage.setItem("language", "EN");
                setUsedLang(languages.english);
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
                localStorage.setItem("language", "AR");
                setUsedLang(languages.arabic);
              }}
            >
              العربية
            </li>
          </ul>
          {/* )} */}
        </div>
      </div>
      <div className="px-[8%] flex items-center justify-between md:pt-3 pt-3">
        <img
          src={logo}
          alt="Oona Logo"
          width={117}
          className="md:w-[117px] mr-3 w-[100px]"
        />

        <div className="mt-4 md:flex hidden  flex-col md:mt-0 md:flex-row gap-6 md:text-sm md:!font-normal items-center ">
          <Link
            to="/"
            className={` ${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${
              pathname === "/" && "active_nav"
            }`}
          >
            {useLang?.navigations[0]}
          </Link>
          <Link
            className={`${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${
              pathname === "/products" && "active_nav"
            }`}
            to="/products"
          >
            {useLang?.navigations[1]}
          </Link>
          <Link
            className={`${
              light ? "text-white" : "text-[#202020]"
            } font-normal text-xs header-nav ${
              pathname === "/career" && "active_nav"
            }`}
            to="/career"
          >
            {useLang?.navigations[2]}
          </Link>

          <div className="buttonBox ">
            <button className="button11 transition-all duration-300">
              <Link
                className={` transition-all duration-300 ${
                  light ? "text-white" : "text-[#202020]"
                } border  ${
                  light ? "border-white" : "border-[#D8D8D8]"
                } rounded-[30px] font-normal text-xs py-2 px-4 ${
                  pathname === "/quote" && "!border-[#15c1fa] !text-[#15c1fa]"
                }`}
                to="/quote"
              >
                {useLang?.navigations[3]}
              </Link>
            </button>
          </div>
        </div>
        <button
          className="md:hidden flex flex-col items-center gap-1 mb-2 outline-none"
          onClick={() => setMenu(!menuSideBar)}
        >
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
        </button>
      </div>
      <div
        className={`side_modal overflow-hidden ${
          menuSideBar ? "w-[280px] right-0" : "w-[0] -right-20"
        } fixed  top-0  bg-white h-full z-[100] py-4 duration-[0.7s] px-7 `}
      >
        <button
          onClick={() => setMenu(!menuSideBar)}
          className="relative ml-3 mt-2"
        >
          <span
            className={`bg-[#202020] w-[2px] h-4 rounded-lg inline-block -rotate-45`}
          ></span>
          <span
            className={`bg-[#202020] w-[2px] h-4  rounded-lg inline-block rotate-45 absolute left-0 top-0`}
          ></span>
        </button>
        <div className="mt-4 flex   flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:!font-normal items-center gap-4 px-6 text-center">
          <Link
            to="/"
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/" && "active"
            }`}
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            className={`text-[#202020] pb-3 font-normal border-b  w-full border-[#d6d6d6] text-sm header-nav ${
              pathname === "/products" && "active"
            }`}
            onClick={() => setMenu(false)}
            to="/products"
          >
            Our Products
          </Link>
          <Link
            className={`text-[#202020] pb-3 font-normal border-b  w-full border-[#d6d6d6] text-sm header-nav ${
              pathname === "/career" && "active"
            }`}
            to="/career"
            onClick={() => setMenu(false)}
          >
            Career
          </Link>
          <Link
            className={`text-[#202020] mt-3 border  border-[#D8D8D8]
             rounded-[30px] font-normal text-sm py-2 px-8 `}
            to="/quote"
            onClick={() => setMenu(false)}
          >
            Request A Quote
          </Link>
        </div>
        <div className="text-center">
          <h3 className="font-medium mt-8">ContactUs</h3>
          <div className="flex items-center gap-4 w-fit mt-4 mx-auto">
            <Link
              to="#"
              className={` p-2 border  border-[#D9D9D9]  rounded-full flex items-center justify-center w-[36px] h-[36px]`}
            >
              <img src={facebookBorder} alt="" />
            </Link>
            <Link
              to="#"
              className={` p-2 border border-[#D9D9D9]  rounded-full flex items-center justify-center w-[36px] h-[36px]`}
            >
              <img src={instagramBorder} alt="" />
            </Link>
            <Link
              to="#"
              className={` p-2 border border-[#D9D9D9]  rounded-full flex items-center justify-center w-[36px] h-[36px]`}
            >
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
