"use client";
import { useSoundContext } from "@/providers/SoundProvider";
import React, { useState } from "react";
import useSound from "use-sound";

interface SVGHoverAnimationProps {
  text: string;
}

const SVGHoverAnimation = ({ text }: SVGHoverAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const soundUrl = "/sounds/rising-pops.mp3";
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte

  const [play, { stop }] = useSound(soundUrl, { volume: 0.25, soundEnabled });

  const handleMouseEnter = () => {
    play();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    stop();
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex gap-2 items-center max-w-fit px-3 py-1 duration-200 ease-in-out hover:scale-105 active:scale-95 transition-all overflow-hidden"
    >
      <p>{text}</p>
      <svg width="36" height="12" viewBox="0 0 36 12" fill="none" className="">
        {/* Path for the first group */}
        <path
          d="M0.75 6H11.25"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Path for the second group */}
        <path
          d="M6 0.75L11.25 6L6 11.25"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Path for the third group */}
        <path
          d="M15 10L19.5 5.5L15 1"
          className={`stroke-current ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: `opacity ${
              isHovered ? "125ms ease 0s" : "250ms ease 125ms"
            }`,
            opacity: isHovered ? "1" : "0", // New opacity style based on hover state
          }}
        />

        {/* Path for the fourth group */}
        <path
          d="M23 10L27.5 5.5L23 1"
          className={`stroke-current ${isHovered ? "opacity-66" : "opacity-0"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: `opacity ${
              isHovered ? "125ms ease 125ms" : "250ms ease 250ms"
            }`,
            opacity: isHovered ? "0.66" : "0", // New opacity style based on hover state
          }}
        />

        {/* Path for the fifth group */}
        <path
          d="M31 10L35.5 5.5L31 1"
          className={`stroke-current ${isHovered ? "opacity-35" : "opacity-0"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: `opacity ${
              isHovered ? "125ms ease 250ms" : "250ms ease 375ms"
            }`,
            opacity: isHovered ? "0.35" : "0", // New opacity style based on hover state
          }}
        />
      </svg>
    </div>
  );
};

export default SVGHoverAnimation;
