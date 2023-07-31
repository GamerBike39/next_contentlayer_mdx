import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';



export default function Index({ data, isActive, setSelectedIndicator }) {

  const { title, href, index } = data;

  return (
    <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Link href={href} className={`text-clampXl text-red-400`}>{title}</Link>
      </motion.div>
    </motion.div>
  )
}