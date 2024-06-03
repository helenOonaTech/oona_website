import {
  facebookBorder,
  instagramBorder,
  linkedBorder,
  torkImg,
} from "../../assets";
import { Link } from "react-router-dom";
import Arrow from "../elements/Arrow";

function MemberCard({
  active,
  name,
  img,
  description,
  setActive,
  activeId,
  color,
  position,
  swiperRefs,
}) {
  return (
    <>
      {active ? (
        <section className="member_card w-[500px] md:h-[263px] relative text-left  py-4 px-6 transition-all">
          <div className="flex gap-5 transition-all">
            <div
              className={`${color} transition-all w-fit px-1 relative -top-[80px]`}
            >
              <img
                src={img}
                alt="tork"
                width={143}
                height={151}
                className="w-[143px] h-[151px]"
              />
            </div>
            <div className="text-left transition-all">
              <h3 className="text-[22px] font-bold text-[#202020]">{name}</h3>
              <span className="text-[#767676] text-base font-normal">
                {position}
              </span>
            </div>
          </div>
          <p className="text-[#918C8C] transition-all text-sm font-normal leading-[23px] -mt-[66px]">
            {description}
          </p>
          <div className="flex items-center gap-4 mt-6 transition-all">
            <Link
              to="#"
              className="bg-[#F2F4F7] transition-all rounded-full p-3 w-9 h-9 flex items-center justify-center"
            >
              <img src={facebookBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="bg-[#F2F4F7] rounded-full p-3 w-9 h-9 flex items-center justify-center"
            >
              <img src={instagramBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="bg-[#F2F4F7] rounded-full p-3 w-9 h-9 flex items-center justify-center"
            >
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-[1px] transition-all absolute -bottom-3 right-10">
            <button
              className={`right_arrow -rotate-180 bg-[#00A7E1] px-5 py-[6px] rounded-r-3xl ${
                activeId == 0 && "opacity-15 cursor-not-allowed"
              }`}
              // onClick={() => activeId > 1 && setActive(+activeId - 1)}
              onClick={() => activeId > 0 && swiperRefs.current?.slidePrev()}
            >
              {" "}
              <Arrow color="#FFF" />
            </button>
            <button
              className={`left_arrow bg-[#00A7E1]  px-5 py-[6px] rounded-r-3xl ${
                activeId == 2 && "opacity-15 cursor-not-allowed"
              }`}
              // onClick={() => activeId < 3 && setActive(+activeId + 1)}
              onClick={() => activeId < 3 && swiperRefs.current?.slideNext()}
            >
              <Arrow color="#FFF" />
            </button>
          </div>
        </section>
      ) : (
        <div className={`rounded-full ${color} w-fit overflow-hidden`}>
          <img src={img} alt={name} width={120} height={120} />
        </div>
      )}
    </>
  );
}

export default MemberCard;
