import HomeHeader from "./header/HomeHeader";
import Reveal from "@/components/animation/Reveal";
import WhoIam from "./presentation/WhoIam";
import Projects from "./project/projects";

interface HomepageProps {}

const Homepage = ({}) => {
  return (
    <>
      <HomeHeader />
      <div className="my-10 w-full max-w-6xl px-5 mx-auto space-y-32">
        <WhoIam />
        <Projects />
      </div>
    </>
  );
};

export default Homepage;
