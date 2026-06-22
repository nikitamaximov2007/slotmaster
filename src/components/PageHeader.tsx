export function PageHeader({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <div className="pt-1">
      {eyebrow && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-blue-bright">
          {eyebrow}
        </span>
      )}
      <h1 className="text-[1.8rem] font-extrabold tracking-tight text-primary sm:text-[2.3rem]">{title}</h1>
      {intro && <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-secondary">{intro}</p>}
    </div>
  );
}
