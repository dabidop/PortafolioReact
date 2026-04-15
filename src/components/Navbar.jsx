"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const links = [
    { name: t.about, href: "#about" },
    { name: t.projects, href: "#projects" },
    { name: t.skills, href: "#skills" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          DevID<span>Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="menu">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <div className="lang-switch">
            <button onClick={() => setLanguage("en")}>🇺🇸</button>
            <button onClick={() => setLanguage("es")}>🇪🇸</button>
          </div>
        </ul>

        {/* Mobile Button */}
        <button className="mobile-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <ul className="mobile-menu">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div id="google_translate_element"></div>
        </>
      )}
    </nav>
  );
}
