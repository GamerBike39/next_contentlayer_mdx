import HomeHeader from "./header/HomeHeader";
import WhoIam from "./presentation/WhoIam";
import Projects from "./project/projects";
import Image from "next/image";
import Container from "@/components/container/Container";

interface HomepageProps {}

const Homepage = ({}) => {
  return (
    <>
      <HomeHeader />
      {/* <div className="my-10 w-full max-w-6xl px-5 mx-auto space-y-32"> */}
      <div className="relative">
        <Image
          src="bg/roundpattern.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover -z-10 brightness-75 opacity-30"
        />
        <Image
          src={"blob/blob.svg"}
          alt=""
          sizes="100vw"
          width={300}
          height={300}
          className="absolute -top-40 -left-40 -z-10"
        />
        <Image
          src={"blob/blob2.svg"}
          alt=""
          sizes="100vw"
          width={300}
          height={300}
          className="absolute -bottom-20 -right-40 -z-10"
        />
        <Container className="py-20">
          <WhoIam />
        </Container>
      </div>
      <div className="relative">
        <Container>
          <Projects />
        </Container>
      </div>
      {/* </div> */}
    </>
  );
};

export default Homepage;
