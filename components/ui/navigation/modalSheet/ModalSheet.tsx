"use client";

import Sheet from "react-modal-sheet";
import { useState, useRef } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import BtnDisabledSound from "../../Sounds/btnDisabledSound/BtnDisabledSound";
import SoundLink from "../../Sounds/SoundLink";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";

function ModalSheet() {
  const [isOpen, setOpen] = useState(false);
  const { height, width } = useViewportSize();

  return (
    <>
      {width < 1024 ? (
        <motion.div
          className="fixed bottom-12 flex justify-center w-full px-3 py-1 z-[9999]"
          drag
          whileDrag={{ scale: 1.2 }}
          dragConstraints={{ left: 5, right: 5, top: 5, bottom: 5 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDragEnd={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.2 }}
          // onClick={() => setOpen((prev) => !prev)}
        >
          <motion.button
            className="p-3 flex justify-center items-center  rounded-full bg-gray-900 dark:bg-white dark:text-gray-950 text-white shadow-lg focus:outline-none"
            whileHover={{ width: 150, height: 50, borderRadius: 100 }}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="fixed top-5 right-10 px-3 py-1 z-[9999]"

          // onClick={() => setOpen((prev) => !prev)}
        >
          <motion.button
            className="p-3 flex justify-center items-center  rounded-full bg-gray-900 dark:bg-white dark:text-gray-950 text-white shadow-lg focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu />
          </motion.button>
        </motion.div>
      )}

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
        tweenConfig={{
          ease: "easeOut",
          duration: 0.4,
        }}
      >
        <Sheet.Container>
          <Sheet.Header className="dark:!bg-slate-950" />
          <Sheet.Content>
            {/* <div style={{ height: 200 }}>Some content</div> */}
            <div className="w-full h-auto bg-white dark:bg-slate-950 relative">
              <div className="flex w-full p-5">
                <X
                  onClick={() => setOpen(false)}
                  className="absolute right-2 top-2 w-8 h-8 cursor-pointer"
                />
                <div>
                  <div className="flex gap-5 items-center">
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
                    />
                    <SoundLink
                      href="/about"
                      text="À&nbsp;propos"
                      className="text-4xl font-bold"
                    />
                  </nav>
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
                    />
                    <SoundLink
                      href="/about"
                      text="À&nbsp;propos"
                      className="text-4xl font-bold"
                    />
                  </nav>
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
                    />
                    <SoundLink
                      href="/about"
                      text="À&nbsp;propos"
                      className="text-4xl font-bold"
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
