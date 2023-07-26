interface NavigationMenuProps {
  navigationItems?: string[];
}

const SummaryPost = ({ navigationItems }: NavigationMenuProps) => {
  const transformToSubMenu = (nav: any) => {
    if (nav.includes("/")) {
      const [title, ...subMenu] = nav.split("/");
      return [title, subMenu];
    }
    return [nav];
  };

  return (
    <div className="flex flex-col flex-wrap gap-2 mt-4 min-h-full">
      <ul className="mb-10 space-y-3">
        {navigationItems?.map((nav, index) => {
          const [title, subMenu] = transformToSubMenu(nav);
          return (
            <li key={`menu-item-${nav}+${index}`}>
              <a
                href={`#${title}`}
                className="text-md pl-6 text-slate-700 dark:text-slate-200 decoration-transparent scroll-smooth"
              >
                {title}
              </a>
              {subMenu && subMenu.length > 0 && (
                <>
                  {subMenu.map((item: any, subIndex: number) => (
                    <div key={`sub-menu-item-${item}+${subIndex}`}>
                      <a
                        href={`#${item}`}
                        className="text-md pl-8 text-slate-500 dark:text-slate-200 decoration-transparent scroll-smooth"
                      >
                        {item}
                      </a>
                    </div>
                  ))}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SummaryPost;
