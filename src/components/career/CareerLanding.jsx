import React from "react";
import Header from "../shared/Header";

function CareerLanding({ setUsedLang, useLang }) {
  return (
    <section className="quote_section relative mb-6">
      <Header light={false} setUsedLang={setUsedLang} useLang={useLang} />
      <section className="text-center custom_container py-7">
        <h1 className="md:text-[40px] text-[30px] font-bold text-[#202020]  leading-[49px] mx-auto">
          Meet the team
        </h1>
        <p className="text-[#787878] font-normal text-sm mt-2 md:w-[44%] mx-auto ">
          These are the creative talents who are leading a generation of
          innovation and technology! Meet the people behind some of the greatest
          startups and biggest projects in the region!
        </p>
      </section>
    </section>
  );
}

export default CareerLanding;
