import { ON } from "../../assets";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import ContactUs from "../elements/ContactUs";

function Landing({ setUsedLang, useLang }) {
  return (
    <section className="landing_section md:h-screen md:pb-0 pb-12 relative">
      <ContactUs light top="top-[70%]" useLang={useLang} />
      <Header setUsedLang={setUsedLang} useLang={useLang} />

      <section className="custom_container text-center">
        <div className="w-full flex items-center justify-center md:mt-8 mt-20 mb-5">
          <img src={ON} alt="" className="md:w-[33%] block w-[70%]" />
        </div>
        <div className="text-center flex flex-col items-center justify-center mb-9">
          <h1 className="font-bold md:text-[57px] text-[25px] text-white md:-mb-4">
            {useLang?.homeTitle[0]}
          </h1>
          <h1 className="font-bold md:text-[57px] text-[25px] text-white md:mb-0 mb-4">
            {useLang?.homeTitle[1]}
          </h1>
          <p className="text-base text-white font-normal leading-6 md:w-[50%]">
            {useLang?.homeTitle[2]}
          </p>
        </div>
        <div className="buttonBox ">
          <button className="button11 ">
            <a
              className={`text-white border transition-all duration-300 border-white rounded-[30px] font-normal text-xs py-3 px-16 md:mt-5 mt-8 `}
              href="#sayHi"
            >
              {useLang?.homeTitle[3]}
            </a>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Landing;
