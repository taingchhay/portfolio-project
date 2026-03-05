"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring user authentication, product catalog, shopping cart, and Stripe payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using public APIs.",
    tech: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio built with Next.js and Tailwind CSS featuring smooth animations and dark theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

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
              className="card-glow flex flex-col rounded-2xl border border-border-custom bg-surface p-6"
            >
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
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.627 0 12 0z" />
                    </svg>
                    GitHub
                  </span>
                </a>
                <a
                  href={project.live}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
