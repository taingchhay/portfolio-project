"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Docker", "VS Code", "Figma", "Linux"],
  },
];

export default function SkillsSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="animate-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          Technologies and tools I work with
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-glow rounded-2xl border border-border-custom bg-surface p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-custom bg-background px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
