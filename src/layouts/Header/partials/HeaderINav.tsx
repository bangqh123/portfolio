import React from "react";

interface NavItem {
  name: string;
  id: string;
}

interface THeaderNavProps {
  navItems: NavItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  menuOpen: boolean;
}

const HeaderNav: React.FC<THeaderNavProps> = ({
  navItems,
  activeIndex,
  setActiveIndex,
  menuOpen,
}) => {
  return (
    <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`header-nav-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(index);
            const section = document.getElementById(item.id);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-current={activeIndex === index ? "page" : undefined}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
