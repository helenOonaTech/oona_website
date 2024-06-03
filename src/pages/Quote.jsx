import QuoteForm from "../components/Quote/QuoteForm";
import QuoteLanding from "../components/Quote/QuoteLanding";
import Footer from "../components/shared/Footer";

function Quote() {
  return (
    <section>
      <QuoteLanding />
      <QuoteForm />
      <Footer />
    </section>
  );
}

export default Quote;
