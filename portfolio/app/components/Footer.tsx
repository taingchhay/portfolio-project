import { personalInfo, socialLinks, navLinks } from "../data/portfolio";
import { Icon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border-custom px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="text-lg font-bold text-text-primary">
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-2 text-sm text-text-secondary">
              {personalInfo.role}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-text-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-text-primary">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-custom text-text-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={link.iconKey} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border-custom pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
