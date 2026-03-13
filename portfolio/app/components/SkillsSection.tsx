"use client";

import { useScrollAnimation } from "./useScrollAnimation";
import { skillCategories } from "../data/portfolio";
import { Icon } from "./icons";

export default function SkillsSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="animate-hidden section-alt px-6 py-24"
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
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={category.iconKey} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-background">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                        style={{ "--fill-width": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
