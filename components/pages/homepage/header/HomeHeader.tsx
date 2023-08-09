"use client";
import TextScaleDifform from "@/components/animation/text-animation/scaleDifform/TextScaleDifform";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";

const HomeHeader = ({}) => {
  const [maxLength, setMaxLength] = useState(100);
  const [frequency, setFrequency] = useState(300);
  const [spacing, setSpacing] = useState(5);

  const router = useRouter();

  const handleChangeMaxLength = (value: number) => {
    setMaxLength(value);
  };

  const handleChangeFrequency = (value: number) => {
    setFrequency(value);
  };

  const handleChangeSpacing = (value: number) => {
    setSpacing(value);
  };

  return (
    <div className="grid grid-cols-6 h-screen w-full justify-center px-5 relative">
      <div className="col-span-6 lg:col-span-3 flex flex-col h-full  justify-center lg:ml-auto">
        <div className="backdrop-blur-sm md:backdrop:backdrop-blur-0">
          <h1 className="text-clamp3xl">
            Bonjour, je suis{" "}
            <TextScaleDifform text="Julien" className="text-clampXl" />
          </h1>
          <h2 className="text-clamp2xl">
            Développeur web <br /> Création moderne et responsive
          </h2>
        </div>
        <div className="mt-5">
          <Button onClick={() => router.push("/contact")}>
            <SVGHoverAnimation text="Me contacter" />
          </Button>
        </div>
      </div>
      <div className="hidden xl:block relative col-span-2">
        <Image
          src={"/bg/popdev-removebg-preview.png"}
          alt=""
          fill
          sizes="70vw"
          priority
          className="object-cover lg:object-contain -z-10"
        />
      </div>
      <Image
        src={"/bg/motif.svg"}
        alt=""
        fill
        sizes="100vw"
        priority
        className="-z-20 object-cover xl:object-fill"
      />
    </div>
  );
};

export default HomeHeader;
