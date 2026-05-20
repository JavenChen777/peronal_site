'use client';

import { cn, getCategoryColor, ALL_CATEGORIES } from '@/lib/utils';
import type { ToolCategory } from '@/types/tool';
import { useLang } from '@/lib/i18n';

interface CategoryFilterProps {
  selected: ToolCategory | 'all';
  counts: Record<ToolCategory | 'all', number>;
  onChange: (category: ToolCategory | 'all') => void;
}

export default function CategoryFilter({
  selected,
  counts,
  onChange,
}: CategoryFilterProps): JSX.Element {
  const { t } = useLang();
  const allCategories: Array<ToolCategory | 'all'> = ['all', ...ALL_CATEGORIES];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {allCategories.map((cat) => {
        const isActive = selected === cat;
        const colors = cat !== 'all' ? getCategoryColor(cat) : null;
        const label = t.categories[cat];
        const count = counts[cat] ?? 0;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all',
              isActive
                ? cat === 'all'
                  ? 'border-brand-500 bg-brand-500/10 text-brand-500'
                  : [colors!.border, colors!.bg, colors!.text]
                : 'border-border bg-background text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground'
            )}
          >
            {label}
            <span
              className={cn(
                'rounded-full px-1.5 py-0.5 text-xs',
                isActive
                  ? cat === 'all'
                    ? 'bg-brand-500/20'
                    : 'bg-black/10 dark:bg-white/10'
                  : 'bg-muted'
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
