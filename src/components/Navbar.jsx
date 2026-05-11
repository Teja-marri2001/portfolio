// Navbar.jsx — Sticky navigation with mobile hamburger menu
import { useState, useEffect } from "react";
import { personal, social } from "../data/portfolioData";
import "../styles/Navbar.css";

// Nav links — add/remove sections here
const NAV_LINKS = [
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow/blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          {personal.name.split(" ")[0]}<span>.</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        {/* Resume button (desktop) */}
        <a
          href={personal.resumeLink}
          className="navbar__resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href={personal.resumeLink}
          className="navbar__resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
