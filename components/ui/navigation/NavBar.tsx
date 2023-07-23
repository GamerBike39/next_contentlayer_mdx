"use client";
import { FC, useState, useRef } from "react";
import { useSoundContext } from "@/providers/SoundProvider";
import SoundLink from "./SoundLink";
import useSound from "use-sound";
import { ModeToggle } from "@/components/mode-toggle";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const soundUrl = "/sounds/glug-a.mp3";
  const { soundEnabled, setSoundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte
  const playSoundRef = useRef<() => void | undefined>();

  const [play] = useSound(soundUrl, {
    volume: 0.5,
    soundEnabled: soundEnabled,
    onend: () => {
      // Réinitialiser la référence lorsque la lecture est terminée pour permettre une nouvelle lecture
      playSoundRef.current = undefined;
    },
  });

  // Mettre à jour la référence de la fonction de lecture lorsque le son est activé ou désactivé
  if (soundEnabled) {
    playSoundRef.current = play;
  }

  const handleToggleSound = () => {
    // Inverser la valeur de soundEnabled lors du clic sur le bouton
    setSoundEnabled((prevSoundEnabled) => !prevSoundEnabled);
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <ModeToggle />
      <div
        className="w-10 h-10 flex items-center ml-2"
        onClick={handleToggleSound}
      >
        {soundEnabled ? "🔊" : "🔇"}
      </div>
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-wrap">
        <SoundLink href="/" text="Accueil" />
        <SoundLink href="/posts" text="Projets" />
        <SoundLink href="/blog" text="Blog" />
        <SoundLink href="/about" text="À&nbsp;propos" />
      </nav>
    </div>
  );
};

export default NavBar;
