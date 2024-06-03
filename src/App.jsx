import { Route, Routes } from "react-router-dom";
import "./App.css";
import Career from "./pages/Career";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
