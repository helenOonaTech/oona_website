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

function ProductLanding() {
  return (
    <section className="landingproducts_section relative">
      <ContactUs top="top-[44%]" />
      <Header light={false} />
      <section className="text-center custom_container">
        <h1 className="text-[50px] font-bold text-[#00A7E1]">
          <span className="text-[#202020]">Oona</span> HR Pulse
        </h1>
        <p className="text-[#787878] font-normal text-sm mt-2 md:w-[50%] mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <img src={productsLand} alt="" height={200} className=" h-[200px]" />
      </section>
      <section className=" displa_services py-9 relative">
        <section className="custom_container flex items-center justify-between ">
          {/* first column */}
          <div className="flex flex-col gap-2">
            <ServiceCard
              borderColor="border-[#FFE56D]"
              img={service_1}
              title={"Employee Self Service"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua labore et dolore magna aliqua"
              }
            />
            <img src={serviceImg_2} alt="" />
          </div>
          {/* second column  */}
          <div>
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
          <div className="flex flex-col gap-2 items-end">
            <img src={serviceImg_1} alt="" />
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
