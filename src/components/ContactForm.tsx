'use client';

import { useState } from 'react';
import { Check, AlertCircle, Loader2 } from 'lucide-react';

type State = 'idle' | 'loading' | 'success' | 'error';

const TOPICS = [
  'Общий вопрос',
  'Партнёрское сотрудничество',
  'Исправление информации',
  'Жалоба / спор с казино',
];

// NOTE: no backend connected. Replace `submitContact` with a real API call
// (e.g. POST /api/contact), the validation and UI states are production-ready.
async function submitContact(data: { name: string; email: string; topic: string; message: string }) {
  await new Promise((r) => setTimeout(r, 800));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('email');
  if (data.message.trim().length < 10) throw new Error('message');
  // TODO: send `data` to the real endpoint here.
  return true;
}

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      topic: String(fd.get('topic') || TOPICS[0]),
      message: String(fd.get('message') || ''),
      consent: fd.get('consent') === 'on',
    };

    const nextErrors: Record<string, string> = {};
    if (data.name.trim().length < 2) nextErrors.name = 'Укажите имя';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = 'Некорректный e-mail';
    if (data.message.trim().length < 10) nextErrors.message = 'Сообщение слишком короткое';
    if (!data.consent) nextErrors.consent = 'Необходимо согласие на обработку данных';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState('error');
      return;
    }

    setState('loading');
    try {
      await submitContact(data);
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-card border border-green/30 bg-green/[0.06] p-6 text-center">
        <Check size={28} className="mx-auto text-green" />
        <p className="mt-2 font-semibold text-primary">Сообщение отправлено</p>
        <p className="mt-1 text-sm text-secondary">Мы ответим по будням в течение рабочего дня.</p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-4 h-10 rounded-lg border border-edge bg-surface px-5 text-sm font-semibold text-primary transition hover:border-edge-active"
        >
          Отправить ещё одно
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-secondary">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            aria-invalid={Boolean(errors.name)}
            className="h-11 w-full rounded-lg border border-edge bg-surface px-3 text-sm text-primary outline-none transition focus:border-edge-active"
          />
          {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-secondary">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            className="h-11 w-full rounded-lg border border-edge bg-surface px-3 text-sm text-primary outline-none transition focus:border-edge-active"
          />
          {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-secondary">Тема обращения</label>
        <select
          id="topic"
          name="topic"
          className="h-11 w-full rounded-lg border border-edge bg-surface px-3 text-sm text-primary outline-none transition focus:border-edge-active"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-secondary">Сообщение</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          className="w-full rounded-lg border border-edge bg-surface px-3 py-2.5 text-sm text-primary outline-none transition focus:border-edge-active"
        />
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message}</p>}
      </div>

      <label className="flex items-start gap-2.5 text-sm text-secondary">
        <input name="consent" type="checkbox" className="mt-0.5 h-4 w-4 accent-blue" />
        <span>
          Я согласен с обработкой персональных данных в соответствии с политикой конфиденциальности.
        </span>
      </label>
      {errors.consent && <p className="-mt-2 text-xs text-danger">{errors.consent}</p>}

      {state === 'error' && !Object.keys(errors).length && (
        <p className="flex items-center gap-1.5 text-sm text-danger">
          <AlertCircle size={15} /> Не удалось отправить. Попробуйте позже.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-b from-blue-bright to-blue px-6 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {state === 'loading' && <Loader2 size={16} className="animate-spin" />}
        Отправить сообщение
      </button>
    </form>
  );
}
