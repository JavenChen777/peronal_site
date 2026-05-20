'use client';

import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function LangToggle(): JSX.Element {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      aria-label={lang === 'zh' ? 'Switch to English' : '切换为中文'}
      className={cn(
        'rounded-lg px-2 py-1.5 text-xs font-semibold transition-colors',
        'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      {lang === 'zh' ? 'EN' : '中'}
    </button>
  );
}
