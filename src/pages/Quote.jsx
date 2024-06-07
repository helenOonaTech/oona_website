import QuoteForm from "../components/Quote/QuoteForm";
import QuoteLanding from "../components/Quote/QuoteLanding";
import Footer from "../components/shared/Footer";

function Quote({ useLang, setUsedLang, direction }) {
  return (
    <section className=" overflow-hidden" dir={`${direction ? "ltr" : "rtl"}`}>
      <QuoteLanding setUsedLang={setUsedLang} useLang={useLang} />
      <div data-aos="fade-up" data-aos-duration="1500">
        <QuoteForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Footer />
      </div>
    </section>
  );
}

export default Quote;
