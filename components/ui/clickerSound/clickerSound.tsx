"use client";
import { useState } from "react";
import style from "./clickerSound.module.css";
import useSound from "use-sound";

interface clickerSoundProps {}

const LikeButton = ({}) => {
  const [isClicked, setIsClicked] = useState<number>(20);

  // sound effect
  const soundUrl = "/sounds/glug-a.mp3";
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play, { stop }] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
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
      className="relative w-max p-5 cursor-pointer"
    >
      <div className={`${style.heart}  `}>
        <div className="bg-gray-400/60 w-8 h-[100%] absolute bottom-0 z-[2]" />
        <div
          className={`bg-red-400 w-8 absolute bottom-0 z-[3] transition-all ease-in`}
          style={{ transition: "height 0.5s ease", height: `${isClicked}%` }}
        />
      </div>
    </div>
  );
};

export default LikeButton;
