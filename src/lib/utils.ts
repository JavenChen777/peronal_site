import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Tool, ToolCategory } from '@/types/tool';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface CategoryColors {
  bg: string;
  text: string;
  border: string;
}

export function getCategoryColor(category: ToolCategory): CategoryColors {
  const map: Record<ToolCategory, CategoryColors> = {
    developer: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/40',
      text: 'text-indigo-700 dark:text-indigo-300',
      border: 'border-indigo-200 dark:border-indigo-700',
    },
    productivity: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/40',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-700',
    },
    design: {
      bg: 'bg-pink-100 dark:bg-pink-900/40',
      text: 'text-pink-700 dark:text-pink-300',
      border: 'border-pink-200 dark:border-pink-700',
    },
    data: {
      bg: 'bg-amber-100 dark:bg-amber-900/40',
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-700',
    },
    media: {
      bg: 'bg-purple-100 dark:bg-purple-900/40',
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-200 dark:border-purple-700',
    },
    other: {
      bg: 'bg-slate-100 dark:bg-slate-800',
      text: 'text-slate-600 dark:text-slate-300',
      border: 'border-slate-200 dark:border-slate-700',
    },
  };
  return map[category];
}

export function filterTools(tools: Tool[], query: string, category: ToolCategory | 'all'): Tool[] {
  const q = query.toLowerCase().trim();
  return tools.filter((tool) => {
    const matchesCategory = category === 'all' || tool.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}

export function sortTools(tools: Tool[]): Tool[] {
  return [...tools].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name);
  });
}

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  developer: 'Developer',
  productivity: 'Productivity',
  design: 'Design',
  data: 'Data',
  media: 'Media',
  other: 'Other',
};

export const ALL_CATEGORIES: ToolCategory[] = [
  'developer',
  'productivity',
  'design',
  'data',
  'media',
  'other',
];
