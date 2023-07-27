import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { ModeToggle } from '@/components/mode-toggle';
import BtnDisabledSound from "@/components/ui/Sounds/btnDisabledSound/BtnDisabledSound";

const navItems = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Projets",
    href: "/posts",
  },
  {
    title: "About",
    href: "/about",
  },
];

// Ajoute la fonction isPathnameMatch ici
const isPathnameMatch = (pathname, href) => {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/posts" && pathname === "/posts")
  );
};

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu} relative`}>
      <div className={`flex items-center gap-10 justify-around absolute ${styles.options}`}>
        <ModeToggle iconSize={9} />
        <BtnDisabledSound iconSize={10} />
      </div>

      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data, index) => {
              // Utilise la fonction isPathnameMatch pour vérifier l'activité de l'onglet
              const isActive = isPathnameMatch(pathname, data.href);

              return <Link key={index} data={{ ...data, index }} isActive={isActive} setSelectedIndicator={setSelectedIndicator}></Link>
            })
          }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
