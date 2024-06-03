import { useState } from "react";
import PriceCard from "./PriceCard";

function PricePlan() {
  const [active, setActive] = useState(1);
  return (
    <section className="pricing_plan py-10">
      <section className="custom_container text-center">
        <h1 className="text-[40px] font-normal text-[#202020]">
          <b>Pricing</b> Plan
        </h1>
        <p className="font-normal text-sm text-[#787878] mx-auto mt-2 md:w-[50%] leading-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="switch_price bg-[#FAFAFA] text-center flex items-center justify-center gap-16 font-normal text-[#333232] text-base py-3 mt-4">
          <button
            className={` text-base relative px-2 ${
              active == 1 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(1)}
          >
            In Promise
          </button>
          <button
            className={` text-base relative px-2 ${
              active == 2 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(2)}
          >
            Cloud
          </button>
          <button
            className={` text-base relative px-2 ${
              active == 3 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(3)}
          >
            Resale
          </button>
        </div>
        <div className="cards flex gap-6 mt-10">
          {active == 1 ? (
            <>
              {" "}
              <PriceCard />
              <PriceCard active />
              <PriceCard />
            </>
          ) : active == 2 ? (
            <>
              {" "}
              {/* <PriceCard /> */}
              <PriceCard active />
              <PriceCard />
            </>
          ) : (
            <>
              {" "}
              <PriceCard />
              <PriceCard active />
              {/* <PriceCard /> */}
            </>
          )}
        </div>
      </section>
    </section>
  );
}

export default PricePlan;
