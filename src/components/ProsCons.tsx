import { Check, X } from 'lucide-react';

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-card border border-green/30 bg-green/[0.06] p-5">
        <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-primary">
          <Check size={18} className="text-green" /> Преимущества
        </h3>
        <ul className="space-y-2.5">
          {pros.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-secondary">
              <Check size={16} className="mt-0.5 shrink-0 text-green" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-card border border-danger/28 bg-danger/[0.05] p-5">
        <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-primary">
          <X size={18} className="text-danger" /> Недостатки
        </h3>
        <ul className="space-y-2.5">
          {cons.map((c) => (
            <li key={c} className="flex gap-2 text-sm text-secondary">
              <X size={16} className="mt-0.5 shrink-0 text-danger" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
