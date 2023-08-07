"use client";

import SoundLink from "../Sounds/SoundLink";
import { ModeToggle } from "@/components/mode-toggle";
import BtnDisabledSound from "../Sounds/btnDisabledSound/BtnDisabledSound";

const NavBar = ({}) => {
  return (
    <div className="hidden md:flex flex-wrap items-center justify-between">
      <ModeToggle />
      <BtnDisabledSound />
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-wrap">
        <SoundLink href="/" text="Accueil" />
        <SoundLink href="/posts" text="Projets" />
        {/* <SoundLink href="/blog" text="Blog" /> */}
        <SoundLink href="/about" text="À&nbsp;propos" />
      </nav>
    </div>
  );
};

export default NavBar;
