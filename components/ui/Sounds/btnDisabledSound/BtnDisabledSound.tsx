import { useSoundContext } from "@/providers/SoundProvider";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import useSound from "use-sound";

interface Props {
  iconSize?: number;
}

const BtnDisabledSound = ({ iconSize = 6 }: Props) => {
  const soundUrl = "/sounds/enable-sound.mp3";
  const { soundEnabled, setSoundEnabled } = useSoundContext(); // Accès à l'état global du son via le contexte
  const playSoundRef = useRef<() => void | undefined>();
  const [isMuted, setIsMuted] = useState(false);

  const [play] = useSound(soundUrl, {
    volume: 0.2,
    playbackRate: 0.3,
    onend: () => {
      // Réinitialiser la référence lorsque la lecture est terminée pour permettre une nouvelle lecture
      playSoundRef.current = undefined;
    },
  });
  const [playOff] = useSound("/sounds/disable-sound.mp3", {
    volume: 0.2,
    playbackRate: 0.5,
  });

  // Mettre à jour la référence de la fonction de lecture lorsque le son est activé ou désactivé
  if (soundEnabled) {
    playSoundRef.current = play;
  } else {
    playSoundRef.current = playOff;
  }

  const handleToggleSound = () => {
    setSoundEnabled((prevSoundEnabled) => !prevSoundEnabled);
    setIsMuted((prevIsMuted) => !prevIsMuted);
    isMuted ? play() : playOff();
  };

  return (
    <div
      className={`w-10 h-10 flex items-center ml-2 cursor-pointer text-lg hover:scale-110 transition-all }`}
      onClick={handleToggleSound}
    >
      {soundEnabled ? (
        <Volume2 className={`fill-slate-800/30 w-${iconSize} h-${iconSize}`} />
      ) : (
        <VolumeX className={`fill-slate-800/30 w-${iconSize} h-${iconSize}`} />
      )}
    </div>
  );
};

export default BtnDisabledSound;
