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
    <section className="footer pt-14 pb-5 w-full">
      <section className="custom_container">
        <section className="flex items-start justify-between w-full">
          <Link to="#">
            <img src={darkLogo} alt="" />
          </Link>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-3">Social</h4>
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2">
              <li>
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
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Our Products</Link>
              </li>
              <li>
                <Link to="">Our Team</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
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
                className="border-none outline-none bg-[#EEEEEE] placeholder:text-[#7E7E7E
                ] px-3 py-3 w-full"
              />
              <button className="border border-[#717171] text-[#272727] bg-white text-sm font-normal py-3 px-8">
                Register
              </button>
            </form>
          </div>
          <div className="text-center">
            <h4 className="text-[#00A7E1] font-bold text-lg mb-2">
              Fly me high
            </h4>
            <button
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
              }
            >
              <img src={flyMe} alt="" />
            </button>
          </div>
        </section>
        <section className="flex items-center justify-between w-full pt-4 mt-7 border-t border-[#D8D8D8]">
          <p className="text-[#5E5E5E] text-sm font-normal">
            Oona tech@2024 | All right reserved
          </p>
          <div className="flex items-center gap-12">
            <Link to="#">
              <img src={facebookBorder} alt="" />
            </Link>
            <Link to="#">
              <img src={instagramBorder} alt="" />
            </Link>
            <Link to="#">
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Footer;
