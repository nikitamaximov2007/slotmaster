import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-bold text-blue-bright">404</p>
      <h1 className="mt-4 text-2xl font-bold text-primary">Страница не найдена</h1>
      <p className="mt-2 max-w-md text-sm text-secondary">
        Возможно, страница была перемещена или удалена. Вернитесь на главную или загляните в рейтинг казино.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="inline-flex h-11 items-center rounded-lg bg-gradient-to-b from-blue-bright to-blue px-5 text-sm font-semibold text-white transition hover:brightness-110">
          На главную
        </Link>
        <Link href="/casino" className="inline-flex h-11 items-center rounded-lg border border-edge bg-surface px-5 text-sm font-semibold text-primary transition hover:border-edge-active">
          Рейтинг казино
        </Link>
      </div>
    </div>
  );
}
