import { noCareer } from "../../assets";

function NoCareers() {
  return (
    <section className="custom_container text-center w-fit bg-white no_careers mb-12 pb-9  rounded-[15px]">
      <img src={noCareer} alt="" className="mx-auto -mt-3" />
      <p className="text-[#787878] text-lg font-normal">
        No vacancies  available for now....
      </p>
    </section>
  );
}

export default NoCareers;
