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
import { PlusCircle, StepBack, StepForward, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useDragControls } from "framer-motion";

interface CardProps {}

const CardInfo: FC<CardProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Suivre l'index actuel de la modal

  const handleNextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length); // Passe à l'index suivant en boucle
  };

  const handlePrevIndex = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    ); // Passe à l'index précédent en boucle
  };

  const currentItem = cardData[currentIndex];

  const controls = useDragControls();

  const handleDragEnd = (e: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 150) {
      handlePrevIndex();
    } else if (info.offset.x < -150) {
      handleNextIndex();
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardData.map((item, index) => (
        <Card
          key={index}
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
                  <Button variant={"outline"}>
                    En savoir <PlusCircle className="w-4 h-4 ml-2" />
                  </Button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white dark:bg-black flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Trigger className="absolute top-4 right-4">
                          <X />
                        </Drawer.Trigger>
                        <div className="mb-5 flex justify-between items-center">
                          {/* Ajoute des flèches pour passer à l'index précédent et suivant */}
                          <button
                            onClick={handlePrevIndex}
                            disabled={currentIndex === 0}
                          >
                            <StepBack />
                          </button>
                          <Drawer.Title className="font-medium">
                            {currentItem.title}
                          </Drawer.Title>
                          <button
                            onClick={handleNextIndex}
                            disabled={currentIndex === cardData.length - 1}
                          >
                            <StepForward />
                          </button>
                        </div>

                        <motion.div
                          className="flex flex-col gap-10 overflow-auto h-[80vh] px-2 mb-10"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.1}
                          dragControls={controls}
                          onDragEnd={handleDragEnd}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {currentItem.modalContent && // Utilise currentItem ici
                            currentItem.modalContent.content.map(
                              (contentItem, contentIndex) => (
                                <div key={contentIndex}>
                                  <div>
                                    <h4 className="font-semibold">
                                      {contentItem.title}
                                    </h4>
                                    <p>{contentItem.text}</p>
                                  </div>
                                </div>
                              )
                            )}
                        </motion.div>
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
