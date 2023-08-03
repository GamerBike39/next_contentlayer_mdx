'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import useSound from 'use-sound';
import { useSoundContext } from "@/providers/SoundProvider";
import { useClickOutside } from '@/hooks/use-click-outside/UseClickOutside';
import { useScrollLock } from '@/hooks/use-scroll-lock/useScrollLock';

export default function CurvedMenu() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const { soundEnabled } = useSoundContext();
  const [playOn] = useSound("/sounds/openBubble.mp3", { volume: 0.25, playbackRate: 0.8, soundEnabled });
  const { lockScroll, unlockScroll } = useScrollLock();
  const ref = useClickOutside(() => setIsActive(false));



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
      <div ref={ref}>
        <div className={`${styles.header}`}>
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
            <Nav />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
