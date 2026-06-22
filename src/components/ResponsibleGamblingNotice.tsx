import { ShieldAlert } from 'lucide-react';

export function ResponsibleGamblingNotice({ variant = 'box' }: { variant?: 'box' | 'inline' }) {
  if (variant === 'inline') {
    return (
      <p className="text-xs text-muted">
        18+. Азартные игры могут вызывать зависимость. Играйте ответственно и только на средства,
        потерю которых можете себе позволить.
      </p>
    );
  }
  return (
    <div className="flex gap-3 rounded-card border border-edge bg-surface p-4">
      <ShieldAlert size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-primary">Ответственная игра · 18+</p>
        <p className="mt-1 text-sm text-secondary">
          Азартные игры связаны с риском потери средств и могут вызывать зависимость. Контент
          предназначен только для совершеннолетних. Устанавливайте лимиты, делайте паузы и при потере
          контроля обращайтесь за помощью к специалистам.
        </p>
      </div>
    </div>
  );
}
