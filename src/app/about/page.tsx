import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, Twitter, Mail, ArrowRight, Code2, Cpu, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the developer behind DevToolbox.',
};

const TECH_STACK = [
  { name: 'TypeScript', desc: 'Type-safe JavaScript for everything' },
  { name: 'React / Next.js', desc: 'UI framework of choice' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling' },
  { name: 'Go', desc: 'Backend services and CLIs' },
  { name: 'PostgreSQL', desc: 'Relational database' },
  { name: 'Docker', desc: 'Containerized deployments' },
];

export default function AboutPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10">
          <Code2 className="h-7 w-7 text-brand-500" aria-hidden="true" />
        </div>
        <h1 className="text-foreground text-3xl font-bold">About Me</h1>
      </div>

      {/* Bio */}
      <section className="mb-10">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Hi! I&apos;m a developer who loves building small, focused tools that solve real problems.
          DevToolbox is my personal collection of utilities — things I built because they made{' '}
          <em>my</em> workflow faster, and I figured they might help you too.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Most of these tools were built with the help of AI — rapidly turning everyday needs into
          working software is one of the things I enjoy most about modern development.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          I believe great developer tools should be fast, simple, and private.
        </p>
      </section>

      {/* Tech stack */}
      <section className="mb-10">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
          <Cpu className="h-5 w-5 text-brand-500" aria-hidden="true" />
          Tech Stack & Interests
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TECH_STACK.map((item) => (
            <div
              key={item.name}
              className="border-border bg-card rounded-xl border p-4 transition-colors hover:border-brand-500/40"
            >
              <div className="text-foreground font-medium">{item.name}</div>
              <div className="text-muted-foreground mt-0.5 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
          <Globe className="h-5 w-5 text-brand-500" aria-hidden="true" />
          Contact & Links
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <Twitter className="h-4 w-4" aria-hidden="true" />
            Twitter / X
          </a>
          <a
            href="mailto:hello@example.com"
            className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-6">
        <h2 className="text-foreground mb-2 text-lg font-semibold">Explore the tools</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Check out everything I&apos;ve built. It&apos;s all free and open source.
        </p>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          Browse All Tools
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
