"use client";
import { FC, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { ArticleMenu } from "./Post_combobox";
import SummaryPost from "./SummaryPost";

interface NavPostsProps {
  className?: string;
  navigationItems?: string[];
  params?: {
    slug: string[];
  };
}

const NavPost: FC<NavPostsProps> = ({ params, navigationItems, className }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  const { width } = useViewportSize();

  // Fonction pour gérer l'ouverture et la fermeture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    !isSearchOpen && setIsSearchOpen(true);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
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
        onClick={width < 1475 ? toggleMenu : () => {}}
        className="flex gap-2 items-center pl-6 cursor-pointer group"
      >
        <span className="text-gray-700 dark:text-gray-200 border-b">Menu</span>
        <div className="w-3 group-hover:scale-105">
          <Menu />
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className={`max-w-sm mx-auto  transition-all ease-in-out pl-6 
            ${className ? className : ""}
            ${isSearchOpen ? "h-auto" : "h-96"}`}
          >
            {/* sommaire de l'article */}
            {isSearchOpen && (
              <SummaryPost
                navigationItems={navigationItems}
                action={width < 1475 ? toggleMenu : () => {}}
              />
            )}

            {/* listes des articles */}
            <div
              onClick={width < 1475 ? toggleSearch : () => {}}
              className={`${isSearchOpen ? "mt-6" : ""}`}
            >
              <ArticleMenu
                params={params}
                action={width < 1475 ? toggleMenu : () => {}}
              />
            </div>
            {/* ****** fin de liste article */}
          </div>
        </>
      )}
      {/* fin menu principal */}
    </>
  );
};

export default NavPost;
