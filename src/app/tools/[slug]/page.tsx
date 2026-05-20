import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { tools } from '@/data/tools';
import { sortTools } from '@/lib/utils';
import ToolDetailContent from './tool-detail-content';

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

  return <ToolDetailContent tool={tool} related={related} />;
}
