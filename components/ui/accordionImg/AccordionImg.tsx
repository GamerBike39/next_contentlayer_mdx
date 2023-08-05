"use client";

import { FC, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// TODO size image parametre

interface AccordionImgProps {}

const accordionData = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    img: "/posts/menuMdx.jpg",
    link: "https://www.google.fr",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    img: "/posts/dark_menu_mdx.jpg",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    img: "/posts/making_web_site.png",
  },
];

const AccordionImg: FC<AccordionImgProps> = ({}) => {
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <div className="grid grid-cols-12 gap-0 lg:gap-8 w-full border px-5 py-10 rounded-xl bg-background shadow-2xl">
      <div className="col-span-12 lg:col-span-7 ">
        <p className="text-3xl dark:text-white/90 w-fit border-b border-dashed mb-10">
          Solution
        </p>
        <Accordion type="single" collapsible>
          {accordionData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger onClick={() => handleActive(index)}>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="max-w-full">
                {/* {item.content} */}
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="col-span-12 lg:col-span-5 relative rounded-lg h-96 mt-5">
        {accordionData.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt="Picture of the author"
            fill
            sizes="80vw"
            className={`w-full h-full object-cover transition-all duration-500 rounded-lg  ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionImg;
