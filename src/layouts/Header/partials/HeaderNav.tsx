import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  link: string;
}

interface THeaderNavProps {
  navItems: NavItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const HeaderNav: React.FC<THeaderNavProps> = ({
  navItems,
  activeIndex,
  setActiveIndex,
  menuOpen,
  setMenuOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.link === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, navItems, setActiveIndex]);

  const handleNavigation = (index: number, link: string) => {
    setActiveIndex(index);
    setMenuOpen(false);
    navigate(link);
  };

  return (
    <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
      {navItems.map((item, index) => (
        <li
          key={item.link}
          className={`header-nav-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleNavigation(index, item.link)}
          aria-current={activeIndex === index ? "page" : undefined}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
