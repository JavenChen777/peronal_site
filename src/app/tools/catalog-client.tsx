'use client';

import { useState, useEffect } from 'react';
import { tools as allTools } from '@/data/tools';
import { filterTools, sortTools, ALL_CATEGORIES } from '@/lib/utils';
import type { ToolCategory } from '@/types/tool';
import SearchBar from '@/components/tools/search-bar';
import CategoryFilter from '@/components/tools/category-filter';
import ToolGrid from '@/components/tools/tool-grid';
import { useLang } from '@/lib/i18n';

export default function ToolsCatalogClient(): JSX.Element {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ToolCategory | 'all'>('all');
  const { t } = useLang();

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
    developer: allTools.filter((tool) => tool.category === 'developer').length,
    productivity: allTools.filter((tool) => tool.category === 'productivity').length,
    design: allTools.filter((tool) => tool.category === 'design').length,
    data: allTools.filter((tool) => tool.category === 'data').length,
    media: allTools.filter((tool) => tool.category === 'media').length,
    other: allTools.filter((tool) => tool.category === 'other').length,
  };

  return (
    <>
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder={t.tools.searchPlaceholder}
        className="mb-4"
      />

      <div className="mb-6">
        <CategoryFilter selected={category} counts={counts} onChange={handleCategoryChange} />
      </div>

      <div className="text-muted-foreground mb-4 text-sm">
        {t.tools.showing} <span className="text-foreground font-medium">{filtered.length}</span>{' '}
        {t.tools.of} <span className="text-foreground font-medium">{allTools.length}</span>
        {category !== 'all' && (
          <>
            {' '}
            {t.tools.inCategory}
            <span className="text-foreground font-medium">{t.categories[category]}</span>
          </>
        )}
        {query && (
          <>
            {' '}
            {t.tools.matching}
            &quot;<span className="text-foreground font-medium">{query}</span>&quot;
          </>
        )}
      </div>

      <ToolGrid
        tools={filtered}
        emptyMessage={t.tools.noResults}
        emptySubMessage={t.tools.clearFilters}
      />
    </>
  );
}
