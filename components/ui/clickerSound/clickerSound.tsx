"use client";
import { useEffect, useRef, useState } from "react";
import style from "./clickerSound.module.css";
import useSound from "use-sound";
import { useSoundContext } from "@/providers/SoundProvider";

interface LikeButtonProps {}

const LikeButton = ({}: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState<number>(20);
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte
  const refBouche = useRef<HTMLDivElement>(null);
  const refHeart = useRef<HTMLDivElement>(null);
  const [isPositive, setIsPositive] = useState<boolean>(true);

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
      setIsPositive(true);
      setIsClicked(isClicked < 80 ? isClicked + 5 : isClicked + 3);
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
    setIsPositive(false);
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

  useEffect(() => {
    if (!isPositive) {
      refBouche.current?.classList.add("rotate-180");
    } else {
      refBouche.current?.classList.remove("rotate-180");
    }
  }, [isPositive]);

  useEffect(() => {
    if (isClicked >= 100) {
      refHeart.current?.classList.add("scale-150");
      refHeart.current?.classList.add("-rotate-6");
    } else {
      refHeart.current?.classList.remove("scale-150");
      refHeart.current?.classList.remove("-rotate-6");
    }
  }, [isClicked]);

  return (
    <div
      ref={refHeart}
      onClick={handleClick}
      onContextMenu={rightClick}
      className="relative w-max p-5 cursor-pointer hover:-rotate-6 hover:scale-150 transition-all ease-in-out duration-300 drop-shadow-xl"
    >
      <div className={`${style.heart}`}>
        <div className={`${style.initialHeart}`} />
        <div
          className={`${style.heartAnimation}`}
          style={{ height: `${isClicked}%` }}
        />
        <div className={`${style.eyeLeft}`} />
        <div className={`${style.eyeRight}`} />
        <div
          ref={refBouche}
          className={`absolute left-[15%] bottom-[25%] z-10 ${
            isPositive ? " " : "transform rotate-180"
          }}`}
        >
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
