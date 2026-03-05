"use client";

import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "10+" },
];

export default function AboutSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="animate-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          Get to know me and my journey
        </p>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border-custom sm:h-80 sm:w-80">
              <Image
                src="/image.png"
                alt="About photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-text-secondary">
              I&apos;m a passionate full-stack developer with a love for creating
              elegant, efficient, and user-friendly web applications. With a
              strong foundation in both frontend and backend technologies, I
              enjoy tackling complex problems and delivering high-quality
              solutions.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-custom bg-surface p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
