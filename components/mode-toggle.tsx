"use client";

import { useSoundContext } from "@/providers/SoundProvider";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import useSound from "use-sound";

interface Props {
  iconSize?: number;
}

export function ModeToggle({ iconSize = 6 }: Props) {
  const { soundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte
  const { setTheme, theme } = useTheme();

  const [playOn] = useSound("/sounds/switch-on.mp3", {
    volume: 0.5,
    soundEnabled,
  });
  const [playOff] = useSound("/sounds/switch-off.mp3", {
    volume: 0.5,
    soundEnabled,
  });

  return (
    <button
      onClick={() => {
        theme === "dark" ? playOff() : playOn();
        setTheme(theme === "light" || theme === "system" ? "dark" : "light");
      }}
      className={`rounded-md w-${iconSize} h-${iconSize} flex items-center justify-center hover:scale-110 transition-all active:outline-none`}
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" && theme !== "system" ? (
        <Moon
          className={`fill-slate-800/30 w-${iconSize} h-${iconSize} focus:outline-none`}
        />
      ) : (
        <Sun className={`fill-slate-800/30 w-${iconSize} h-${iconSize}`} />
      )}
    </button>
  );
}
