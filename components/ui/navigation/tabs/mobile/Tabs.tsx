import { motion } from "framer-motion";
import Link from "next/link";

import { useState } from "react";

const tabs = ["Projet", "Contact", "FAQ"];

const ChipTabs = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState(tabs[0]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const isSelectedProjet = () => {
    if (selected === "Projet") {
      return (
        <div className="flex flex-col items-center justify-center columns-2 md:columns-3 lg:columns-4">
          <Link href="/projet" className="bg-yellow-400 p-5">
            Projet
          </Link>
        </div>
      );
    }
    if (selected === "Contact") {
      return (
        <div className="flex flex-col items-center justify-center">
          <Link href="/contact" className="bg-yellow-400 p-5">
            Contact
          </Link>
        </div>
      );
    }
    if (selected === "FAQ") {
      return (
        <div className="flex flex-col items-center justify-center">
          <Link href="/faq" className="bg-yellow-400 p-5">
            FAQ
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="px-4 py-10 bg-slate-900 flex items-center flex-wrap gap-2 justify-center h-auto">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
      <div className="flex flex-col items-center justify-center w-full">
        {isSelectedProjet()}
      </div>
    </div>
  );
};

interface ChipProps {
  text: string;
  selected: any;
  setSelected: any;
}

const Chip = ({ text, selected, setSelected }: ChipProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      // onChange={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>

      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
