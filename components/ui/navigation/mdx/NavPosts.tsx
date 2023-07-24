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
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  const { height, width } = useViewportSize();

  // Fonction pour gérer l'ouverture et la fermeture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuArticle = () => {
    setIsArticleOpen(!isArticleOpen);
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
        className="flex gap-2 items-center mb-5 pl-6 cursor-pointer group"
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
              initial={{ x: "-100%" }}
              animate={{
                x: isOpen ? "0%" : "-100%",
                transition: { duration: 0.2 },
              }}
              exit={{ x: "-200%" }}
              transition={{
                duration: 0.2,
              }}
              className={`max-w-sm mx-auto  transition-all ease-in-out pl-6 ${
                className ? className : ""
              }`}
            >
              <SummaryPost navigationItems={navigationItems} />

              <p
                onClick={toggleMenuArticle}
                className="ml-5 border-b border-gray-300  max-w-fit font-bold text-lg mb-5"
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
            </motion.div>
          </>
        )}
        {/* fin menu principal */}
      </AnimatePresence>
    </>
  );
};

export default NavPost;
