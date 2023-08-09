"use client";

import { useState } from "react";
import useSound from "use-sound";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSoundContext } from "@/providers/SoundProvider";

// Fonction d'aide pour vérifier si le pathname correspond au href ou commence par /posts/*
const isPathnameMatch = (pathname: string, href: string) => {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/posts" && pathname === "/posts")
  );
};

interface SoundLinkProps {
  href: string;
  text: string;
  className?: string;
  action?: () => void;
  ref?: React.Ref<HTMLAnchorElement>;
}

const SoundLink: React.FC<SoundLinkProps> = ({
  href,
  text,
  className,
  action,
  ref,
}) => {
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte

  const soundUrl = "/sounds/plunger.mp3";
  const [play, { stop }] = useSound(soundUrl, { volume: 0.15, soundEnabled });
  const [clickSound] = useSound("/sounds/pop-down.mp3", {
    volume: 0.25,
    soundEnabled,
  });

  const pathname = usePathname();

  return (
    <Link
      ref={ref}
      onClick={() => {
        stop();
        clickSound();
        action && action();
      }}
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => {
        stop();
      }}
      href={href}
      className={`${className ? className : ""}
      hover:brightness-200
        transition-all duration-300
        ${
          isPathnameMatch(pathname, "/#projets") ||
          isPathnameMatch(pathname, href)
            ? "dark:text-white text-black brightness-200"
            : "dark:text-white/40 text-black/40 hover:dark:text-white hover:text-black"
        }
        `}
    >
      {text}
    </Link>
  );
};

export default SoundLink;
