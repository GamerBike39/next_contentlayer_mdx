// import React from 'react'
// import { motion } from 'framer-motion';
// import styles from './styles.module.scss';

// export default function Index() {

//   const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
//   const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

//   const curve = {
//     initial: {
//       d: initialPath
//     },
//     enter: {
//       d: targetPath,
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
//     },
//     exit: {
//       d: initialPath,
//       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
//     }
//   }

//   return (
//     <svg className={`${styles.svgCurve} fill-current`}>
//       <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
//     </svg>
//   )
// }

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const initialPath2 = 'M 0 0 C 161 615 289 607 514 0'

  const x1 = 100;
  const x2 = 200;
  const y1 = 0;
  const y2 = window.innerHeight;
  const centerY = window.innerHeight / 2;

  // Chemin initial avec effet de vague vers le haut
  // const initialPath = `M${x1} ${y2} L${x2} ${y1} L${x2} ${y2} L${x1} ${y2} Q${x1} ${centerY} ${x1 - 100} ${y2}`;

  // Chemin initial 2 avec des variables
  // const initialPath2 = `M ${x1 - 100} ${y1 - 615} C ${x1 - 39} ${y1} ${x1 + 89} ${y1 - 8} ${x1 + 314} ${y1 - 615}`;

  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`


  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg className={`${styles.svgCurve} fill-current`}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}
