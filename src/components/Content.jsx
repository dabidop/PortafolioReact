"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {

  const t = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          {t.heroWelcome} <span>{t.heroHighlight}</span>
        </h1>

        <p>{t.heroDescription}</p>

        <div className="hero-buttons">
          <a href="/projects" className="btn primary">
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