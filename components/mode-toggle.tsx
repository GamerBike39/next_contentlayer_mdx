"use client";

import { useSoundContext } from "@/providers/SoundProvider";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-${iconSize} h-${iconSize}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-${iconSize} h-${iconSize}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  );
}
