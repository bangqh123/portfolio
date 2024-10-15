import "./Header.scss";
import "./Header.media.scss";

import React, { useState, useEffect, useMemo } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

interface HeaderLayoutProps {
  isScroll: boolean;
}

const Header: React.FC<HeaderLayoutProps> = ({ isScroll }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", id: "hero" },
      { name: "About", id: "about" },
      { name: "Education", id: "education" },
      { name: "Experience", id: "experience" },
      { name: "Skills", id: "skill" },
      { name: "Projects", id: "project" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

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
            className={`header-nav-item ${
              activeIndex === index ? "active" : ""
            }`}
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
    </header>
  );
};

export default Header;
