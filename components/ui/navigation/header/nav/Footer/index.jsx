import Link from 'next/link';
import styles from './style.module.scss';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const LinkFooter = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/kevin_rouxel/",
    icon: <Instagram />


  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/julienmathieu-devweb/",
    icon: <Linkedin />
  },

  {
    title: "Github",
    href: "https://github.com/gamerbike39",
    icon: <Github />
  },

  {
    title: "Twitter",
    href: "https://twitter.com/gamerbike39",
    icon: <svg className='h-6 w-6' viewBox="0 0 24 24" aria-hidden="true"><g><path fill='currentColor' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>,
  },


]


export default function index() {
  return (
    <div className={styles.footer}>
      {LinkFooter.map((data, index) => {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.3, rotate: 5, color: "#ffd700", y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href={data.href} target='_blank'>
              {data.icon}
            </Link>
          </motion.div>)
      })

      }
    </div>
  )
}
