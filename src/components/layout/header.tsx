'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/common/theme-toggle';
import LangToggle from '@/components/common/lang-toggle';
import { useLang } from '@/lib/i18n';

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/tools', label: t.nav.tools },
    { href: '/about', label: t.nav.about },
  ];

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-foreground flex items-center gap-2 font-semibold">
          <Code2 className="h-6 w-6 text-brand-500" aria-hidden="true" />
          <span>DevToolbox</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-brand-500/10 text-brand-500'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-border bg-background border-t px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-brand-500/10 text-brand-500'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
