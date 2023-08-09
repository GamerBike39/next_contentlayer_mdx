import AccordionImg from "@/components/ui/accordionImg/AccordionImg";
import RedLine from "@/components/ui/specialWords/RedLine";
import UnderlineVagueSvg from "@/components/ui/specialWords/Underline_Vague";
import { FC } from "react";
import CardInfo from "./Card";

interface WhoIamProps {}

const WhoIam: FC<WhoIamProps> = ({}) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10">
      <div>
        <h2
          className={`text-clamp3xl font-bold relative flex justify-center h-fit w-full`}
        >
          Présentation
        </h2>
        <h3 className="text-foreground/50 text-xl text-right">Qui suis-je ?</h3>
      </div>
      <div className="py-10">
        <p className="text-2xl pb-3">
          <UnderlineVagueSvg text="Développeur passioné" />,
        </p>
        <p className="text-xl">
          C'est avec beaucoup de plaisir que je vous{" "}
          <RedLine text="accompagnerai" /> dans vos projets
        </p>
        <p className="text-xl">
          Web et mobiles à travers plusieurs compétences.
        </p>
      </div>
      <CardInfo />
    </div>
  );
};

export default WhoIam;
