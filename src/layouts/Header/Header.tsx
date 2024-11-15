import "./Header.scss";
import "./Header.media.scss";

import React, { useState, useMemo } from "react";
import { ICONS } from "../../assets/icons";
import HeaderNav from "./partials/HeaderNav";

interface HeaderLayoutProps {
  isScroll: boolean;
}

const Header: React.FC<HeaderLayoutProps> = ({ isScroll }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", link: "/" },
      { name: "Education", link: "/education" },
      { name: "Experience", link: "/experience" },
      { name: "Project", link: "/project" },
      { name: "Contact", link: "/contact" },
    ],
    []
  );

  return (
    <header className={`header ${isScroll ? "scrolled" : ""}`}>
      <a className="header-name" href="/">
        HaiBang
      </a>
      <div
        className={`header-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      > 
        <img 
          className="header-menu-icon" 
          src={
            menuOpen ? (ICONS.CLOSE) : (ICONS.HAMBURGER)
          } 
          alt="Menu Icon"
        />
      </div>
      <HeaderNav
        navItems={navItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
};

export default Header;
