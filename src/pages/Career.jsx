import CareerLanding from "../components/career/CareerLanding";
import NoCareers from "../components/career/NoCareers";
import Footer from "../components/shared/Footer";

function Career({ useLang, setUsedLang, direction }) {
  return (
    <section className=" overflow-hidden" dir={`${direction ? "ltr" : "rtl"}`}>
      <CareerLanding setUsedLang={setUsedLang} useLang={useLang} />
      <div data-aos="fade-up" data-aos-duration="1500">
        {" "}
        <NoCareers />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Footer />
      </div>
    </section>
  );
}

export default Career;
