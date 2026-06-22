'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FaqItem } from '@/types';

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-card border border-edge bg-surface">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1rem] font-semibold text-primary"
              >
                {item.question}
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg transition ${
                    isOpen ? 'rotate-45 bg-blue text-white' : 'bg-blue/15 text-blue-bright'
                  }`}
                  aria-hidden="true"
                >
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-secondary">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
