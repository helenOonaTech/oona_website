import { Link } from "react-router-dom";
import {
  arrow,
  facebook,
  facebookBorder,
  instagram,
  instagramBorder,
  linkedBorder,
  linkedin,
} from "../../assets";
import ContactArrow from "./ContactArrow";

function ContactUs({ light, top }) {
  return (
    <section
      className={`absolute z-10 ${top} -left-[95px] flex items-center gap-6 rotate-[-90deg]`}
    >
      <span
        className={`text-lg font-normal ${
          light ? "text-white" : "text-[#202020]"
        }`}
      >
        Contact Us
      </span>
      <div className="rotate-[90deg]">
        <ContactArrow color={light ? "#EAEAEA" : "#202020"} />
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="#"
          className={`${light ? "rotate-[90deg]" : ""} p-2 border  ${
            light ? "border-white" : "border-[#D9D9D9]"
          } rounded-full flex items-center justify-center w-[36px] h-[36px]`}
        >
          <img src={light ? facebook : facebookBorder} alt="" />
        </Link>
        <Link
          to="#"
          className={`${light ? "rotate-[90deg]" : ""} p-2 border ${
            light ? "border-white" : "border-[#D9D9D9]"
          } rounded-full flex items-center justify-center w-[36px] h-[36px]`}
        >
          <img src={light ? instagram : instagramBorder} alt="" />
        </Link>
        <Link
          to="#"
          className={`${light ? "rotate-[90deg]" : ""} p-2 border ${
            light ? "border-white" : "border-[#D9D9D9]"
          } rounded-full flex items-center justify-center w-[36px] h-[36px]`}
        >
          <img src={light ? linkedin : linkedBorder} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default ContactUs;
