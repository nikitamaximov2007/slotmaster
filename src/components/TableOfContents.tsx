// Static anchor list, works without JS, keyboard-accessible.
export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="Содержание" className="rounded-card border border-edge bg-surface p-4">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Содержание</h2>
      <ul className="space-y-0.5">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="block rounded-md border-l-2 border-transparent px-3 py-1.5 text-sm text-secondary transition hover:border-blue hover:bg-white/[0.03] hover:text-primary"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
