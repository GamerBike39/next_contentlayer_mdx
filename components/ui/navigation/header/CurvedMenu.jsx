'use client'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import useSound from 'use-sound';
import { useSoundContext } from "@/providers/SoundProvider";
import { useScrollLock } from '@/hooks/use-scroll-lock/useScrollLock';
import Hamburger from 'hamburger-react'
import NavBar from "@/components/ui/navigation/NavBar";


export default function CurvedMenu() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const { soundEnabled } = useSoundContext();
  const [playOn] = useSound("/sounds/openBubble.mp3", { volume: 0.25, playbackRate: 0.8, soundEnabled });
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useEffect(() => {
    if (isActive) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isActive])




  return (
    <>
      <div>
        <div className={`w-full absolute right-0 left-0 top-1 flex justify-around items-center max-w-4xl mx-auto`}>
          <div className='relative  w-full'>
            <NavBar />
          </div>
          <div className='fixed z-[2000] right-2 '>
            <Hamburger toggled={isActive} toggle={setIsActive} />
          </div>
        </div>
      </div>
      <div >
        <AnimatePresence mode="wait">
          {isActive && (
            <>
              <motion.div className='absolute top-0 left-0 w-full min-h-screen h-[150%] backdrop-blur-md z-50 bg-black bg-opacity-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setIsActive(false)
                }}
              />
              <Nav />
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
