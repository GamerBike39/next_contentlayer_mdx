import { useState } from "react";

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
      )}
    </div>
  );
};

export default SummaryPost;
