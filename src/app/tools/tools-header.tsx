'use client';

import { useLang } from '@/lib/i18n';

interface ToolsHeaderProps {
  count: number;
}

export default function ToolsHeader({ count }: ToolsHeaderProps): JSX.Element {
  const { t } = useLang();

  return (
    <div className="mb-8">
      <h1 className="text-foreground text-3xl font-bold">{t.tools.pageTitle}</h1>
      <p className="text-muted-foreground mt-2">{t.tools.pageSubtitle(count)}</p>
    </div>
  );
}
