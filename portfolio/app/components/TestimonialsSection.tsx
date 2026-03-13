"use client";

import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { testimonials } from "../data/portfolio";
import { QuoteIcon } from "./icons";

export default function TestimonialsSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="animate-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          What People <span className="gradient-text">Say</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          Feedback from colleagues and clients
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`card-glow relative cursor-pointer rounded-2xl border p-6 text-left transition-all ${
                active === i
                  ? "border-accent bg-surface shadow-lg shadow-accent-glow"
                  : "border-border-custom bg-surface"
              }`}
            >
              <QuoteIcon className="mb-4 h-8 w-8 text-accent" />
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {t.name}
                </p>
                <p className="text-xs text-text-secondary">{t.role}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-accent" : "w-2 bg-border-custom"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
