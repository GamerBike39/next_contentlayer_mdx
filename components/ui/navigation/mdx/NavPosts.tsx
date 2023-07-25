import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer";
import { useEffect, useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
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

      <AnimatePresence initial={true}>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: isOpen ? "0%" : "100%", opacity: isOpen ? 1 : 0 }}
              animate={{
                x: isOpen ? "0%" : "-100%",
                opacity: isOpen ? 1 : 0,
              }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              className={`max-w-sm mx-auto  transition-all ease-in-out pl-6 ${
                className ? className : ""
              }`}
            >
              {/* sommaire de l'article */}
              {/* <SummaryPost navigationItems={navigationItems} /> */}
              <div className="flex flex-col flex-wrap gap-2 mt-4 pb-5">
                <div onClick={toggleMenuSummary} className="pl-5 font-bold">
                  {navigationItems.length > 1 ? "Sommaire :" : null}
                </div>
                {isOpenSummary && (
                  <motion.ul
                    // animation d'ouverture accordéon
                    initial={{ height: isOpenSummary ? 0 : "auto" }}
                    animate={{ height: isOpenSummary ? "auto" : 0 }}
                    exit={{ height: "auto" }}
                    transition={{ duration: 0.15 }}
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

              {/* listes des articles */}
              <p
                onClick={toggleMenuArticle}
                className="ml-5  max-w-fit font-bold text-lg mb-5"
              >
                Liste des articles :
              </p>
              {isArticleOpen ? (
                <ul className="flex flex-col gap-4">
                  {allPosts.map((post) => (
                    <li key={post._id}>
                      <Link href={post.slug}>
                        {pathname === post.slug ? (
                          <span className="text-blue-500">{post.title}</span>
                        ) : (
                          <span>{post.title}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
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
