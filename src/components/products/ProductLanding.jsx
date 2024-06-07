import {
  mainBG,
  productsLand,
  serviceImg_1,
  serviceImg_2,
  service_1,
  service_2,
  service_3,
} from "../../assets";
import ContactUs from "../elements/ContactUs";
import Header from "../shared/Header";
import ServiceCard from "./ServiceCard";

function ProductLanding({ setUsedLang, useLang }) {
  return (
    <section className="landingproducts_section relative">
      <ContactUs top="top-[44%]" useLang={useLang} />
      <Header light={false} setUsedLang={setUsedLang} useLang={useLang} />
      <section className="text-center custom_container md:pt-6 pt-7">
        <h1 className="md:text-[50px] text-3xl font-bold text-[#00A7E1] ">
          <span className="text-[#202020]">Oona</span> HR Pulse
        </h1>
        <p className="text-[#787878] font-normal text-sm mt-4 md:w-[50%] mx-auto mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <img src={productsLand} alt="" className=" md:h-[200px]" />
      </section>
      <section className=" displa_services md:py-9 pt-16 pb-6 relative">
        <section className="custom_container flex items-center md:flex-row flex-col md:gap-0 gap-5 justify-between ">
          {/* first column */}
          <div
            className="flex flex-col gap-2"
            // data-aos="flip-left"
            // data-aos-duration="1200"
          >
            <ServiceCard
              borderColor="border-[#FFE56D]"
              img={service_1}
              title={"Employee Self Service"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua labore et dolore magna aliqua"
              }
            />
            <img src={serviceImg_2} alt="" className="md:flex hidden" />
          </div>

          {/* second column  */}
          <div
          // data-aos="flip-right" data-aos-duration="1200"
          >
            <ServiceCard
              borderColor="border-[#00A7E1]"
              img={service_2}
              title={"Central Workforce Hub"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua labore et dolore magna aliqua"
              }
            />
          </div>
          {/* third column  */}
          <div
          className="flex flex-col gap-2 items-end"
          // data-aos="flip-left"
          // data-aos-duration="1200"
          >
            <img src={serviceImg_1} alt="" className="md:flex hidden" />
            <ServiceCard
              borderColor="border-[#FDD9CF]"
              img={service_3}
              title={"Attendance"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua labore et dolore magna aliqua"
              }
            />
          </div>
        </section>
      </section>
    </section>
  );
}

export default ProductLanding;
