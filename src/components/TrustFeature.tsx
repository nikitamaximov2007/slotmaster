import type { LucideIcon } from 'lucide-react';

export function TrustFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-card border border-edge bg-surface/70 p-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-bright">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="leading-tight">
        <p className="text-[0.92rem] font-semibold text-primary">{title}</p>
        <p className="text-xs text-muted">{text}</p>
      </div>
    </div>
  );
}
