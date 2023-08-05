import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface PatternProps {
  className?: string;
  MaxLength?: number;
  Frequency?: number;
  Spacing?: number;
  Offset?: number;
}

const Pattern = ({
  className,
  MaxLength = 100,
  Frequency = 300,
  Spacing = 5,
  Offset = 10,
}: PatternProps) => {
  const maxLength = MaxLength;
  const frequency = Frequency;
  const spacing = Spacing;
  const offset = Offset;

  const { theme } = useTheme();

  // Calcul des propriétés pour les cercles en utilisant les props
  const circles = Array.from({ length: maxLength }, (_, index) => {
    let r = 203.5 - index * spacing;
    r = Math.max(0, r); // Fixer le rayon (r) à zéro s'il devient négatif
    const opacity = 0.05 + (1 - index / maxLength) * (1 - offset / 360);
    const strokeDasharray = `${(frequency - index * spacing) * 2} ${
      frequency * 2
    }`;
    const transform = `rotate(${index * offset}, 400, 400)`;

    return (
      <motion.circle
        key={index}
        r={r}
        cx="400"
        cy="400"
        strokeWidth="2"
        strokeDasharray={strokeDasharray}
        transform={transform}
        opacity={opacity}
        initial={{ opacity: 0, rotate: 0, scale: 0.8 }} // Opacité initiale à 0 pour créer l'effet d'apparition
        animate={{ opacity: 1, rotate: 360, scale: 1.2 }} // Animer l'opacité pour faire apparaître progressivement les cercles
        transition={{
          duration: 3.5,
          delay: index * 0.1,
          repeat: Infinity,
          repeatType: "mirror",
        }} // Réglage de la durée et du délai de l'animation
      ></motion.circle>
    );
  });

  return (
    // <div >
    <svg viewBox="10 10 800 800" className={cn(className)}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad">
          <stop
            stopColor={
              theme === "dark" ? "hsl(206, 75%, 49%)" : "hsl(206, 95%, 70%)"
            }
            stopOpacity="1"
            offset="0%"
          ></stop>
          <stop
            stopColor={
              theme === "dark" ? "hsl(331, 90%, 56%)" : "hsl(331, 95%, 70%)"
            }
            stopOpacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g stroke="url(#cccoil-grad)" fill="none" strokeLinecap="round">
        {circles}
      </g>
    </svg>
    // </div>
  );
};

export default Pattern;
