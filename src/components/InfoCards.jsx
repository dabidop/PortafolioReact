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

export default function InfoCards() {
  const [active, setActive] = useState(null);

  const cards = [
    {
      id: "about",
      icon: <User size={28} />,
      title: "About Me",
      description:
        "I'm a fullstack developer with experience in both front-end and back-end development.",
      content: <p>Full About Me content goes here...</p>,
    },
    {
      id: "projects",
      icon: <Briefcase size={28} />,
      title: "My Projects",
      description:
        "Here are some of the amazing projects I've worked on recently.",
      content: <p>Projects list will go here...</p>,
    },
    {
      id: "skills",
      icon: <Settings size={28} />,
      title: "Skills & Tools",
      description:
        "Proficient in JavaScript, React, Node.js, and modern development tools.",
      content: <p>Skills content will go here...</p>,
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
