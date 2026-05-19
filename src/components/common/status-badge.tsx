import { cn } from '@/lib/utils';
import type { ToolStatus } from '@/types/tool';

interface StatusBadgeProps {
  status: ToolStatus;
  className?: string;
}

const STATUS_CONFIG: Record<ToolStatus, { label: string; classes: string }> = {
  stable: {
    label: 'Stable',
    classes:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700',
  },
  beta: {
    label: 'Beta',
    classes:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-700',
  },
  archived: {
    label: 'Archived',
    classes:
      'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
  },
};

export default function StatusBadge({ status, className }: StatusBadgeProps): JSX.Element {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
        config.classes,
        className
      )}
    >
      {config.label}
    </span>
  );
}
