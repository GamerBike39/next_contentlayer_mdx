interface NavigationMenuProps {
  navigationItems: string[];
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
      <div className="pl-5 font-bold">
        {navigationItems.length > 1 ? "Sommaire :" : null}
      </div>
      <ul className="mb-10 space-y-3">
        {navigationItems.map((nav) => {
          const [title, subMenu] = transformToSubMenu(nav);
          return (
            <li key={nav}>
              <a
                href={`#${title}`}
                className="text-md pl-6 text-slate-700 dark:text-slate-200 decoration-transparent scroll-smooth"
              >
                {title}
              </a>
              {subMenu && subMenu.length > 0 && (
                <ul>
                  {subMenu.map((item: any) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className="text-md pl-8 text-slate-500 dark:text-slate-200 decoration-transparent scroll-smooth"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SummaryPost;
