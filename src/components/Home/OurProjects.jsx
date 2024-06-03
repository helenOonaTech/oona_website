import { blueArrow, ourProjectImg } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";
function OurProjects() {
  const swiperRef = useRef();
  return (
    <section className="our_projects pt-16 pb-10  relative">
      <section className="custom_container">
        <div className="text-center">
          <h2 className="text-[#202020] text-[22px] font-bold">Our Projects</h2>
          <p className="text-base font-normal text-[#767676] w-[50%] leading-6 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </div>
        <div className="flex items-center gap-8 justify-between py-0 project_slider relative">
          <div className="w-[50%]">
            <img src={ourProjectImg} alt="" className="" />
          </div>
          <div className="swiper w-[50%] relative">
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
              <SwiperSlide>
                <div className="text-left py-11">
                  <h1 className="text-[#00A7E1] font-bold mb-3 text-4xl">
                    Oona - HR Pulse
                  </h1>
                  <p className="text-lg text-[#202020] font-normal mb-8 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Link
                    className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal text-xs py-3 px-16 mt-5 `}
                    to="#"
                  >
                    View case study
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left py-11">
                  <h1 className="text-[#00A7E1] font-bold mb-3 text-4xl">
                    Oona - HR Pulse
                  </h1>
                  <p className="text-lg text-[#202020] font-normal mb-8 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Link
                    className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal text-xs py-3 px-16 mt-5 `}
                    to="#"
                  >
                    View case study
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left py-11">
                  <h1 className="text-[#00A7E1] font-bold mb-3 text-4xl">
                    Oona - HR Pulse
                  </h1>
                  <p className="text-[17px] text-[#202020] font-normal mb-8 leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Link
                    className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal text-xs py-3 px-16 mt-5 `}
                    to="#"
                  >
                    View case study
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="flex items-center gap-4 justify-end relative bottom-20 z-[100] right-0">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-white w-[37px] h-[37px] rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper"
              >
                <img src={blueArrow} alt="" className="rotate-180" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-white w-[37px] h-[37px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper"
              >
                <img src={blueArrow} alt="" className="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurProjects;
