"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Construction,
  GraduationCap,
  HelpingHand,
  Rocket,
  Target,
} from "lucide-react";
import { Tilt } from "react-tilt";

interface CardProps {}

const cardData = [
  {
    title: "Développement Web",
    content:
      "Réalisations de sites vitrines, blogs, e-commerce, ... sur mesure qui répondent à vos besoins",
    icon: <Rocket className="w-10 h-10" />,
  },
  {
    title: "Accompagnement",
    content:
      "Du cahier des charges à la mise en ligne, je vous accompagne dans votre projet pour qu'il soit le plus proche de vos attentes",
    icon: <HelpingHand className="w-10 h-10" />,
  },
  {
    title: "Maintenance",
    content:
      "Une fois votre site en ligne, je reste à votre disposition pour toute modification ou ajout de fonctionnalité",
    icon: <Construction className="w-10 h-10" />,
  },
  {
    title: "Référencement",
    content:
      "Je vous aide à améliorer votre référencement naturel pour que votre site soit le plus visible possible",
    icon: <Target className="w-10 h-10" />,
  },
  {
    title: "Formation",
    content:
      "Je vous forme à l'utilisation de votre site pour que vous puissiez le gérer en toute autonomie",
    icon: <GraduationCap className="w-10 h-10" />,
  },
  {
    title: "Optimisation",
    content:
      "A l'aide des dernières technologies, je m'assure que votre site soit le plus rapide possible",
    icon: <Rocket className="w-10 h-10" />,
  },
];

const CardInfo: FC<CardProps> = ({}) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardData.map((item, index) => (
        <Tilt key={index + item.title} options={defaultOptions}>
          <Card
            key={index}
            className="hover:scale-105 hover:shadow-lg transition group hover:border"
          >
            <CardHeader className="lg:flex-row flex-col-reverse justify-center items-center gap-6 transition">
              <h3 className="text-2xl font-bold w-fit">{item.title}</h3>
              {item.icon && <div>{item.icon}</div>}
            </CardHeader>
            <CardContent>
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        </Tilt>
      ))}
    </div>
  );
};

export default CardInfo;
