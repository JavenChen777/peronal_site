import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { tools } from '@/data/tools';
import { sortTools, ALL_CATEGORIES, CATEGORY_LABELS, getCategoryColor } from '@/lib/utils';
import ToolGrid from '@/components/tools/tool-grid';
import type { ToolCategory } from '@/types/tool';
import { cn } from '@/lib/utils';

const featuredTools = sortTools(tools)
  .filter((t) => t.featured)
  .slice(0, 6);
const totalTools = tools.length;
const totalCategories = new Set(tools.map((t) => t.category)).size;

const HOT_TAGS: Array<{ label: string; category: ToolCategory }> = [
  { label: 'Developer', category: 'developer' },
  { label: 'Design', category: 'design' },
  { label: 'Data', category: 'data' },
  { label: 'Media', category: 'media' },
  { label: 'Productivity', category: 'productivity' },
];

export default function HomePage(): JSX.Element {
  return (
    <div>
      {/* Hero */}
      <section className="border-border to-background relative overflow-hidden border-b bg-gradient-to-b from-brand-900/20 py-20 dark:from-brand-900/30">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-500">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Open source tools, free forever
          </div>
          <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tools I Built for{' '}
            <span className="bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
              Developers
            </span>
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            A growing collection of utilities and small software I&apos;ve built to scratch my own
            itches. No login, no tracking, just tools that work.
          </p>

          {/* Hot tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {HOT_TAGS.map(({ label, category }) => {
              const colors = getCategoryColor(category);
              return (
                <Link
                  key={category}
                  href={`/tools?category=${category}`}
                  className={cn(
                    'rounded-full border px-3 py-1 text-sm font-medium transition-all hover:scale-105',
                    colors.bg,
                    colors.text,
                    colors.border
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-border bg-muted/30 border-b">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 py-5 text-center sm:px-6">
          <div>
            <div className="text-foreground text-2xl font-bold">{totalTools}</div>
            <div className="text-muted-foreground text-xs">Total Tools</div>
          </div>
          <div className="bg-border h-8 w-px" aria-hidden="true" />
          <div>
            <div className="text-foreground text-2xl font-bold">{totalCategories}</div>
            <div className="text-muted-foreground text-xs">Categories</div>
          </div>
          <div className="bg-border h-8 w-px" aria-hidden="true" />
          <div>
            <div className="text-foreground text-2xl font-bold">100%</div>
            <div className="text-muted-foreground text-xs">Open Source</div>
          </div>
        </div>
      </section>

      {/* Featured tools */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">Featured Tools</h2>
            <p className="text-muted-foreground mt-1 text-sm">Handpicked favorites</p>
          </div>
          <Link
            href="/tools"
            className="flex items-center gap-1 text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
          >
            View All Tools
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ToolGrid tools={featuredTools} />
      </section>

      {/* All categories */}
      <section className="border-border bg-muted/20 border-t">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-foreground mb-6 text-xl font-bold">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ALL_CATEGORIES.map((cat) => {
              const colors = getCategoryColor(cat);
              const count = tools.filter((t) => t.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/tools?category=${cat}`}
                  className={cn(
                    'flex flex-col items-center rounded-xl border p-4 text-center transition-all hover:scale-105',
                    colors.bg,
                    colors.border
                  )}
                >
                  <span className={cn('text-sm font-medium', colors.text)}>
                    {CATEGORY_LABELS[cat]}
                  </span>
                  <span className={cn('mt-1 text-xs', colors.text, 'opacity-70')}>
                    {count} tools
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
