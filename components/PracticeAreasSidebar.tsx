// components/PracticeAreasSidebar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { PracticeAreaGroup } from "@/data/practice-areas";

export default function PracticeAreasSidebar({
  groups,
  activeSlug,
}: {
  groups: PracticeAreaGroup[];
  activeSlug?: string;
}) {
  // open groups by default? choose a sensible default:
  const [open, setOpen] = useState<Record<number, boolean>>(
    () => Object.fromEntries(groups.map((_, i) => [i, true]))
  );

  return (
    <aside className="rounded-md bg-gray-50 border border-gray-200 p-4 md:p-5 sticky top-20">
      <h3 className="text-[15px] font-semibold text-gray-800 mb-3">Practice Areas</h3>

      <ul className="space-y-3">
        {groups.map((group, i) => {
          const isOpen = open[i];
          return (
            <li key={group.title} className="border-b last:border-0 border-gray-200 pb-3">
              <button
                type="button"
                onClick={() => setOpen(s => ({ ...s, [i]: !s[i] }))}
                className="w-full flex items-center justify-between text-left text-[13px] font-medium text-gray-900"
                aria-expanded={isOpen}
              >
                <span className="truncate">{group.title.toUpperCase()}</span>
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {isOpen && (
                <ul className="mt-2 ml-3 space-y-2">
                  {group.items.map(item => {
                    const active = activeSlug === item.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/practice-areas/${item.slug}`}
                          className={`block text-[13px] leading-5 ${
                            active
                              ? "text-brand font-semibold"
                              : "text-gray-700 hover:text-brand"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
