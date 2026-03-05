export default function Footer() {
  return (
    <footer className="border-t border-border-custom px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
