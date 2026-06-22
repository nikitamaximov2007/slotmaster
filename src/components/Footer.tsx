import Link from 'next/link';
import { Send, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { Newsletter } from './Newsletter';
import { SITE, FOOTER_INFO, FOOTER_HELP } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-edge bg-background-secondary/60">
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-secondary">
            Независимые обзоры онлайн-казино, честные рейтинги и партнерские офферы для игроков 18+.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-surface text-secondary transition hover:border-edge-active hover:text-primary"
            >
              <Send size={16} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Написать на почту"
              className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-surface text-secondary transition hover:border-edge-active hover:text-primary"
            >
              <Mail size={16} />
            </a>
            <Link
              href="/contacts"
              aria-label="Форма обратной связи"
              className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-surface text-secondary transition hover:border-edge-active hover:text-primary"
            >
              <MessageCircle size={16} />
            </Link>
          </div>
        </div>

        <nav aria-label="Информация">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">Информация</h2>
          <ul className="space-y-2.5">
            {FOOTER_INFO.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-secondary transition hover:text-blue-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Помощь">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">Помощь</h2>
          <ul className="space-y-2.5">
            {FOOTER_HELP.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-secondary transition hover:text-blue-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            Подпишитесь на бонусы
          </h2>
          <p className="mb-3 text-sm text-secondary">Подборка проверенных предложений. Без спама.</p>
          <Newsletter compact />
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="container-site py-4">
          <p className="text-center text-[0.7rem] leading-relaxed text-muted/80 sm:text-left">
            Все товарные знаки принадлежат их правообладателям и используются для идентификации брендов. SlotMaster не
            является оператором азартных игр и не принимает ставки.
          </p>
        </div>
        <div className="container-site flex flex-col items-center justify-between gap-3 border-t border-edge py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.domain}, Все права защищены. 18+.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-danger/40 px-3 py-1 text-xs font-semibold text-danger">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-danger text-[0.6rem] text-white">
                18+
              </span>
              Только для совершеннолетних
            </span>
            <p className="text-xs text-muted">Играйте ответственно.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
