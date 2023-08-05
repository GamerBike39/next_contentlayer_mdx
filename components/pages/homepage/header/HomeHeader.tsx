import TextScaleDifform from "@/components/animation/text-animation/scaleDifform/TextScaleDifform";
import Pattern from "./pattern2";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import GridBackground from "@/components/background/GridBackground";

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
    <>
      <GridBackground />
      <div className="relative overflow-hidden w-full h-screen max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-evenly lg:justify-center mt-14">
        <div className="px-5 w-full h-full pt-40 flex flex-col justify-start">
          <TextScaleDifform text="Salut" className="flex text-clamp4xl" />
          <h1 className="text-clamp3xl">Bienvenue sur mon BlogFolio</h1>
          <div className="flex gap-5">
            <Button
              className="mt-5"
              onClick={() => {
                router.push("/posts");
              }}
            >
              Mes projets
            </Button>
            <Button
              variant={"secondary"}
              className="mt-5"
              onClick={() => {
                router.push("/about");
              }}
            >
              En savoir plus
            </Button>
          </div>
        </div>
        <div className="hidden lg:block absolute scale-125 opacity-25 -z-10 top-0 md:-right-36 h-full w-full">
          <Pattern
            Frequency={frequency}
            MaxLength={maxLength}
            Spacing={spacing}
            className="w-full h-full"
          />
        </div>

        <Image
          src="/bg/popdev.png"
          alt=""
          width={300}
          height={300}
          className="object-scale-down -z-10 rounded-full lg:hidden"
        />
      </div>
      {/* <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-1">
          <label htmlFor="maxLength">maxLength</label>
          <input
            value={maxLength}
            onChange={(e) => handleChangeMaxLength(Number(e.target.value))}
            type="range"
            min="0"
            max="500"
            className="w-96"
          ></input>
          {maxLength}
        </div>
        <div className="flex  gap-1">
          <label htmlFor="frequency">frequency</label>
          <input
            value={frequency}
            onChange={(e) => handleChangeFrequency(Number(e.target.value))}
            type="range"
            step={5}
            min="0"
            max="500"
            className="w-96"
          ></input>
          {frequency}
        </div>
        <div className="flex gap-1">
          <Label htmlFor="spacing">spacing</Label>
          <input
            value={spacing}
            onChange={(e) => handleChangeSpacing(Number(e.target.value))}
            type="range"
            step={0.5}
            min={0}
            max={50}
            className="w-96 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          {spacing}
        </div>
      </div> */}
    </>
  );
};

export default HomeHeader;
