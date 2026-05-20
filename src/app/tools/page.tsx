import { Suspense } from 'react';
import type { Metadata } from 'next';
import { tools } from '@/data/tools';
import ToolsCatalogClient from './catalog-client';
import ToolsHeader from './tools-header';

export const metadata: Metadata = {
  title: 'All Tools',
  description: `Browse ${tools.length} developer tools built to make your workflow faster.`,
};

function CatalogSkeleton(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border-border bg-muted h-48 animate-pulse rounded-xl border" />
      ))}
    </div>
  );
}

export default function ToolsPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <ToolsHeader count={tools.length} />
      <Suspense fallback={<CatalogSkeleton />}>
        <ToolsCatalogClient />
      </Suspense>
    </div>
  );
}
