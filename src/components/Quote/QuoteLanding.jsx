import React from "react";
import Header from "../shared/Header";

function QuoteLanding({ setUsedLang, useLang }) {
  return (
    <section className="quote_section relative">
      <Header light={false} setUsedLang={setUsedLang} useLang={useLang} />
      <section className="text-center custom_container py-7">
        <h1 className="md:text-[40px] text-[24px] font-bold text-[#202020] md:w-[50%] md:leading-[49px] mx-auto w-full">
          Get started with a Essential HR+ product tour
        </h1>
        <p className="text-[#787878] font-normal text-sm mt-2 md:w-[50%] mx-auto md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </section>
    </section>
  );
}

export default QuoteLanding;
