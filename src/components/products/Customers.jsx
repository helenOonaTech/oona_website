// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import CustomersRate from "./CustomersRate";
import { useRef } from "react";
import { blueArrow } from "../../assets";
import SliderArrow from "../elements/SliderArrow";

function Customers() {
  const swiperRef = useRef();
  const swiperRef2 = useRef();
  return (
    <section className="customers py-6 mb-8">
      <section className="custom_container text-center overflow-hidden relative">
        <h1 className="text-[40px] font-normal text-[#202020]">
          <b>customer </b> satisfaction
        </h1>
        <p className="font-normal text-sm text-[#787878] mx-auto mt-2 mb-20 md:w-[50%] leading-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <section className=" bg-[#F5F5F5] relative">
          <>
            <div
              className="absolute  md:-top-16 -top-12 customer_services"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                // loop={true}
                initialSlide={2}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 6.5,
                }}
                // pagination={{ el: ".swiper-pagination", clickable: true }}
                // navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>

                {/* <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                  <div className="swiper-pagination"></div>
                </div> */}
              </Swiper>
            </div>
            <div className="md:pt-32 pt-20">
              <Swiper
                initialSlide={2}
                onBeforeInit={(swiper) => {
                  swiperRef2.current = swiper;
                }}
                // navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CustomersRate />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomersRate />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomersRate />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomersRate />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomersRate />
                </SwiperSlide>
              </Swiper>
            </div>
          </>
          <div className="flex  items-center justify-between w-full relative md:bottom-[120px] bottom-[180px]  z-[100] ml-auto right-0">
            <button
              onClick={() => {
                swiperRef.current?.slidePrev();
                swiperRef2.current?.slidePrev();
              }}
              className="bg-[#00A7E1] w-[37px] h-[37px] rotate-180 rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper -ml-5"
            >
              <SliderArrow color="#fff" />
            </button>
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
                swiperRef2.current?.slideNext();
              }}
              className="bg-[#00A7E1] w-[37px] h-[37px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper -mr-5"
            >
              <SliderArrow color="#fff" />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Customers;
