interface NavigationMenuProps {
  navigationItems?: string[];
  action?: () => void;
}

const SummaryPost = ({ navigationItems, action }: NavigationMenuProps) => {
  const transformToSubMenu = (nav: any) => {
    if (nav.includes("/")) {
      const [title, ...subMenu] = nav.split("/");
      return [title, subMenu];
    }
    return [nav];
  };

  return (
    <div className="flex flex-col flex-wrap gap-2 mt-4 min-h-full w-fit">
      <ul className="space-y-4">
        {navigationItems?.map((nav, index) => {
          const [title, subMenu] = transformToSubMenu(nav);
          return (
            <li key={`menu-item-${nav}+${index}`}>
              <a
                onClick={action}
                href={`#${title}`}
                className="text-lg pl-6 uppercase text-slate-800 dark:text-slate-200 decoration-transparent scroll-smooth"
              >
                {index + 1}. {title}
              </a>
              <hr className={`${subMenu?.length > 0 && "hidden"} my-2`} />
              {subMenu && subMenu.length > 0 && (
                <>
                  {subMenu.map((item: any, subIndex: number) => (
                    <div
                      key={`sub-menu-item-${item}+${subIndex}`}
                      className="mb-2"
                    >
                      <a
                        onClick={action}
                        href={`#${item}`}
                        className="text-md ml-5 pl-8 font-light italic text-slate-600 dark:text-slate-200 decoration-transparent scroll-smooth"
                      >
                        -{item}
                      </a>
                    </div>
                  ))}
                  <hr />
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
