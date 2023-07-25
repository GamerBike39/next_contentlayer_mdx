import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer";
import { useEffect, useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { ComboboxDemo } from "./Post_combobox";
import SummaryPost from "./sideNav";

interface NavPostsProps {
  className?: string;
  navigationItems: string[];
}

const NavPost = ({ className, navigationItems }: NavPostsProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isArticleOpen, setIsArticleOpen] = useState(true);
  const [isOpenSummary, setIsOpenSummary] = useState(true);

  const { height, width } = useViewportSize();

  // Fonction pour gérer l'ouverture et la fermeture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuArticle = () => {
    setIsArticleOpen(!isArticleOpen);
  };

  const toggleMenuSummary = () => {
    setIsOpenSummary(!isOpenSummary);
  };

  useEffect(() => {
    if (width < 1475) {
      setIsOpen(false);
    } else if (width >= 1475) {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <>
      <div
        onClick={toggleMenu}
        className="flex gap-2 items-center pl-6 cursor-pointer group"
      >
        <span className="text-gray-700 dark:text-gray-200 border-b">Menu</span>
        <div className="w-3 group-hover:scale-105">
          {isOpen ? <PanelLeftClose size={24} /> : <PanelLeftOpen size={24} />}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              // animation d'ouverture accordéon
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-sm mx-auto  transition-all ease-in-out pl-6 ${
                className ? className : ""
              }`}
            >
              {/* sommaire de l'article */}
              <SummaryPost navigationItems={navigationItems} />
              {/* <div className="flex flex-col flex-wrap gap-2 mt-4 pb-5">
                <div onClick={toggleMenuSummary} className="pl-5 font-bold">
                  {navigationItems.length > 1 ? "Sommaire :" : null}
                </div>
                <ul className="mb-10">
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
                </ul>
              </div> */}

              {/* listes des articles */}
              <ComboboxDemo />
              {/* ****** fin de liste article */}
            </motion.div>
          </>
        )}
        {/* fin menu principal */}
      </AnimatePresence>
    </>
  );
};

export default NavPost;
