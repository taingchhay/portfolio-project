"use client";

import { useScrollAnimation } from "./useScrollAnimation";
import { experiences } from "../data/portfolio";
import { BriefcaseIcon, AcademicCapIcon } from "./icons";

export default function ExperienceSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="animate-hidden section-alt px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          My professional journey and education
        </p>

        <div className="relative">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pb-12 pl-10 last:pb-0">
              {/* Connector line */}
              {i < experiences.length - 1 && <div className="timeline-line" />}

              {/* Dot */}
              <div
                className={`timeline-dot ${
                  exp.type === "education" ? "timeline-dot-education" : ""
                }`}
              />

              {/* Card */}
              <div className="card-glow rounded-2xl border border-border-custom bg-surface p-6">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-accent">
                    {exp.type === "work" ? (
                      <BriefcaseIcon className="h-4 w-4" />
                    ) : (
                      <AcademicCapIcon className="h-4 w-4 text-secondary" />
                    )}
                  </span>
                  <span className="text-xs font-medium text-text-secondary">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {exp.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-accent">
                  {exp.company}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
