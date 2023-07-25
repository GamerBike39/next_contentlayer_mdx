import { useState } from "react";
import { motion } from "framer";

interface NavigationMenuProps {
  navigationItems: string[];
}

const SummaryPost: React.FC<NavigationMenuProps> = ({ navigationItems }) => {
  const [isOpenSummary, setIsOpenSummary] = useState(true);

  const toggleMenuSummary = () => {
    setIsOpenSummary(!isOpenSummary);
  };

  return (
    <div className="flex flex-col flex-wrap gap-2 mt-4 min-h-full">
      <div onClick={toggleMenuSummary} className="pl-5 font-bold">
        {navigationItems.length > 1 ? "Sommaire :" : null}
      </div>
      {isOpenSummary && (
        <motion.ul
          // animation d'ouverture accordéon
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-10"
        >
          {navigationItems.map((nav) => (
            <li key={nav}>
              <a
                href={`#${nav}`}
                className="text-md pl-6 text-slate-700 dark:text-slate-200 decoration-transparent scroll-smooth"
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
