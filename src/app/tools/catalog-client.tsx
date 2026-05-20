'use client';

import { useState, useEffect } from 'react';
import { tools as allTools } from '@/data/tools';
import { filterTools, sortTools, ALL_CATEGORIES, CATEGORY_LABELS } from '@/lib/utils';
import type { ToolCategory } from '@/types/tool';
import SearchBar from '@/components/tools/search-bar';
import CategoryFilter from '@/components/tools/category-filter';
import ToolGrid from '@/components/tools/tool-grid';

export default function ToolsCatalogClient(): JSX.Element {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ToolCategory | 'all'>('all');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') as ToolCategory | null;
    if (cat && ALL_CATEGORIES.includes(cat)) {
      setCategory(cat);
    }
  }, []);

  const handleCategoryChange = (cat: ToolCategory | 'all'): void => {
    setCategory(cat);
    setQuery('');
  };

  const filtered = sortTools(filterTools(allTools, query, category));

  const counts: Record<ToolCategory | 'all', number> = {
    all: allTools.length,
    developer: allTools.filter((t) => t.category === 'developer').length,
    productivity: allTools.filter((t) => t.category === 'productivity').length,
    design: allTools.filter((t) => t.category === 'design').length,
    data: allTools.filter((t) => t.category === 'data').length,
    media: allTools.filter((t) => t.category === 'media').length,
    other: allTools.filter((t) => t.category === 'other').length,
  };

  return (
    <>
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search by name, description, or tag…"
        className="mb-4"
      />

      <div className="mb-6">
        <CategoryFilter selected={category} counts={counts} onChange={handleCategoryChange} />
      </div>

      <div className="text-muted-foreground mb-4 text-sm">
        Showing <span className="text-foreground font-medium">{filtered.length}</span> of{' '}
        <span className="text-foreground font-medium">{allTools.length}</span> tools
        {category !== 'all' && (
          <>
            {' '}
            in <span className="text-foreground font-medium">{CATEGORY_LABELS[category]}</span>
          </>
        )}
        {query && (
          <>
            {' matching '}
            &quot;<span className="text-foreground font-medium">{query}</span>&quot;
          </>
        )}
      </div>

      <ToolGrid tools={filtered} />
    </>
  );
}
