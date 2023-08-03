"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Curve from './Curve';
import Footer from './Footer';
import { ModeToggle } from '@/components/mode-toggle';
import BtnDisabledSound from "@/components/ui/Sounds/btnDisabledSound/BtnDisabledSound";
import SoundLink from '@/components/ui/Sounds/SoundLink';

// Ajoute la fonction isPathnameMatch ici
const isPathnameMatch = (pathname, href) => {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/posts" && pathname === "/posts")
  );
};

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);


  const animateNavItem = (delay) => ({
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: "easeIn", delay: delay, type: "spring", bounce: 0.5, stiffness: 100 },

  });


  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`menu z-[100] p-14`}>
      <div className={`flex items-center w-full gap-5 mb-5`}>
        <ModeToggle iconSize={9} />
        <BtnDisabledSound iconSize={10} />
      </div>

      <div className={`h-full flex flex-col justify-around group`}>

        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className='flex flex-col gap-1 mt-5'>
          <div className="mb-1 flex items-center w-full justify-between text-[11px] font-extralight pb-1 border-b border-gray-600 uppercase tracking-widest">
            <p>Navigation</p>
          </div>
          <motion.div className='menu-item' {...animateNavItem(0.4)}>
            <SoundLink
              href="/"
              text="Accueil"
              className={`text-clampXl font-bold`}
            />
          </motion.div>
          <motion.div {...animateNavItem(0.6)}>
            <SoundLink
              href="/posts"
              text="Projets"
              className={`text-clampXl font-bold `}

            />
          </motion.div>
          <motion.div {...animateNavItem(0.8)}>
            <SoundLink
              href="/about"
              text="À&nbsp;propos"
              className={`text-clampXl font-bold  `}
            />
          </motion.div>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
