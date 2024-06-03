import { ON } from "../../assets";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import ContactUs from "../elements/ContactUs";

function Landing() {
  return (
    <section className="landing_section relative">
      <ContactUs light top="top-[70%]" />
      <Header />
      <section className="custom_container text-center">
        <div className="w-full flex items-center justify-center mt-8 mb-5">
          <img src={ON} alt="" className="w-[35%] block" />
        </div>
        <div className="text-center flex flex-col items-center justify-center mb-9">
          <h1 className="font-bold text-[57px] text-white -mb-4">OONA-TECH</h1>
          <h1 className="font-bold text-[57px] text-white">
            EXPERTS OF MOMENTUM
          </h1>
          <p className="text-base text-white font-normal leading-6 w-[50%]">
            We are a team of specialists who customize our products according to
            your needs and to serve your business
          </p>
        </div>
        <Link
          className={`text-white border border-white rounded-[30px] font-normal text-xs py-3 px-16 mt-5 `}
          to="#"
        >
          Contact us
        </Link>
      </section>
    </section>
  );
}

export default Landing;
