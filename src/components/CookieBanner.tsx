'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const KEY = 'sm-cookie-consent';

// Cookie consent. Optional categories are OFF by default (no pre-ticked boxes).
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // ignore storage errors
    }
  }, []);

  const save = (analytics: boolean) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ necessary: true, analytics, ts: Date.now() }));
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-[calc(100vw-24px)] rounded-lg border border-edge bg-surface-elevated p-4 shadow-card sm:max-w-3xl sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-secondary">
          Мы используем только необходимые cookie для работы сайта. Аналитические cookie включаются
          лишь с вашего согласия.{' '}
          <Link href="/cookies" className="text-blue-bright underline">
            Подробнее
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save(false)}
            className="h-10 rounded-lg border border-edge bg-surface px-4 text-sm font-semibold text-primary transition hover:border-edge-active"
          >
            Только необходимые
          </button>
          <button
            type="button"
            onClick={() => save(true)}
            className="h-10 rounded-lg bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] px-4 text-sm font-bold text-[#2b1b00] transition hover:brightness-105"
          >
            Принять все
          </button>
        </div>
      </div>
    </div>
  );
}
