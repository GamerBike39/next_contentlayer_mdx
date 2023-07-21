// "use client";

// import { useState } from "react";
// import useSound from "use-sound";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface SoundLinkProps {
//   href: string;
//   text: string;
//   className?: string;
// }

// const SoundLink = ({ href, text, className }: SoundLinkProps) => {
//   const soundUrl = "/sounds/plunger.mp3";

//   const [play, { stop }] = useSound(soundUrl, { volume: 0.15 });
//   const [isHovering, setIsHovering] = useState<boolean>(false);
//   const [clickSound] = useSound("/sounds/pop-down.mp3", { volume: 0.25 });

//   const pathname = usePathname();

//   return (
//     <Link
//       onClick={() => {
//         stop();
//         clickSound();
//       }}
//       onMouseEnter={() => {
//         setIsHovering(true);
//         play();
//       }}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         stop();
//       }}
//       href={href}
//       className={`${className ? className : ""}
//       hover:text-blue-500
//         transition-colors duration-300
//         ${
//           pathname === href
//             ? "text-blue-500 border-b border-blue-400"
//             : "text-gray-500"
//         }
//         `}
//     >
//       {text}
//     </Link>
//   );
// };

// export default SoundLink;

"use client";

import { useState } from "react";
import useSound from "use-sound";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Fonction d'aide pour vérifier si le pathname correspond au href ou commence par /posts/*
const isPathnameMatch = (pathname: string, href: string) => {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/posts" && pathname === "/posts")
  );
};

interface SoundLinkProps {
  href: string;
  text: string;
  className?: string;
}

const SoundLink: React.FC<SoundLinkProps> = ({ href, text, className }) => {
  const soundUrl = "/sounds/plunger.mp3";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.15 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [clickSound] = useSound("/sounds/pop-down.mp3", { volume: 0.25 });

  const pathname = usePathname();

  return (
    <Link
      onClick={() => {
        stop();
        clickSound();
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
      href={href}
      className={`${className ? className : ""}
      hover:text-blue-500
        transition-colors duration-300
        ${
          isPathnameMatch(pathname, href)
            ? "text-blue-500 border-b border-blue-400"
            : "text-gray-500"
        }
        `}
    >
      {text}
    </Link>
  );
};

export default SoundLink;
