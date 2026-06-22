'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type State = 'idle' | 'loading' | 'success' | 'error';

// Newsletter signup. No backend wired up, replace mockSubmit with a real API call.
async function mockSubmit(email: string): Promise<void> {
  // TODO: connect real subscription API here.
  await new Promise((r) => setTimeout(r, 700));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('invalid');
}

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    try {
      await mockSubmit(email);
      setState('success');
      setEmail('');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <p className="flex items-center gap-2 text-sm text-green">
        <Check size={16} /> Готово! Проверьте почту для подтверждения.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? 'w-full' : 'max-w-sm'}>
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === 'error') setState('idle');
          }}
          placeholder="Ваш e-mail"
          aria-label="E-mail для подписки"
          aria-invalid={state === 'error'}
          className="h-11 flex-1 rounded-lg border border-edge bg-background px-4 text-sm text-primary outline-none transition focus:border-edge-active"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-b from-blue-bright to-blue text-white transition hover:brightness-110 disabled:opacity-60"
          aria-label="Подписаться"
        >
          <ArrowRight size={18} className={state === 'loading' ? 'animate-pulse' : ''} />
        </button>
      </div>
      {state === 'error' && (
        <p className="mt-2 text-xs text-danger">Проверьте, что e-mail введён корректно.</p>
      )}
    </form>
  );
}
