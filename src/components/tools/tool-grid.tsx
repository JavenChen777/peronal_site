import type { Tool } from '@/types/tool';
import ToolCard from './tool-card';

interface ToolGridProps {
  tools: Tool[];
  emptyMessage?: string;
}

export default function ToolGrid({
  tools,
  emptyMessage = 'No tools found. Try adjusting your search or filters.',
}: ToolGridProps): JSX.Element {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-3 text-4xl">🔍</div>
        <p className="text-muted-foreground text-base">{emptyMessage}</p>
        <p className="text-muted-foreground mt-1 text-sm">Clear your filters to see all tools.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
