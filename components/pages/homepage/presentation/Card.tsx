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
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardData.map((item, index) => (
        <Card
          key={index}
          className="hover:scale-105 hover:shadow-lg transition group"
        >
          <CardHeader className="lg:flex-row flex-col-reverse justify-center items-center gap-6 group-hover:scale-110 transition">
            <h3 className="text-2xl font-bold w-fit">{item.title}</h3>
            {item.icon && <div>{item.icon}</div>}
          </CardHeader>
          <CardContent>
            <CardDescription>{item.content}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardInfo;
