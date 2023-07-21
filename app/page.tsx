"use client";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";

export default function Home() {
  const { height, width } = useViewportSize();

  return (
    <div className="my-10 w-full bg-zinc-900">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Hello World</h1>
        <p className="text-2xl text-white">
          Viewport size: {width}x{height}
        </p>
      </div>
    </div>
  );
}
