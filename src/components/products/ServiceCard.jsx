import React from "react";

function ServiceCard({ img, title, description, borderColor }) {
  return (
    <div
      className={`service_card px-5 pt-4 pb-8 bg-white text-center border ${borderColor} md:w-[326px]`}
    >
      <img src={img} alt="" className="mx-auto mb-4" />
      <h3 className="text-base text-[#333232] font-bold mb-2">{title}</h3>
      <p className="text-[#787878] font-normal text-sm leading-[22px]">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
