'use client';

import Link from 'next/link';
import { Github, Twitter, Mail, ArrowRight, Code2, Cpu, Globe } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const TECH_STACK = [
  {
    nameZh: 'TypeScript',
    nameEn: 'TypeScript',
    descZh: '全面使用类型安全的 JavaScript',
    descEn: 'Type-safe JavaScript for everything',
  },
  {
    nameZh: 'React / Next.js',
    nameEn: 'React / Next.js',
    descZh: '首选 UI 框架',
    descEn: 'UI framework of choice',
  },
  {
    nameZh: 'Tailwind CSS',
    nameEn: 'Tailwind CSS',
    descZh: '原子化 CSS 样式方案',
    descEn: 'Utility-first styling',
  },
  {
    nameZh: 'Go',
    nameEn: 'Go',
    descZh: '后端服务和 CLI 工具',
    descEn: 'Backend services and CLIs',
  },
  {
    nameZh: 'PostgreSQL',
    nameEn: 'PostgreSQL',
    descZh: '关系型数据库',
    descEn: 'Relational database',
  },
  { nameZh: 'Docker', nameEn: 'Docker', descZh: '容器化部署', descEn: 'Containerized deployments' },
];

export default function AboutContent(): JSX.Element {
  const { lang, t } = useLang();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10">
          <Code2 className="h-7 w-7 text-brand-500" aria-hidden="true" />
        </div>
        <h1 className="text-foreground text-3xl font-bold">{t.about.title}</h1>
      </div>

      {/* Bio */}
      <section className="mb-10">
        <p className="text-muted-foreground text-lg leading-relaxed">{t.about.bio1}</p>
        <p className="text-muted-foreground mt-4 leading-relaxed">{t.about.bio2}</p>
        <p className="text-muted-foreground mt-4 leading-relaxed">{t.about.bio3}</p>
      </section>

      {/* Tech stack */}
      <section className="mb-10">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
          <Cpu className="h-5 w-5 text-brand-500" aria-hidden="true" />
          {t.about.techStackTitle}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TECH_STACK.map((item) => (
            <div
              key={item.nameEn}
              className="border-border bg-card rounded-xl border p-4 transition-colors hover:border-brand-500/40"
            >
              <div className="text-foreground font-medium">{item.nameEn}</div>
              <div className="text-muted-foreground mt-0.5 text-sm">
                {lang === 'zh' ? item.descZh : item.descEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
          <Globe className="h-5 w-5 text-brand-500" aria-hidden="true" />
          {t.about.contactTitle}
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
        <h2 className="text-foreground mb-2 text-lg font-semibold">{t.about.ctaTitle}</h2>
        <p className="text-muted-foreground mb-4 text-sm">{t.about.ctaSubtitle}</p>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          {t.about.ctaButton}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
