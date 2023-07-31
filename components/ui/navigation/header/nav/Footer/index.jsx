
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Mail } from "lucide-react";

const LinkFooter = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/kevin_rouxel/",
    icon: <Instagram size={100} />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/julienmathieu-devweb/",
    icon: <Linkedin size={100} />,
  },

  {
    title: "Github",
    href: "https://github.com/gamerbike39",
    icon: <Github size={100} />,
  },

  {
    title: "Twitter",
    href: "https://twitter.com/gamerbike39",
    icon: (
      <svg className="h-20 w-20" viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </g>
      </svg>
    ),
  },
];

export default function FooterSocialsLinks() {
  const animateNavItem = (delay) => ({
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.2,
      delay,
      type: "spring",
      stiffness: 100,
      // damping: 80,
      bounce: 0.8,
      velocity: 2,

    },
  });

  return (
    <div className={`flex flex-wrap w-full gap-3 items-center mb-10`}>
      <motion.div {...animateNavItem(0.8)}>
        <p>Contactez moi</p>
        <motion.div {...animateNavItem(1)}
          whileHover={{ scale: 1.3 }}
        >
          <Link
            href="mailto:champidub@gmail.com"
            className="max-w-fit"
          >
            {/* <Mail className="w-10 h-10 lg:w-20 lg:h-20" /> */}
            <motion.svg className="w-10 h-10 lg:w-20 lg:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"
              whileHover={{ scale: 1.1, rotate: 5, y: -3 }}
            ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></motion.svg>
          </Link>
        </motion.div>
      </motion.div>
      <motion.p className="w-full"
        {...animateNavItem(0.6)}
      >Suivez moi sur les résaux </motion.p>
      {LinkFooter.map((data, index) => {
        return (
          <motion.div
            key={index}
            {...animateNavItem(0.8 + index * 0.2)}
            className={`mr-2 flex flex-col`}
          >
            <Link href={data.href} target="_blank">
              {data.title === "Instagram" && <InstagramIcon />}
              {data.title === "LinkedIn" && <LinkedinIcon />}
              {data.title === "Github" && <GithubIcon />}
              {data.title === "Twitter" && <TwitterIcon />}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

const CustomIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3, rotate: 5, y: -5 }}
      whileTap={{ scale: 0.9, rotate: -5, y: 5 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        bounce: 0.25,
      }}
    // Ajoutez d'autres propriétés de style au besoin
    >
      {icon}
    </motion.div>
  );
};

export const InstagramIcon = () => <CustomIcon icon={<Instagram className="h-10 w-10 lg:h-10 lg:w-10" />} />;
export const LinkedinIcon = () => <CustomIcon icon={<Linkedin className="h-10 w-10 lg:h-10 lg:w-10" />} />;
export const GithubIcon = () => <CustomIcon icon={<Github className="h-10 w-10 lg:h-10 lg:w-10" />} />;
export const TwitterIcon = () => (
  <CustomIcon
    icon={
      <svg className="h-10 w-10 lg:h-10 lg:w-10" viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </g>
      </svg>
    }
  />
);