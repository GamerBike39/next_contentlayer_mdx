"use client";
import CircleText from "@/components/ui/specialWords/CircleText";
import UnderlineVagueSvg from "@/components/ui/specialWords/Underline_Vague";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";

export default function Home() {
  const { height, width } = useViewportSize();

  return (
    <div className="my-10 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-2xl">
          Viewport size: {width}x{height}
        </p>
        <UnderlineVagueSvg text="hello world comment ça va ?" />
      </div>
      <CircleText text="hello ?" />
    </div>
  );
}
