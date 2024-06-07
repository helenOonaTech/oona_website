import { Swiper, SwiperSlide } from "swiper/react";
import { blueArrow, ourProjectImg } from "../../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import { useRef } from "react";
import ProductSlideDetails from "./ProductSlideDetails";
import SliderArrow from "../elements/SliderArrow";
function OurProjects() {
  const swiperRef = useRef();
  const productsData = [
    {
      id: 1,
      title: " Oona - HR Pulse",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo consequat.    Duis aute irure dolor in reprehenderit in voluptate velit   esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui   officia deserunt mollit anim id est laborum.",
      buttonText: "View case study",
    },
    {
      id: 2,
      title: " Oona - HR Pulse",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo consequat.    Duis aute irure dolor in reprehenderit in voluptate velit   esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui   officia deserunt mollit anim id est laborum.",
      buttonText: "View case study",
    },
    {
      id: 3,
      title: " Oona - HR Pulse",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo consequat.    Duis aute irure dolor in reprehenderit in voluptate velit   esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui   officia deserunt mollit anim id est laborum.",
      buttonText: "View case study",
    },
  ];
  return (
    <section className="our_projects md:pt-16 pt-10 md:pb-10 pb-4  relative">
      <section className="custom_container">
        {/* <div data-aos="fade-right"> */}
        <div className="text-center">
          <h2 className="text-[#202020] text-[22px] font-bold">Our Projects</h2>
          <p className="text-base font-normal text-[#767676] md:w-[50%] leading-6 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </div>
        {/* </div> */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-8 justify-between py-0 project_slider relative">
            {/* <div data-aos="fade-right"> */}
            <div className="w-[50%] md:block hidden">
              <img src={ourProjectImg} alt="" className="" />
            </div>
            {/* </div> */}
            {/* <div data-aos="fade-left"> */}
            <div className="swiper md:w-[50%] w-full relative">
              <Swiper
                // navigation={true}
                pagination={{
                  dynamicBullets: true,
                }}
                className="mySwiper"
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {productsData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <ProductSlideDetails
                        title={item.title}
                        description={item.description}
                        buttonText={item.buttonText}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="flex items-center gap-4 justify-end relative md:bottom-14 bottom-12 z-[100] w-fit ml-auto right-0">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper"
                >
                  <img src={blueArrow} alt="" className="rotate-180" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper"
                >
                  <img src={blueArrow} alt="" className="" />
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurProjects;
