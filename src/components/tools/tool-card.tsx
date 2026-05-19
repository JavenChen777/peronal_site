'use client';

import Link from 'next/link';
import { ExternalLink, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Tool } from '@/types/tool';
import { cn } from '@/lib/utils';
import StatusBadge from '@/components/common/status-badge';
import CategoryBadge from '@/components/common/category-badge';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps): JSX.Element {
  const MAX_TAGS = 3;
  const visibleTags = tool.tags.slice(0, MAX_TAGS);

  const isEmoji = tool.icon.length <= 2 && !/^\//.test(tool.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link
        href={`/tools/${tool.slug}`}
        className={cn(
          'border-border bg-card flex h-full flex-col rounded-xl border p-5 shadow-sm',
          'transition-all duration-200',
          'hover:scale-[1.02] hover:border-brand-500/40 hover:shadow-md hover:shadow-brand-500/5'
        )}
        aria-label={`View ${tool.name}`}
      >
        {/* Header row: icon + badges */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex-shrink-0">
            {isEmoji ? (
              <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-xl text-2xl">
                {tool.icon}
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tool.icon}
                alt={`${tool.name} icon`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-contain"
              />
            )}
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            <CategoryBadge category={tool.category} />
            <StatusBadge status={tool.status} />
          </div>
        </div>

        {/* Name & description */}
        <h3 className="text-card-foreground mb-1 text-base font-semibold">{tool.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-sm">{tool.description}</p>

        {/* Tags */}
        {visibleTags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action links */}
        {(tool.url || tool.githubUrl || tool.downloadUrl) && (
          <div className="flex items-center justify-end gap-2">
            {tool.url && (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${tool.name} live demo`}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {tool.githubUrl && (
              <a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${tool.name} source on GitHub`}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {tool.downloadUrl && (
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Download ${tool.name} from 夸克网盘`}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition-colors"
              >
                <Download className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
