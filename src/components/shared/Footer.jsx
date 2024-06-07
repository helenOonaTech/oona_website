import { Link } from "react-router-dom";
import {
  darkLogo,
  facebookBorder,
  flyMe,
  instagramBorder,
  linkedBorder,
} from "../../assets";

function Footer() {
  return (
    <section className="footer md:pt-14 pt-8 pb-4 w-full">
      <section className="custom_container">
        <section className="flex md:flex-row flex-col md:gap-0 gap-5 items-start justify-between w-full">
          <Link
            className="md:ml-0 -ml-[14px]"
            to="/"
            onClick={() =>
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
            }
          >
            <img src={darkLogo} alt="" />
          </Link>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-3">Social</h4>
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2 footer_links">
              <li className="">
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">Instagram</Link>
              </li>
              <li>
                <Link to="">LinkedIn</Link>
              </li>
              <li>
                <Link to="">XING</Link>
              </li>
              <li>
                <Link to="">Tiktok</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-3">Menu</h4>
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2 footer_links">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  Our Products
                </Link>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-2">
              NewsLetter
            </h4>
            <p className="font-normal text-base text-[#A7A5A5]">
              Don't want to miss the latest shizzle? So register now.
            </p>
            <form action="" className="flex w-full mt-6">
              <input
                type="email"
                placeholder="Email Address"
                className="border-l border-t border-b transition-all outline-none bg-[#EEEEEE] placeholder:text-[#7E7E7E
                ] px-3 py-3 w-full focus:border-[#234062]"
              />
              <button className="border-none !flex items-center justify-center text-[#272727] bg-white text-sm font-normal py-3 px-8 animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </button>
            </form>
          </div>
          <div className="text-center md:mx-0 mx-auto md:w-fit w-full">
            <h4 className="text-[#00A7E1] font-bold text-lg mb-2 md:mt-0 mt-3">
              Fly me high
            </h4>
            <button
              className="fly_me_rocket "
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
              }
            >
              <img src={flyMe} alt="" className="" />
            </button>
          </div>
        </section>
        <section className="flex items-center md:flex-row flex-col md:gap-0 gap-5 justify-between w-full pt-2 md:mt-7 mt-1 border-t border-[#D8D8D8]">
          <p className="text-[#5E5E5E] text-sm font-normal">
            Oona tech@2024 | All right reserved
          </p>
          <div className="flex items-center gap-5 ">
            <Link
              to="#"
              className="hover:border hover:border-1 hover:border-gray-400  transition-all md:w-9 md:h-9 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white"
            >
              <img src={facebookBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="hover:border hover:border-1 hover:border-gray-400  transition-all md:w-9 md:h-9 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white"
            >
              <img src={instagramBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="hover:border hover:border-1 hover:border-gray-400  transition-all md:w-9 md:h-9 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white"
            >
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Footer;
