import React from "react";
import { trueRight } from "../../assets";

function PriceCard({ active }) {
  return (
    <section className="pricing_card border border-[#E8E8E8] rounded-[15px] pt-3 pb-6 px-4 text-center">
      <h3 className="text-[40px] text-[#202020] font-bold flex items-center gap-1 justify-center">
        $99{" "}
        <span className="text-[20px] text-[#BFBFBF] font-normal">/month</span>
      </h3>
      <span className="text-sm font-bold text-[#202020] mt-7">
        10-100 users
      </span>
      <p className="text-[#787878] font-normal text-xs mt-3 pb-5 border-b border-[#E4E4E4]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="text-left">
        <h5 className="font-normal text-[#F26522] text-sm py-3">
          Essential HR +
        </h5>
        <ul className="mt-2">
          <li className="flex items-center gap-2 mb-4">
            <img src={trueRight} alt="" />{" "}
            <span className="text-[#333232] font-normal text-sm">
              Central workforce Hub
            </span>
          </li>
          <li className="flex items-center gap-2 mb-4">
            <img src={trueRight} alt="" />{" "}
            <span className="text-[#333232] font-normal text-sm">
              Employee Self Service
            </span>
          </li>
          <li className="flex items-center gap-2 mb-3">
            <img src={trueRight} alt="" />{" "}
            <span className="text-[#333232] font-normal text-sm">
              Attendance
            </span>
          </li>
        </ul>
      </div>
      <button
        className={` text-base font-bold mt-8 w-full py-3 rounded-[15px] border-[#00A7E1] border text-center ${
          active ? " text-white bg-[#00A7E1]" : " text-[#00A7E1] bg-white"
        }`}
      >
        Get Started
      </button>
    </section>
  );
}

export default PriceCard;
