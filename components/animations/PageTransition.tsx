"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Pagetransition = () => {
  const pathname = usePathname();

  const [isPathnameChanged, setIsPathnameChanged] = useState(false);

  useEffect(() => {
    setIsPathnameChanged(true);
    const timeOutId = setTimeout(() => {
      setIsPathnameChanged(false);
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isPathnameChanged && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-red-500 z-[500]"
              initial={{ scaleY: 1, originY: 0 }}
              animate={{ scaleY: 0, originY: 0 }}
              exit={{ originY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Pagetransition;
