'use client'
import styles from './style.module.scss'
import { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import useSound from 'use-sound';
import { useSoundContext } from "@/providers/SoundProvider";
import { useScrollLock } from '@/hooks/use-scroll-lock/useScrollLock';


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
        <div className={`${styles.header}`}>
          <div className='px-10'>Logo</div>

          <div onClick={() => {
            setIsActive(!isActive)
            playOn()
          }} className={styles.button}>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <div >
        <AnimatePresence mode="wait">
          {isActive && (
            <>
              <motion.div className='absolute top-0 left-0 w-full h-full backdrop-blur-md z-50 bg-black bg-opacity-50'
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
