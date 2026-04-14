"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>my portfolio</span>
        </h1>

        <p>
          I am a Software Developer passionate about building modern web
          applications, interactive experiences and scalable systems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}