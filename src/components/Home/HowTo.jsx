import { Link } from "react-router-dom";

function HowTo() {
  return (
    <section className="how_to text-center py-14 ">
      <section className="custom_container">
        <h1 className="font-bold text-[62px] text-white mb-5">Our How-To!</h1>
        <p className="text-white !font-normal text-lg leading-[26px] w-[45%] mx-auto text-center">
          Our secret sauce? Agile-Scrum. We crank out functioning apps and
          websites using a minimum viable product approach, ensuring that your
          business is always moving forward.
        </p>
        <Link
          className={`text-white border border-white rounded-[30px] font-normal text-xs py-4 px-20 mt-11 block w-fit mx-auto`}
          to="#"
        >
          Explore our process
        </Link>
      </section>
    </section>
  );
}

export default HowTo;
