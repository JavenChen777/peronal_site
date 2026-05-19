'use client';

import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search tools…',
  className,
}: SearchBarProps): JSX.Element {
  return (
    <div role="search" className={cn('relative', className)}>
      <Search
        className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search tools"
        className={cn(
          'border-border bg-background w-full rounded-xl border py-2.5 pl-10 pr-10 text-sm',
          'text-foreground placeholder:text-muted-foreground',
          'outline-none ring-0 transition-colors',
          'focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 rounded"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
