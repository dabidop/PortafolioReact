"use client";

import Image from "next/image";
import { useState } from "react";
import projects from "@/content/projects/projects.json";

export default function ProjectShowcase({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };
  return (
    <section
      className="
        w-full
        max-w-5xl
        mx-auto
        my-2 md:my-2
        px-4 md:px-8
        py-6 md:py-8
        rounded-2xl
        bg-neutral-900/40
        backdrop-blur
        border border-neutral-800
        space-y-6 md:space-y-8
        "
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
        {project.title}
      </h2>

      <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto text-center text-sm md:text-base">
        {project.description}
      </p>

      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded"
        >
          ←
        </button>

        <Image
          src={project.images[currentIndex]}
          alt={project.title}
          fill
          className="object-cover rounded-xl z-0"
        />

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded"
        >
          →
        </button>
      </div>

      <div
        className="
        flex
        flex-col md:flex-row
        md:justify-between
        md:items-center
        gap-6
        "
      >
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-neutral-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            className="px-4 py-2 bg-white text-black rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 border border-neutral-600 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
