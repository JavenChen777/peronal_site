'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Tool } from '@/types/tool';
import StatusBadge from '@/components/common/status-badge';
import CategoryBadge from '@/components/common/category-badge';
import ToolCard from '@/components/tools/tool-card';
import { useLang } from '@/lib/i18n';

interface ToolDetailContentProps {
  tool: Tool;
  related: Tool[];
}

export default function ToolDetailContent({ tool, related }: ToolDetailContentProps): JSX.Element {
  const { t } = useLang();
  const isEmoji = tool.icon.length <= 2 && !/^\//.test(tool.icon);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <Link
        href="/tools"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {t.toolDetail.backToTools}
      </Link>

      {/* Header */}
      <div className="mb-8 flex items-start gap-5">
        <div className="flex-shrink-0">
          {isEmoji ? (
            <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-2xl text-3xl">
              {tool.icon}
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tool.icon}
              alt={`${tool.name} icon`}
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl object-contain"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h1 className="text-foreground text-2xl font-bold sm:text-3xl">{tool.name}</h1>
            <CategoryBadge category={tool.category} />
            <StatusBadge status={tool.status} />
          </div>
          <p className="text-muted-foreground">{tool.description}</p>

          {/* Action buttons */}
          <div className="mt-4 flex flex-wrap gap-3">
            {tool.url && (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {t.toolDetail.liveDemo}
              </a>
            )}
            {tool.githubUrl && (
              <a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t.toolDetail.viewSource}
              </a>
            )}
            {tool.downloadUrl && (
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {t.toolDetail.download}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tags */}
      {tool.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="border-border bg-muted text-muted-foreground rounded-md border px-2.5 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Screenshots */}
      {tool.screenshots && tool.screenshots.length > 0 && (
        <div className="mb-8">
          <h2 className="text-foreground mb-4 text-lg font-semibold">{t.toolDetail.screenshots}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {tool.screenshots.map((src, i) => (
              <div
                key={i}
                className="border-border relative w-full overflow-hidden rounded-xl border shadow-sm"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`}
                  alt={`${tool.name} screenshot ${i + 1}`}
                  width={1280}
                  height={800}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Long description */}
      {tool.longDescription && (
        <article className="prose prose-slate dark:prose-invert mb-12 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{tool.longDescription}</ReactMarkdown>
        </article>
      )}

      {/* Related tools */}
      {related.length > 0 && (
        <section>
          <h2 className="text-foreground mb-4 text-lg font-semibold">
            {t.toolDetail.relatedTools}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relTool) => (
              <ToolCard key={relTool.slug} tool={relTool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
