import { Route, Routes } from "react-router-dom";
import "./App.css";
import Career from "./pages/Career";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Quote from "./pages/Quote";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { languages } from "./translate";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [useLang, setUsedLang] = useState(languages.english);
  const [direction, setDirection] = useState(
    localStorage.getItem("language") === "EN" ? true : false
  );
  useEffect(() => {
    const theLang = localStorage.getItem("language");
    console.log("sfd");
    if (theLang) {
      setUsedLang(theLang == "EN" ? languages.english : languages.arabic);
    } else {
      localStorage.setItem("language", "EN");
      setUsedLang(languages.english);
    }
  }, []);
  console.log("hallon");
  useEffect(() => {
    if (localStorage.getItem("language") === "EN") {
      setDirection(true);
    } else {
      setDirection(false);
    }
  }, [useLang]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              useLang={useLang}
              setUsedLang={setUsedLang}
              direction={direction}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              useLang={useLang}
              setUsedLang={setUsedLang}
              direction={direction}
            />
          }
        />
        <Route
          path="/quote"
          element={
            <Quote
              useLang={useLang}
              setUsedLang={setUsedLang}
              direction={direction}
            />
          }
        />
        <Route
          path="/career"
          element={
            <Career
              useLang={useLang}
              setUsedLang={setUsedLang}
              direction={direction}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
