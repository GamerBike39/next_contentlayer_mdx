import { useState } from "react";
import { motion } from "framer";

interface NavigationMenuProps {
  navigationItems: string[];
}

const SummaryPost: React.FC<NavigationMenuProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col flex-wrap gap-2 mt-4">
      <div onClick={toggleMenu} className="pl-5 font-bold">
        Sommaire :
      </div>
      {isOpen && (
        <motion.ul
          // animation d'ouverture accordéon
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          {navigationItems.map((nav) => (
            <li key={nav}>
              <a
                href={`#${nav}`}
                className="text-sm text-right text-slate-700 dark:text-slate-200 decoration-transparent scroll-smooth"
              >
                {nav}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default SummaryPost;
