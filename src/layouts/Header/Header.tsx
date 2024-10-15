import "./Header.scss";
import "./Header.media.scss";

import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

interface HeaderLayoutProps {
  isScroll: boolean;
}

const Header: React.FC<HeaderLayoutProps> = ({ isScroll }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className={`header ${isScroll ? "scrolled" : ""}`}>
    <a className="header-name" href="/">
      Hai Bang
    </a>
    <div 
        className={`header-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
    >
      <TfiMenuAlt className="header-menu-icon" />
    </div>
    <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`header-nav-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
          aria-current={activeIndex === index ? "page" : undefined}
        >
          {item}
        </li>
      ))}
    </ul>
  </header>
  );
};

export default Header;
