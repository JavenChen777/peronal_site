'use client';

import { cn, getCategoryColor } from '@/lib/utils';
import type { ToolCategory } from '@/types/tool';
import { useLang } from '@/lib/i18n';

interface CategoryBadgeProps {
  category: ToolCategory;
  className?: string;
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps): JSX.Element {
  const { t } = useLang();
  const colors = getCategoryColor(category);
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
        colors.bg,
        colors.text,
        colors.border,
        className
      )}
    >
      {t.categories[category]}
    </span>
  );
}
