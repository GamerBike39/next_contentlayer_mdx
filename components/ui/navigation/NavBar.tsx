"use client";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { FC, useState } from "react";
import useSound from "use-sound";
import SoundLink from "./SoundLink";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [soundHover] = useSound("/sounds/plunger.mp3", { volume: 0.35 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap items-center justify-between">
      <ModeToggle />
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-wrap">
        <SoundLink href="/" text="Home" />
        <SoundLink href="/posts" text="Projets" />
        <SoundLink href="/blog" text="Blog" />
        <SoundLink href="/about" text="A&nbsp;propos" />
      </nav>
    </div>
  );
};

export default NavBar;
