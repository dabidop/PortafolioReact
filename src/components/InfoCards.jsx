/*import { User, Briefcase, Settings } from "lucide-react";

export default function InfoCards() {
  const cards = [
    {
      icon: <User size={28} />,
      title: "About Me",
      description:
        "I'm a fullstack developer with experience in both front-end and back-end development.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "My Projects",
      description:
        "Here are some of the amazing projects I've worked on recently.",
    },
    {
      icon: <Settings size={28} />,
      title: "Skills & Tools",
      description:
        "Proficient in JavaScript, React, Node.js, and modern development tools.",
    },
  ];

  return (
    <section className="info-section">
      <div className="info-container">
        {cards.map((card, index) => (
          <div key={index} className="info-card">
            <div className="info-header">
              {card.icon}
              <h3>{card.title}</h3>
            </div>

            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  */

import { useState } from "react";
import { User, Briefcase, Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function InfoCards() {
  const [active, setActive] = useState(null);
  const { language } = useLanguage();
  const t = translations[language].infoCards;

  const cards = [
    {
      id: "about",
      icon: <User size={28} />,
      title: t.about.title,
      description: t.about.description,
      content: (
        <>
          <p>{t.about.content}</p>

          <a href="/david-alvarez-cv.pdf" download className="cv-button">
            {t.about.cv}
          </a>
        </>
      ),
    },
    {
      id: "projects",
      icon: <Briefcase size={28} />,
      title: t.projects.title,
      description: t.projects.description,
      content: (
        <ul className="projects-list">
          <li>
            <a href="https://star-wars-7hvc.onrender.com/" target="_blank">
              {t.projects.project1}
            </a>
          </li>

          <li>
            <a href="https://snakegame-3hll.onrender.com" target="_blank">
              {t.projects.project2}
            </a>
          </li>

          <li>
            <a href="https://star-wars-7hvc.onrender.com/" target="_blank">
              {t.projects.project3}
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: "skills",
      icon: <Settings size={28} />,
      title: t.skills.title,
      description: t.skills.description,
      content: <p>{t.skills.content}</p>,
    },
  ];

  const toggleCard = (id) => {
    setActive(active === id ? null : id);
  };

  const activeCard = cards.find((c) => c.id === active);

  return (
    <section className="info-section">
      {/* GRID */}
      <div className="info-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`info-card ${active === card.id ? "active" : ""}`}
            onClick={() => toggleCard(card.id)}
          >
            <div className="info-header">
              {card.icon}
              <h3>{card.title}</h3>
            </div>

            <p>{card.description}</p>

            {/* 📱 MOBILE CONTENT */}
            {active === card.id && (
              <div className="info-content mobile-only">{card.content}</div>
            )}
          </div>
        ))}
      </div>

      {/* 🖥 DESKTOP EXPANDED PANEL */}
      {activeCard && (
        <div className="info-expanded">
          <div className="info-content desktop-only">{activeCard.content}</div>
        </div>
      )}
    </section>
  );
}
