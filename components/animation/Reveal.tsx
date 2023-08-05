import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

function Reveal({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          bounce: 0.3,
          mass: 1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
