"use client";
import { useState } from "react";
import style from "./clickerSound.module.css";
import useSound from "use-sound";
import { useSoundContext } from "@/providers/SoundProvider";

interface LikeButtonProps {}

const LikeButton = ({}: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState<number>(20);
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte

  // sound effect
  const soundUrl = "/sounds/glug-a.mp3";
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play, { stop }] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
    soundEnabled: soundEnabled, // Utilise l'état global du son ici
  });

  const handleClick = () => {
    if (isClicked < 100) {
      setIsClicked(isClicked + 5);
      setPlaybackRate(playbackRate + 0.1);
      play();
    } else if (isClicked > 100) {
      stop();
    }

    if (playbackRate > 2.5) {
      setPlaybackRate(2.5);
      stop();
    }

    if (isClicked > 100) {
      setIsClicked(100);
      return isClicked;
    }

    return isClicked;
  };

  function rightClick(e: any) {
    e.preventDefault();
    setIsClicked(isClicked - 5);
    setPlaybackRate(playbackRate - 0.1);
    play();
    if (playbackRate < 0.6) {
      setPlaybackRate(0.6);
      stop();
    }

    if (isClicked < 5) {
      setIsClicked(5);
      return isClicked;
    }

    return isClicked;
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={rightClick}
      className="relative w-max p-5 cursor-pointer hover:-rotate-3 hover:scale-150 transition-all ease-in-out duration-300"
    >
      <div className={`${style.heart}  `}>
        <div className="bg-gray-400/60 w-8 h-[100%] absolute bottom-0 z-[2]" />
        <div
          className={`bg-red-400 w-8 absolute bottom-0 z-[3] transition-all ease-in`}
          style={{ height: `${isClicked}%` }}
        />
        <div className={`${style.eyeLeft}`} />
        <div className={`${style.eyeRight}`} />
        <div className="absolute left-[15%] bottom-[25%] z-10">
          <svg
            width="16"
            height="4"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2.44282C2.47317 5.16669 5.82087 6.22489 8.02885 5.96077C9.66761 5.76474 12.4542 3.71372 13 2"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;
