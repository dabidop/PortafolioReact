"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import SpaceBackground from "@/components/SpaceBackground";

const skills = [
  { name: "Node.js", category: "backend", description: "APIs REST y lógica de negocio" },
  { name: "Django", category: "backend", description: "Backend en Python y ORM" },
  { name: "JWT", category: "auth", description: "Autenticación stateless" },
  { name: "Sessions", category: "auth", description: "Manejo de sesiones y cookies" },
  { name: "AWS", category: "devops", description: "Deploy y gestión de servicios" },
  { name: "Linux", category: "devops", description: "CLI, permisos y configuración" },
];

export default function SkillsPage() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((s) => s.category === filter);

  return (
    <>
      <Navbar />
      <SpaceBackground />
      <div className="navbar-spacer" />

      <main className="about-page flex-1">
        <div className="about-container">
          <h1>Skills</h1>

          {/* 🔘 Filtros */}
          <div className="filters">
            {["all", "backend", "auth", "devops"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={filter === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🧩 Grid de skills */}
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}