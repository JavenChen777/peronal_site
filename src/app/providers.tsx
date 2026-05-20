'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { LangProvider } from '@/lib/i18n';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
