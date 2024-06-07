import { Link } from "react-router-dom";
import HowTo from "../components/Home/HowTo";
import Landing from "../components/Home/Landing";
import OurProjects from "../components/Home/OurProjects";
import SayHi from "../components/Home/SayHi";
import TeamMembers from "../components/Home/TeamMembers";
import Footer from "../components/shared/Footer";

function Home({ useLang, setUsedLang, direction }) {
  console.log(useLang);
  return (
    <section className="relative overflow-hidden">
      <div dir={`${direction ? "ltr" : "rtl"}`}>
        <Landing setUsedLang={setUsedLang} useLang={useLang} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <OurProjects />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <HowTo />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" id="team">
        <TeamMembers />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" id="sayHi">
        <SayHi />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Footer />
      </div>
    </section>
  );
}

export default Home;
