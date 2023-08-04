"use client";

import TextScaleDifform from "@/components/animation/text-animation/scaleDifform/TextScaleDifform";
import Pattern from "./pattern2";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeHeaderProps {}

const argument = [
  {
    id: 1,
    title: "Mes articles",
  },
  {
    id: 2,
    title: "Mes projets",
  },
  {
    id: 3,
    title: "Des tutos",
  },
  {
    id: 4,
    title: "Des trucs (vous avez lu jusqu'ici 🤩)",
  },
];

const HomeHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Utilisation d'un effet pour mettre à jour l'index toutes les 2 secondes
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === argument.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen  max-w-6xl mx-auto flex items-center">
      <div className="px-5 justify-start w-full">
        <TextScaleDifform text="Salut" className="flex text-clamp4xl" />

        <h1 className="text-clamp3xl">Bienvenue sur mon BlogFolio</h1>
        <div className="flex gap-3 items-center w-full">
          <h3 className="min-w-fit ">Vous trouverez ici :</h3>
          <ul className="relative w-full mt-2 overflow-hidden h-24 flex items-center">
            {argument.map((arg, index) => (
              <motion.li
                className="absolute top-0 left-0 py-8"
                key={arg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 20,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.5,
                  stiffness: 200,
                }}
              >
                {arg.title}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <Pattern className="absolute scale-[6] opacity-25 lg:opacity-100 md:scale-100 -z-10 top-0 md:-right-36 h-full w-full" />
    </div>
  );
};

export default HomeHeader;
