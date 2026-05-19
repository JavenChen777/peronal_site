import { cn, getCategoryColor, CATEGORY_LABELS } from '@/lib/utils';
import type { ToolCategory } from '@/types/tool';

interface CategoryBadgeProps {
  category: ToolCategory;
  className?: string;
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps): JSX.Element {
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
      {CATEGORY_LABELS[category]}
    </span>
  );
}
