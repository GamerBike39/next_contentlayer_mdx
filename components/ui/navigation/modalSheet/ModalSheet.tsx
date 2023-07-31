"use client";

import Sheet from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import BtnDisabledSound from "../../Sounds/btnDisabledSound/BtnDisabledSound";
import SoundLink from "../../Sounds/SoundLink";
import { Mail, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { Post } from "@/.contentlayer/generated/types";
import FooterSocialsLinks from "./Footer/FooterSocialsLinks";

import style from "./ModalSheet.module.scss";
import Link from "next/link";

interface ModalSheetProps {
  posts?: Post[];
}

function ModalSheet({ posts }: ModalSheetProps) {
  const [isOpen, setOpen] = useState(false);
  const { width } = useViewportSize();
  const [isViewportSizeReady, setIsViewportSizeReady] = useState(false);

  const constraintsRef = useRef(null);

  const animateNavItem = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay,
    },
  });

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
          ease: [0.87, 0, 0.13, 1],
          duration: 0.4,
        }}
        className="!overflow-auto"
      >
        <Sheet.Container>
          <Sheet.Backdrop className="!blur-3xl !z-40" />
          <Sheet.Header className="dark:!bg-slate-950" />
          <Sheet.Content>
            {/* <div style={{ height: 200 }}>Some content</div> */}
            <div className="w-full h-full bg-yellow-50/80 dark:bg-slate-950 relative">
              <div className="flex flex-col w-full h-full">
                <X
                  onClick={() => setOpen((prev) => !prev)}
                  className="hidden lg:absolute right-4 top-0 pr-5 w-20 h-20 cursor-pointer"
                />

                <div className="w-full space-y-5 grid grid-cols-12 ">
                  <div className="col-span-12 flex gap-5 items-center select-none focus w-full h-auto px-2 pt-3">
                    <div className="bg-slate-200 dark:bg-slate-200/50 rounded-full p-4  h-14 w-14 flex items-center justify-center select-none">
                      <ModeToggle />
                    </div>
                    <div className="bg-slate-200 dark:bg-slate-200/50 rounded-full h-14 w-14 flex items-center justify-center">
                      <BtnDisabledSound iconSize={6} />
                    </div>
                  </div>

                  <hr className="col-span-12" />

                  <nav className="col-span-12 lg:col-span-6 text-sm font-medium w-fit space-y-6 flex flex-col flex-wrap px-5">
                    <motion.div {...animateNavItem(0.2)}>
                      <SoundLink
                        href="/"
                        text="Accueil"
                        action={() => setOpen(false)}
                        className={`text-clampXl font-bold ${style.menuLink} `}
                      />
                    </motion.div>
                    <motion.div {...animateNavItem(0.4)}>
                      <SoundLink
                        href="/posts"
                        text="Projets"
                        className={`text-clampXl font-bold ${style.menuLink} `}
                        action={() => setOpen(false)}
                      />
                    </motion.div>
                    <motion.div {...animateNavItem(0.6)}>
                      <SoundLink
                        href="/about"
                        text="À&nbsp;propos"
                        className={`text-clampXl font-bold ${style.menuLink}`}
                        action={() => setOpen(false)}
                      />
                    </motion.div>
                  </nav>

                  <div className="col-span-12 lg:col-span-6 h-full w-full px-5 flex flex-col gap-5">
                    <motion.div {...animateNavItem(0.7)}>
                      <p className="py-5">Retrouver moi sur les réseaux </p>
                      <FooterSocialsLinks />
                    </motion.div>
                    <motion.div {...animateNavItem(0.8)}>
                      <p>Contactez moi</p>
                      <motion.div {...animateNavItem(1)}>
                        <Link
                          href="mailto:champidub@gmail.com"
                          className="max-w-fit"
                        >
                          <Mail className="w-20 h-20" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
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
