"use client";
import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Drawer } from "vaul";

import { cardData } from "./cardData";
import { BookPlus, PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {}

const CardInfo: FC<CardProps> = ({}) => {
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
                          <button>
                            <X />
                          </button>
                        </Drawer.Trigger>
                        <Drawer.Title className="font-medium mb-4">
                          {item.title}
                        </Drawer.Title>
                        <div className="flex flex-col gap-10 overflow-auto h-screen px-2">
                          {item.modalContent &&
                            item.modalContent.content.map(
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
                        </div>
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
