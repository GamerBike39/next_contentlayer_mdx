"use client";
import AnimatedTextCharacter from "@/components/animation/text-animation/letter-by-letter/AnimatedTextCharacters";
import AnimatedTextWord from "@/components/animation/text-animation/letter-by-letter/AnimatedTextWord";
import CursorGradient from "@/components/cursorGradient/CursorGradient";
import LikeButton from "@/components/ui/Sounds/clickerSound/clickerSound";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import AccordionImg from "@/components/ui/accordionImg/AccordionImg";
import BoxSpecialWord from "@/components/ui/specialWords/BoxSpecialWord";
import RedLine from "@/components/ui/specialWords/RedLine";
import UnderlineVagueSvg from "@/components/ui/specialWords/Underline_Vague";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { Luckiest_GuyFont } from "@/utils/fonts";
import HomeHeader from "./header/HomeHeader";

interface HomepageProps {}

const Homepage = ({}) => {
  const { height, width } = useViewportSize();

  return (
    <>
      <HomeHeader />
      <div className="my-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`text-8xl font-bold ${Luckiest_GuyFont.className} `}>
            Hello World
          </h1>
          <p className="text-2xl">{/* Viewport size: {width}x{height} */}d</p>
          <UnderlineVagueSvg text="hello world comment ça va ?" />
        </div>
        <AnimatedTextWord text="hello world sdqd" />
        <AnimatedTextCharacter text="cqqcqc sc q scqscqs cqscq scq scqs cq scqscqscq sc q s q  " />

        <p className="mt-5">
          Comment ça va ? <RedLine text="hello world" /> t'en penses quoi ?
        </p>
        <div className="my-10">
          <SVGHoverAnimation text="coucou" />
        </div>
        <div className="h-10 ">
          <p>
            comment ça va ? <BoxSpecialWord text="hello world" /> c'est cool ce
            que tu fais, <BoxSpecialWord text="Gamerbike" /> , c'est vraiment
            intéressant, <BoxSpecialWord text="Gamerbike" /> Mais dis moi c'est
            quoi cette <UnderlineVagueSvg text="magie" />
          </p>
        </div>
        <div className="my-20">
          <LikeButton />
        </div>
        <CursorGradient>
          <AccordionImg />
        </CursorGradient>
      </div>
    </>
  );
};

export default Homepage;
