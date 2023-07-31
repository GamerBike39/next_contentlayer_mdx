"use client";

import Sheet from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import BtnDisabledSound from "../../Sounds/btnDisabledSound/BtnDisabledSound";
import SoundLink from "../../Sounds/SoundLink";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import ChipTabs from "../tabs/mobile/Tabs";
import { Post } from "@/.contentlayer/generated/types";

interface ModalSheetProps {
  posts?: Post[];
}

function ModalSheet({ posts }: ModalSheetProps) {
  const [isOpen, setOpen] = useState(false);
  const { width } = useViewportSize();
  const [isViewportSizeReady, setIsViewportSizeReady] = useState(false);

  const constraintsRef = useRef(null);

  useEffect(() => {
    if (width) {
      setIsViewportSizeReady(true);
    }
  }, [width]);

  const Desktop = (
    <motion.div
      ref={constraintsRef}
      className="fixed top-5 right-10 px-3 py-1 z-50"
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        type: "spring",
        bounce: 0.5,
        stiffness: 100,
      }}
    >
      <motion.button
        className="p-3 flex justify-center items-center  rounded-full bg-gray-900 dark:bg-white dark:text-gray-950 text-white shadow-lg focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu />
      </motion.button>
    </motion.div>
  );

  const Mobile = (
    <motion.div
      ref={constraintsRef}
      className="w-full fixed bottom-0 bg-gray-900 dark:bg-zinc-700 pb-5 pt-3 z-50"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.div
        className=" flex justify-center items-center w-full"
        drag="y"
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={constraintsRef}
        whileDrag={{ height: 100 }} // Gérer la hauteur pendant le glisser-déposer
        dragElastic={0.0001}
        dragSnapToOrigin={true}
        onDragEnd={() => {
          setOpen((prev) => !prev);
        }}
        style={{ touchAction: "none" }}
      >
        <p className="text-center text-white">Menu</p>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {isViewportSizeReady && (width > 1024 ? Desktop : Mobile)}

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen((prev) => !prev)}
        detent="full-height"
        tweenConfig={{
          ease: "easeOut",
          duration: 0.2,
        }}
      >
        <Sheet.Container>
          <Sheet.Backdrop className="!blur-3xl !z-40" />
          <Sheet.Header className="dark:!bg-slate-950" />
          <Sheet.Content>
            {/* <div style={{ height: 200 }}>Some content</div> */}
            <div className="w-full h-full bg-yellow-100/80 dark:bg-slate-950 relative">
              <div className="flex flex-col w-full p-5">
                <X
                  onClick={() => setOpen((prev) => !prev)}
                  className="hidden lg:absolute right-4 top-0 pr-5 w-20 h-20 cursor-pointer"
                />

                <div>
                  <div className="flex gap-5 items-center select-none focus">
                    <div className="bg-slate-200 dark:bg-slate-200/50 rounded-full p-4  h-14 w-14 flex items-center justify-center select-none">
                      <ModeToggle />
                    </div>
                    <div className="bg-slate-200 dark:bg-slate-200/50 rounded-full h-14 w-14 flex items-center justify-center">
                      <BtnDisabledSound iconSize={6} />
                    </div>
                  </div>
                  <nav className="text-sm font-medium space-y-6 flex flex-col flex-wrap">
                    <SoundLink
                      href="/"
                      text="Accueil"
                      action={() => setOpen(false)}
                      className="text-4xl font-bold"
                    />
                    <SoundLink
                      href="/posts"
                      text="Projets"
                      className="text-4xl font-bold"
                      action={() => setOpen(false)}
                    />
                    <SoundLink
                      href="/about"
                      text="À&nbsp;propos"
                      className="text-4xl font-bold"
                      action={() => setOpen(false)}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}

export default ModalSheet;
