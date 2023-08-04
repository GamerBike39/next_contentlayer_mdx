import { useAnimationControls, motion } from "framer-motion";
import { useState } from "react";
import { Luckiest_GuyFont } from "@/utils/fonts";
import { useMouse } from "@/hooks/use-mouse-position/UseMousePosition";
import { Slider } from "@/components/ui/slider";

interface TextSpanProps {
  children: React.ReactNode;
  isHoveringLeftParent?: boolean;
  isHoveringTopParent?: boolean;
  marioColors?: boolean;
}

const TextSpan = ({ children, marioColors }: TextSpanProps) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHoveringLeft, setIsHoveringLeft] = useState<boolean>(false);
  const [isHoveringTop, setIsHoveringTop] = useState<boolean>(false);

  const getRandomScaleValue = () => Math.random() * 0.8 + 0.5; // Génère une valeur aléatoire entre 0.8 et 1.2
  const getRandomZScaleValue = () => Math.random() * 0.3 + 0.6; // Génère une valeur aléatoire entre 0.8 et 1.2 pour l'axe Z
  const getRandomYValuePlus = () => Math.random() * 4 + 5; // Génère une valeur aléatoire entre 10 et 20
  const getRandomYValueMinus = () => Math.random() * -1 - 4; // Génère une valeur aléatoire entre -1 et -4

  const randomMarioColors = ["#049CD8", "#FBD000", "#E52521", "#43B047"];

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * randomMarioColors.length);
    return randomMarioColors[randomIndex];
  };

  const { ref, x, y } = useMouse();

  const pathScale = () => {
    controls.start({
      scaleX: [
        1,
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        1,
      ],
      scaleY: [
        1,
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        getRandomScaleValue(),
        1,
      ],
      scaleZ: [
        1,
        getRandomZScaleValue(),
        getRandomZScaleValue(),
        getRandomZScaleValue(),
        getRandomZScaleValue(),
        getRandomZScaleValue(),
        getRandomZScaleValue(),
        1,
      ],
      // x: isHoveringLeft ? [0, 3, 6, 15, 6, 3, 0] : [0, -3, -6, -15, -6, -3, 0],
      // y: isHoveringTop ? [0, 3, 6, 15, 6, 3, 0] : [0, -3, -6, -15, -6, -3, 0],
      rotateX: isHoveringLeft
        ? [0, 3, 6, 15, 6, 3, 0]
        : [0, -3, -6, -15, -6, -3, 0],
      rotateY: isHoveringTop
        ? [0, 3, 6, 15, 6, 3, 0]
        : [0, -3, -6, -15, -6, -3, 0],
      rotateZ: isHoveringLeft
        ? [0, 3, 6, 15, 6, 3, 0]
        : [0, -3, -6, -15, -6, -3, 0],
      color: marioColors ? randomColor() : "currentColor",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <>
      <motion.span
        ref={ref}
        className={`inline-block select-none px-1 antialiased ${Luckiest_GuyFont.className}`}
        initial={{ scaleX: 1, scaleY: 1, scaleZ: 1, y: 0 }}
        animate={controls}
        onHoverStart={() => {
          setIsHoveringLeft(x < 30);
          // setIsHoveringTop(y < 30);
          if (!isPlaying) pathScale();
        }}
        onHoverEnd={() => {
          setIsPlaying(false);
        }}
      >
        {children}
      </motion.span>
    </>
  );
};

export default TextSpan;
