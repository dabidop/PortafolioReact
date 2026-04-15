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
      content: (
        <>
          <p>
            Hello, my name is David, im 27 years old and im a Fullstack software
            developer, I am a person very interested in technology, networks and
            telecommunications, with a focus on software development.<br></br> I
            graduated from SENA in 2025 with a degree in Software Development,
            where I built strong foundations in programming, problem solving,
            and system design. Since then, I’ve continued learning
            independently, focusing on real-world development and continuously
            improving my technical skills. I consider myself a flexible
            developer and fast learner, capable of adapting quickly to new
            technologies, tools, and project requirements.<br></br>I enjoy
            understanding problems deeply and transforming ideas into
            functional, scalable applications. My main stack currently includes
            JavaScript, React, Node.js, Python, and Linux, and I strongly
            believe in learning by building. Instead of limiting myself to
            tutorials, I focus on creating complete products from scratch —
            designing architecture, implementing features, and thinking about
            long-term scalability.
          </p>
          <a href="/david-alvarez-cv.pdf" download className="cv-button">
            View CV
          </a>
        </>
      ),
    },
    {
      id: "projects",
      icon: <Briefcase size={28} />,
      title: "My Projects",
      description:
        "Here are some of the amazing projects I've worked on recently.",
      content: (
        <ul className="projects-list">
          <li>
            <a
              href="https://star-wars-7hvc.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App with Vue.js that consumes Star Wars API
            </a>
          </li>

          <li>
            <a
              href="https://snakegame-3hll.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snake Game made with basic JavaScript
            </a>
          </li>

          <li>
            <a
              href="https://star-wars-7hvc.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Another app that will be announced soon
            </a>
          </li>

        </ul>
      ),
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
