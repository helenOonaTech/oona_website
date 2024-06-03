import Customers from "../components/products/Customers";
import PricePlan from "../components/products/PricePlan";
import ProductLanding from "../components/products/ProductLanding";
import Footer from "../components/shared/Footer";
function Products() {
  return (
    <section>
      <ProductLanding />
      <PricePlan />
      <Customers />
      <Footer />
    </section>
  );
}

export default Products;
