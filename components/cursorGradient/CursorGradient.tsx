"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { useTheme } from "next-themes";

interface CursorGradientProps {
  children?: React.ReactNode;
  className?: string;
}

const CursorGradient = ({ children, className }: CursorGradientProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const { theme } = useTheme();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("group relative w-full h-full", className)}
      onMouseMove={handleMouseMove}
    >
      {theme === "dark" ? (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        />
      ) : (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
          radial-gradient(
            350px circle at ${mouseX}px ${mouseY}px,
            rgba(58, 425, 133, 0.15),
            transparent 80%
          )
        `,
          }}
        />
      )}
      <div>{children}</div>
    </div>
  );
};

export default CursorGradient;
