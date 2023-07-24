"use client";
import LikeButton from "@/components/ui/Sounds/clickerSound/clickerSound";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import BoxSpecialWord from "@/components/ui/specialWords/BoxSpecialWord";
import CircleText from "@/components/ui/specialWords/CircleText";
import RedLine from "@/components/ui/specialWords/RedLine";
import UnderlineVagueSvg from "@/components/ui/specialWords/Underline_Vague";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { Luckiest_GuyFont } from "@/utils/fonts";

interface HomepageProps {}

const Homepage = ({}) => {
  const { height, width } = useViewportSize();

  return (
    <div className="my-10 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className={`text-8xl font-bold ${Luckiest_GuyFont.className} `}>
          Hello World
        </h1>
        <p className="text-2xl">
          Viewport size: {width}x{height}
        </p>
        <UnderlineVagueSvg text="hello world comment ça va ?" />
      </div>
      <CircleText text="hello ?" />

      <p className="mt-5">
        Comment ça va ? <RedLine text="hello world" /> t'en penses quoi ?
      </p>
      <div className="my-10">
        <SVGHoverAnimation text="coucou" />
      </div>
      <div className="h-10">
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
    </div>
  );
};

export default Homepage;
