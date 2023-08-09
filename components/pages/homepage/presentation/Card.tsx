"use client";
import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Drawer } from "vaul";

import { cardData } from "./cardData";
import {
  ArrowDownFromLine,
  MoveRight,
  PlusCircle,
  StepBack,
  StepForward,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

interface CardProps {}

const CardInfo: FC<CardProps> = ({}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Suivre l'index actuel de la modal

  const handleNextIndex = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Désactive temporairement le bouton
      const time = setTimeout(() => {
        setIsButtonDisabled(false); // Réactive le bouton après un délai
      }, 600);
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length); // Passe à l'index suivant en boucle
      setCurrentIndex((prevIndex) => {
        if (prevIndex === cardData.length - 1) {
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
      return () => clearTimeout(time);
    }
  };

  const handlePrevIndex = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Désactive temporairement le bouton
      const time = setTimeout(() => {
        setIsButtonDisabled(false); // Réactive le bouton après un délai
      }, 600);

      // setCurrentIndex((prevIndex) => (prevIndex - 1) % cardData.length); // Passe à l'index précédent en boucle
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 0) {
          return prevIndex;
        } else {
          return prevIndex - 1;
        }
      });

      return () => clearTimeout(time);
    }
  };

  const currentItem = cardData[currentIndex];

  const controls = useDragControls();

  const handleDragEnd = (e: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 100) {
      handlePrevIndex();
    } else if (info.offset.x < -100) {
      handleNextIndex();
    }
  };

  const handleCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardData.map((item, index) => (
        <Card
          key={index + item.title}
          className="hover:scale-105 hover:shadow-lg transition-all duration-300 delay-200 h-auto group hover:border"
        >
          <CardHeader className="lg:flex-row flex-col-reverse justify-center items-center gap-6 transition">
            <h3 className="text-2xl font-bold w-fit">{item.title}</h3>
            {item.icon && <div>{item.icon}</div>}
          </CardHeader>
          <CardContent>
            <CardDescription>{item.content}</CardDescription>
            <CardDescription>
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild className={"my-5 w-full border-none"}>
                  <Button
                    variant={"outline"}
                    onClick={() => handleCurrentIndex(index)}
                  >
                    En savoir{" "}
                    <PlusCircle className="w-4 h-4 ml-2 group-hover:animate-bounce transition" />
                  </Button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col h-[96%] mt-24 fixed bottom-0 left-0 right-0 ">
                    <div className="p-4 bg-white dark:bg-black flex-1 cursor-grab  active:cursor-grabbing">
                      <div className="relative mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 hoverarrow group transition-all">
                        <div className="hidden absolute -bottom-3 w-full h-full group-hover:flex opacity-0 group-hover:opacity-100 group-hover:animate-bounce items-center justify-center transition ease-in-out duration-500">
                          <ArrowDownFromLine className="w-4 h-4 text-zinc-300" />
                        </div>
                      </div>
                      <div className="max-w-4xl mx-auto">
                        <Drawer.Trigger className={"hidden lg:block"}>
                          <X className="absolute top-5 left-5" />
                        </Drawer.Trigger>
                        <div className="mb-5 lg:mb-16 flex justify-between items-center">
                          {/* Ajoute des flèches pour passer à l'index précédent et suivant */}
                          <Button
                            onClick={handlePrevIndex}
                            disabled={currentIndex === 0 || isButtonDisabled}
                            size={"icon"}
                            variant={"outline"}
                          >
                            <StepBack />
                          </Button>
                          <Drawer.Title className="font-medium text-2xl sm:text-clamp3xl">
                            {currentItem.title}
                          </Drawer.Title>
                          <Button
                            onClick={handleNextIndex}
                            disabled={
                              currentIndex === cardData.length - 1 ||
                              isButtonDisabled
                            }
                            size={"icon"}
                            variant={"outline"}
                          >
                            <StepForward />
                          </Button>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-auto h-[80lvh] lg:h-full px-2 my-10 pb-24 cursor-auto active:cursor-grabbing"
                            key={currentIndex} // Utilise l'index actuel comme clé
                            // initial={{ opacity: 0 }} // Définis les styles initiaux
                            // animate={{ opacity: 1 }} // Définis les styles d'animation
                            // exit={{ opacity: 0 }} // Définis les styles de sortie
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.1}
                            dragControls={controls}
                            onDragEnd={handleDragEnd}
                          >
                            {currentItem.modalContent &&
                              currentItem.modalContent.content.map(
                                (contentItem, contentIndex) => (
                                  <motion.div
                                    key={contentIndex}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                      duration: 0.1,
                                      delay: 0.1 * contentIndex,
                                    }}
                                    whileInView={{
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                        duration: 0.2,
                                        delay: 0.1 * contentIndex,
                                      },
                                    }}
                                  >
                                    <div>
                                      <h4 className="font-bold flex gap-1 items-center flex-wrap text-xl">
                                        <MoveRight className="w-4 h-4" />{" "}
                                        {contentItem.title}
                                      </h4>
                                      <motion.p
                                        className="text-foreground/70"
                                        key={contentIndex}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{
                                          duration: 0.1,
                                          delay: 0.2 * contentIndex,
                                          ease: "easeInOut",
                                        }}
                                        whileInView={{
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                            duration: 0.2,
                                            delay: 0.2 * contentIndex,
                                          },
                                        }}
                                      >
                                        {contentItem.text}
                                      </motion.p>
                                    </div>
                                  </motion.div>
                                )
                              )}
                            <div className="lg:hidden h-10 w-full" />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardInfo;
