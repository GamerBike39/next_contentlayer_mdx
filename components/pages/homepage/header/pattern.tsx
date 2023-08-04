import { cn } from "@/lib/utils";
import React from "react";

// Interface pour les props
interface PatternProps {
  maxLength: number;
  frequency: number;
  spacing: number;
  offset: number;
  className?: string;
}

const pattern = ({
  maxLength,
  frequency,
  spacing,
  offset,
  className,
}: PatternProps) => {
  // Vérification pour s'assurer que les valeurs ne sont pas négatives
  const safeMaxLength = Math.max(1, maxLength);
  const safeSpacing = Math.max(1, spacing);
  const safeFrequency = Math.abs(frequency);
  const safeOffset = Math.abs(offset);

  // Calcul des propriétés pour les cercles en utilisant les props
  const circles = Array.from({ length: safeMaxLength }, (_, index) => {
    // Utilisation de Math.max pour empêcher r de devenir négatif
    const r = Math.max(0, 203.5 - index * safeSpacing);
    const opacity = 0.05 + (1 - index / safeMaxLength) * 0.9;
    const strokeDasharray = `${(safeFrequency - index * safeSpacing) * 2} ${
      safeFrequency * 2
    }`;
    const transform = `rotate(${index * safeOffset}, 400, 400)`;
    return (
      <circle
        key={index}
        r={r}
        cx="400"
        cy="400"
        strokeWidth="8"
        strokeDasharray={strokeDasharray}
        transform={transform}
        opacity={opacity}
      ></circle>
    );
  });

  return (
    <div className={cn(className)}>
      <svg viewBox="0 0 800 800">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad">
            <stop
              stopColor="hsl(206, 75%, 49%)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="hsl(331, 90%, 56%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g stroke="url(#cccoil-grad)" fill="none" strokeLinecap="round">
          {circles}
        </g>
      </svg>
    </div>
  );
};

export default pattern;
