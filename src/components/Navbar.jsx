"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const links = [
    { name: t.about, href: "/about" },
    { name: t.projects, href: "/projects" },
    { name: t.skills, href: "/skills" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link className="logo" href={"/"}>
          DevID<span>Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="menu">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
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
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <button onClick={() => setLanguage("en")}>🇺🇸</button>
            <button onClick={() => setLanguage("es")}>🇪🇸</button>
          </ul>
        </>
      )}
    </nav>
  );
}
