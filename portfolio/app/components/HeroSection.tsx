import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Background blobs */}
      <div className="blob left-[-10%] top-[20%] h-72 w-72 bg-accent" />
      <div className="blob right-[-5%] bottom-[10%] h-96 w-96 bg-purple-500" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        {/* Text content */}
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">John Doe</span>
          </h1>
          <div className="typing-container text-xl text-text-secondary sm:text-2xl">
            Full Stack Developer
          </div>
          <p className="max-w-md text-base leading-relaxed text-text-secondary">
            I build modern web applications with clean code and great user
            experiences. Passionate about turning ideas into reality through
            technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border-custom px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full animate-glow-pulse" />
            <Image
              src="/PhotoShot.png"
              alt="Profile photo"
              fill
              className="rounded-full border-2 border-accent/30 object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
