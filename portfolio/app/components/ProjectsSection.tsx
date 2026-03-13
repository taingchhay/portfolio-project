"use client";

import { useScrollAnimation } from "./useScrollAnimation";
import { projects } from "../data/portfolio";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

export default function ProjectsSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="animate-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          A selection of projects I&apos;ve worked on
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-glow flex flex-col overflow-hidden rounded-2xl border border-border-custom bg-surface"
            >
              {/* Gradient thumbnail placeholder */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl font-bold text-text-primary/20">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
