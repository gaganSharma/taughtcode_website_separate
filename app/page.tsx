
"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "MOBILE APPLICATION",
    title: "Municipal Complaint Management",
    description:
      "A citizen-focused application for reporting complaints and supporting administrative workflows.",
    stack: ["React Native", "Expo", "Firebase"],
    href: "#contact",
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT",
    title: "Content-driven Web Experiences",
    description:
      "Responsive websites with content management, search visibility, and practical business requirements in mind.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#contact",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Web development",
    description:
      "Responsive, accessible websites built with maintainability and performance in mind.",
  },
  {
    icon: Layers3,
    title: "Full-stack systems",
    description:
      "Interfaces, APIs, databases, authentication, and the integrations that connect them.",
  },
  {
    icon: Lightbulb,
    title: "Exploration & learning",
    description:
      "Experimenting with new technologies and finding practical solutions to real problems.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F6] text-[#20211F]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAF9F6]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight"
          >
            Gagan Sharma<span className="text-[#4361EE]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#work">Projects</a>
            <a className="nav-link" href="#exploring">Exploring</a>
            <a
              href="#contact"
              className="rounded-lg bg-[#20211F] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#4361EE]"
            >
              Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg border border-black/10 p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-black/10 px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {[
                ["About", "#about"],
                ["Projects", "#work"],
                ["Exploring", "#exploring"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="py-1 text-sm font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16"
      >
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4361EE]">
            <span className="h-2 w-2 rounded-full bg-[#4361EE]" />
            Developer · Builder · Curious mind
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Building things for the web.
            <span className="mt-2 block text-[#777770]">
              Figuring things out along the way.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#62625C] sm:text-lg">
            I'm Gagan, a developer who enjoys turning ideas into useful
            digital products — from the interfaces people see to the
            systems that make everything work.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-lg bg-[#20211F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#4361EE]"
            >
              Explore my work <ArrowUpRight className="ml-1 inline" size={16} />
            </a>
            <a
              href="#about"
              className="rounded-lg border border-black/15 px-5 py-3 text-sm font-medium transition hover:border-[#4361EE] hover:text-[#4361EE]"
            >
              A little about me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#E5E9FF]" />
          <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777770]">
              A note about my approach
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight">
              Understand the problem. Build the solution. Keep improving it.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#62625C]">
              I care about the reasoning behind a product as much as the
              code that powers it.
            </p>
            <div className="mt-7 border-t border-black/10 pt-5">
              <p className="text-sm font-medium">Currently focused on</p>
              <p className="mt-2 text-sm leading-6 text-[#777770]">
                Better software, thoughtful engineering, and learning by building.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24">
          <div>
            <p className="section-label">01 / ABOUT ME</p>
            <h2 className="section-heading mt-4">
              More than just writing code.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#62625C]">
            <p>
              I work across the stack, building web experiences and
              applications that connect user interfaces, APIs, databases,
              and external services.
            </p>
            <p>
              I enjoy understanding how the pieces fit together, working
              through technical constraints, and making deliberate choices
              about how a solution should be built.
            </p>
            <p>
              I'm also a learner by nature. There's always another concept
              to explore, a better approach to discover, or an idea worth
              turning into a working product.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <p className="section-label">02 / WHAT I DO</p>
        <h2 className="section-heading mt-4 max-w-xl">
          Different layers. One connected product.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <Icon size={25} strokeWidth={1.6} className="text-[#4361EE]" />
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#62625C]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <p className="section-label">03 / SELECTED WORK</p>
          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="section-heading max-w-xl">
              A few things I've been building.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[#777770]">
              Projects that reflect practical problem-solving, technical
              decisions, and lessons learned along the way.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-black/10 bg-[#FAF9F6] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#777770]">
                    {project.type}
                  </span>
                  <span className="text-sm text-[#777770]">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-[#62625C]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-[#62625C]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition group-hover:text-[#4361EE]"
                >
                  Discuss a similar project <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="exploring" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl rounded-2xl border border-black/10 bg-[#EEF0FF] p-7 sm:p-10">
          <p className="section-label">04 / CURRENTLY EXPLORING</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Still learning. Still building.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#555A75] sm:text-base">
            I'm interested in understanding systems more deeply, exploring
            AI integrations, improving my engineering practices, and
            learning by building things beyond my comfort zone.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#20211F] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B7C2FF]">
              05 / GET IN TOUCH
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Have an idea worth building?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
              Whether you're looking for a developer or simply want to
              discuss an idea, I'd be happy to hear from you.
            </p>
          </div>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#20211F] transition hover:bg-[#B7C2FF]"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="bg-[#20211F]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/15 px-5 py-6 text-sm text-white/55 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gagan Sharma. Built with care.</p>
          <div className="flex gap-5">
            <a className="hover:text-white" href="YOUR_GITHUB_URL">GitHub</a>
            <a className="hover:text-white" href="YOUR_LINKEDIN_URL">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

