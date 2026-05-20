import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Download } from 'lucide-react';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { tools } from '@/data/tools';
import { sortTools } from '@/lib/utils';
import StatusBadge from '@/components/common/status-badge';
import CategoryBadge from '@/components/common/category-badge';
import ToolCard from '@/components/tools/tool-card';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  return {
    title: tool?.name,
    description: tool?.description,
    openGraph: {
      title: tool ? `${tool.name} | DevToolbox` : 'DevToolbox',
      description: tool?.description,
      images: [tool?.screenshots?.[0] ?? '/og-image.png'],
    },
  };
}

export default function ToolDetailPage({ params }: PageProps): JSX.Element {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  const related = sortTools(
    tools.filter((t) => t.category === tool.category && t.slug !== tool.slug)
  ).slice(0, 3);

  const isEmoji = tool.icon.length <= 2 && !/^\//.test(tool.icon);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <Link
        href="/tools"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Tools
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
                Live Demo
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
                View Source
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
                夸克网盘下载
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
          <h2 className="text-foreground mb-4 text-lg font-semibold">Screenshots</h2>
          <div className="grid gap-4">
            {tool.screenshots.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${tool.name} screenshot ${i + 1}`}
                className="border-border w-full rounded-xl border object-contain shadow-sm"
              />
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
          <h2 className="text-foreground mb-4 text-lg font-semibold">Related Tools</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
