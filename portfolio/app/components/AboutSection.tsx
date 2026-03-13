"use client";

import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { personalInfo, stats } from "../data/portfolio";
import CountUpStat from "./CountUpStat";

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
                src={personalInfo.aboutPhoto}
                alt={`${personalInfo.name} about photo`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}

            {/* Stats with animated count-up */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-custom bg-surface p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">
                    <CountUpStat value={stat.value} suffix={stat.suffix} />
                  </p>
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
