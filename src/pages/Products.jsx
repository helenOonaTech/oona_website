import Customers from "../components/products/Customers";
import PricePlan from "../components/products/PricePlan";
import ProductLanding from "../components/products/ProductLanding";
import Footer from "../components/shared/Footer";
function Products({ useLang, setUsedLang, direction }) {
  return (
    <section className=" overflow-hidden" dir={`${direction ? "ltr" : "rtl"}`}>
      <div data-aos="fade-up" data-aos-duration="1500">
        <ProductLanding setUsedLang={setUsedLang} useLang={useLang} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <PricePlan />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Customers />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Footer />
      </div>
    </section>
  );
}

export default Products;
