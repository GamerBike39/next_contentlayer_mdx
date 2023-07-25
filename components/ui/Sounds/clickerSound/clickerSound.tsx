"use client";
import { useEffect, useRef, useState } from "react";
import style from "./clickerSound.module.css";
import useSound from "use-sound";
import { useSoundContext } from "@/providers/SoundProvider";
import Confetti from "react-confetti";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";

interface LikeButtonProps {}

const LikeButton = ({}: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState<number>(20);
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte
  const refBouche = useRef<HTMLDivElement>(null);
  const refHeart = useRef<HTMLDivElement>(null);
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const { height, width } = useViewportSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isVictory, setIsVictory] = useState<boolean>(true);

  // sound effect
  const soundUrl = "/sounds/glug-a.mp3";
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play, { stop }] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
    soundEnabled: soundEnabled, // Utilise l'état global du son ici
  });
  const [playVictory] = useSound("/sounds/fanfare.mp3", {
    volume: 0.5,
    soundEnabled: soundEnabled,
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

    if (isClicked >= 100) {
      if (isVictory) {
        playVictory();
      }
      setIsVictory(false);
      setIsClicked(100);
      setShowConfetti(true); // Affiche le confetti lorsque isClicked atteint 100
      return isClicked;
    }

    return isClicked;
  };

  function rightClick(e: any) {
    e.preventDefault();
    setIsVictory(true);
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
      setShowConfetti(true); // Affiche le confetti lorsque isClicked atteint 100
    } else {
      refHeart.current?.classList.remove("scale-150");
      refHeart.current?.classList.remove("-rotate-6");
    }
  }, [isClicked]);

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 3000); //

      // Assure-toi de nettoyer le timeout lorsque le composant est démonté
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <>
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
            {isClicked > 99 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                fill="none"
                viewBox="0 0 36 18"
              >
                <path
                  fill="url(#a)"
                  stroke="#000"
                  d="m7.703 5.704-.918-.48a16.699 16.699 0 0 1-4.501-3.442c-.34-.367-.936.01-.75.475l.072.18a24.374 24.374 0 0 0 4.197 6.896l1.901 2.197a13.554 13.554 0 0 0 9.61 5.52l.159.016c3.013.303 6.032-.52 8.475-2.308l.97-.71a19.512 19.512 0 0 0 5.762-6.697l1.575-3.01.38-1.45a.518.518 0 0 0-.837-.526 22.28 22.28 0 0 1-6.637 3.895l-1.257.468a18.096 18.096 0 0 1-7.008 1.129l-3.61-.136a17.803 17.803 0 0 1-7.583-2.017Z"
                />
                <path
                  stroke="#000"
                  d="m5.723 9.748 2.04.731a33.98 33.98 0 0 0 10.174 1.965 24.92 24.92 0 0 0 9.66-1.557l4.079-1.524"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="17.842"
                    x2="17.211"
                    y1=".65"
                    y2="17.349"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="1" stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg
                width="16"
                height="4"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2.44282C2.47317 5.16669 5.82087 6.22489 8.02885 5.96077C9.66761 5.76474 12.4542 3.71372 13 2"
                  // d="M2 2.44282C2.47317 5.16669 5.82087 6.22489 8.02885 5.96077C9.66761 5.76474 12.4542 3.71372 13 2"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {showConfetti && (
        <Confetti width={width - 20} height={height} gravity={0.5} />
      )}
    </>
  );
};

export default LikeButton;
