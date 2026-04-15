"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          {t.heroWelcome} <span>{t.heroHighlight}</span>
        </h1>

        <p>{t.heroDescription}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            {t.viewProjects}
          </a>

          <a href="#contact" className="btn secondary">
            {t.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}