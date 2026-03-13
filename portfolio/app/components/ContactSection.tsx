"use client";

import { useScrollAnimation } from "./useScrollAnimation";
import { contactInfo, socialLinks } from "../data/portfolio";
import { MailIcon, MapPinIcon, Icon } from "./icons";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const sectionRef = useScrollAnimation<HTMLElement>("animate-fade-in-up");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="animate-hidden section-alt px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Contact info side */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border-custom bg-surface p-8">
              <h3 className="mb-6 text-lg font-semibold text-text-primary">
                Contact Information
              </h3>

              <div className="mb-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-accent" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-accent" />
                  <span className="text-text-secondary">{contactInfo.location}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-custom text-text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon name={link.iconKey} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form side */}
          <div className="rounded-2xl border border-border-custom bg-surface p-8">
            <h3 className="mb-6 text-lg font-semibold text-text-primary">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
