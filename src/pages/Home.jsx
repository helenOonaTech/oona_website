import HowTo from "../components/Home/HowTo";
import Landing from "../components/Home/Landing";
import OurProjects from "../components/Home/OurProjects";
import SayHi from "../components/Home/SayHi";
import TeamMembers from "../components/Home/TeamMembers";
import Footer from "../components/shared/Footer";

function Home() {
  return (
    <section className="relative">
      <Landing />
      <OurProjects />
      <HowTo />
      <TeamMembers />
      <SayHi />
      <Footer />
    </section>
  );
}

export default Home;
