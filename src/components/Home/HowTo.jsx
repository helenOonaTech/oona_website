import { Link } from "react-router-dom";

function HowTo() {
  return (
    <section className="how_to text-center py-14 ">
      <section className="custom_container">
        <h1 className="font-bold md:text-[62px] text-3xl text-white mb-5">
          Our How-To!
        </h1>
        <p className="text-white !font-normal md:text-lg  text-base leading-[26px] md:w-[45%] w-full mx-auto text-center">
          Our secret sauce? Agile-Scrum. We crank out functioning apps and
          websites using a minimum viable product approach, ensuring that your
          business is always moving forward.
        </p>
        {/* <Link
          className={`text-white border border-white rounded-[30px] font-normal text-xs py-4 px-20 mt-11 block w-fit mx-auto`}
          to="#"
        >
          Explore our process
        </Link> */}
        <div className="buttonBox ">
          <button className="button11 ">
            <Link
              className={`text-white border border-white rounded-[30px] font-normal text-xs py-4 px-20 mt-11 block w-fit mx-auto transition-all duration-300`}
              to="#"
            >
              Explore our process
            </Link>
          </button>
        </div>
      </section>
    </section>
  );
}

export default HowTo;
