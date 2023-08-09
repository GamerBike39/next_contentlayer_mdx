"use client";

import SoundLink from "../Sounds/SoundLink";
import { ModeToggle } from "@/components/mode-toggle";
import BtnDisabledSound from "../Sounds/btnDisabledSound/BtnDisabledSound";

const NavBar = ({}) => {
  return (
    <div className="flex gap-2 items-center lg:justify-between w-1/3 lg:w-full relative z-10 px-2">
      <ModeToggle />
      <BtnDisabledSound />
      <nav className="hidden ml-auto text-sm font-medium space-x-6 sm:flex">
        <SoundLink href="/" text="Accueil" />
        <SoundLink href="/posts" text="Articles" />
        <SoundLink href="/#projets" text="Projets" />
        {/* <SoundLink href="/blog" text="Blog" /> */}
        <SoundLink href="/about" text="À&nbsp;propos" />
      </nav>
    </div>
  );
};

export default NavBar;
