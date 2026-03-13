/* ============================================
   PORTFOLIO DATA — Single source of truth
   Replace placeholder values with your real info.
   ============================================ */

// ─── Type Definitions ──────────────────────────

export interface PersonalInfo {
  name: string;
  role: string;
  roles: string[]; // for typing animation rotation
  tagline: string;
  bio: string[];
  photo: string;
  aboutPhoto: string;
  cvUrl: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconKey: "github" | "linkedin" | "twitter";
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  title: string;
  iconKey: "frontend" | "backend" | "tools";
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  gradient: string; // Tailwind gradient classes for thumbnail
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

// ─── Nav Links ─────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─── Personal Info ─────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React Specialist",
    "TypeScript Enthusiast",
    "Open Source Contributor",
  ],
  tagline:
    "I build modern web applications with clean code and great user experiences. Passionate about turning ideas into reality through technology.",
  bio: [
    "I'm a passionate full-stack developer with a love for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and delivering high-quality solutions.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  photo: "/PhotoShot.png",
  aboutPhoto: "/image.png",
  cvUrl: "/cv.pdf",
};

// ─── Contact ───────────────────────────────────

export const contactInfo: ContactInfo = {
  email: "hello@example.com",
  location: "San Francisco, CA",
};

// ─── Social Links ──────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", iconKey: "github" },
  { label: "LinkedIn", href: "#", iconKey: "linkedin" },
  { label: "Twitter", href: "#", iconKey: "twitter" },
];

// ─── Stats ─────────────────────────────────────

export const stats: Stat[] = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
];

// ─── Skills ────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconKey: "frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    iconKey: "backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Other",
    iconKey: "tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
      { name: "Linux", level: 75 },
    ],
  },
];

// ─── Projects ──────────────────────────────────

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring user authentication, product catalog, shopping cart, and Stripe payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "#",
    live: "#",
    gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using public APIs.",
    tech: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    github: "#",
    live: "#",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio built with Next.js and Tailwind CSS featuring smooth animations and dark theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
  },
];

// ─── Experience ────────────────────────────────

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2024 – Present",
    description:
      "Lead frontend architecture for a SaaS platform serving 10K+ users. Migrated legacy jQuery codebase to React/TypeScript, reducing bundle size by 40%.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2022 – 2024",
    description:
      "Built and maintained multiple client-facing web applications using Next.js, Node.js, and PostgreSQL. Implemented CI/CD pipelines with GitHub Actions.",
    type: "work",
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2021 – 2022",
    description:
      "Developed responsive websites and landing pages for clients across various industries. Collaborated with designers to implement pixel-perfect UI.",
    type: "work",
  },
  {
    title: "B.Sc. Computer Science",
    company: "State University",
    period: "2017 – 2021",
    description:
      "Graduated with honors. Focused on algorithms, data structures, and web technologies. Led the university coding club.",
    type: "education",
  },
];

// ─── Testimonials ──────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Jane Smith",
    role: "Product Manager at Tech Corp",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Mike Johnson",
    role: "CTO at StartupXYZ",
    content:
      "One of the most talented developers I've worked with. They have a rare ability to understand both technical and business requirements.",
  },
  {
    name: "Sarah Williams",
    role: "Lead Designer at Digital Agency",
    content:
      "A pleasure to collaborate with. They translate designs into flawless code and always suggest improvements to enhance the user experience.",
  },
];
