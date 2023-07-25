"use client";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useViewportSize } from "@/hooks/use-viewport-size/use-viewport-size";
import { ArticleMenu } from "./Post_combobox";
import SummaryPost from "./sideNav";

interface NavPostsProps {
  className?: string;
  navigationItems?: string[];
  params?: {
    slug: string[];
  };
}

const NavPost: FC<NavPostsProps> = ({ params, navigationItems, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { width } = useViewportSize();

  // Fonction pour gérer l'ouverture et la fermeture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

      {isOpen && (
        <>
          <div
            className={`max-w-sm mx-auto  transition-all ease-in-out pl-6 ${
              className ? className : ""
            }`}
          >
            {/* sommaire de l'article */}
            <SummaryPost navigationItems={navigationItems} />

            {/* listes des articles */}
            <ArticleMenu params={params} />
            {/* ****** fin de liste article */}
          </div>
        </>
      )}
      {/* fin menu principal */}
    </>
  );
};

export default NavPost;
