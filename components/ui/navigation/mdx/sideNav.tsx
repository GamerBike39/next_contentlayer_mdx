interface NavigationMenuProps {
  navigationItems: string[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ navigationItems }) => {
  return (
    <div className="flex flex-col flex-wrap gap-2 mt-4 fixed bottom-1/2 right-10">
      <h4>Navigation :</h4>
      <ul>
        {navigationItems.map((nav) => (
          <li key={nav}>
            <a
              href={`#${nav}`}
              className="text-sm text-right text-slate-700 dark:text-slate-200 decoration-transparent scroll-smooth"
            >
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
