import TextScaleDifform from "@/components/animation/text-animation/scaleDifform/TextScaleDifform";
import Pattern from "./pattern2";

const HomeHeader = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen  max-w-6xl mx-auto flex items-center">
      <div className="px-5 justify-start w-full">
        <TextScaleDifform text="Salut" className="flex text-clamp4xl" />

        <h1 className="text-clamp3xl">Bienvenue sur mon BlogFolio</h1>
      </div>
      <Pattern className="absolute scale-[3] opacity-25 lg:opacity-100 md:scale-100 -z-10 top-0 md:-right-36 h-full w-full" />
    </div>
  );
};

export default HomeHeader;
