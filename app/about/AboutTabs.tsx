// app/about/AboutTabs.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import type { Copy, TabKey } from "./page";

const HASH_TO_TAB: Record<string, TabKey> = {
  "#who-we-are": "who",
  "#our-history": "history",
  "#awards-and-accolades": "awards",
};
const TAB_TO_HASH: Record<TabKey, string> = {
  who: "#who-we-are",
  history: "#our-history",
  awards: "#awards-and-accolades",
};

export default function AboutTabs({ copy }: { copy: Copy }) {
  const initialTab: TabKey = useMemo(() => {
    if (typeof window === "undefined") return "who";
    return HASH_TO_TAB[window.location.hash] || "who";
  }, []);

  const [tab, setTab] = useState<TabKey>(initialTab);

  useEffect(() => {
    const hash = TAB_TO_HASH[tab];
    if (typeof window !== "undefined" && window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }, [tab]);

  return (
    <>
      {/* Tab buttons */}
        <div
        role="tablist"
        aria-label="About tabs"
        className="flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 shadow w-fit mx-auto"
        >

        <TabButton
          id="tab-who"
          label="Who We Are"
          active={tab === "who"}
          onClick={() => setTab("who")}
          ariaControls="panel-who"
        />
        <TabButton
          id="tab-history"
          label="Our History"
          active={tab === "history"}
          onClick={() => setTab("history")}
          ariaControls="panel-history"
        />
        <TabButton
          id="tab-awards"
          label="Awards & Accolades"
          active={tab === "awards"}
          onClick={() => setTab("awards")}
          ariaControls="panel-awards"
        />
      </div>

      {/* Panel */}
    <section className="py-8 sm:py-10">
        <article
            id={tab === "who" ? "panel-who" : tab === "history" ? "panel-history" : "panel-awards"}
            role="tabpanel"
            aria-labelledby={tab === "who" ? "tab-who" : tab === "history" ? "tab-history" : "tab-awards"}
            className="max-w-3xl mx-auto text-justify"
        >
            {copy[tab].paragraphs.map((p, i) => (
            <p key={i} className="text-gray-700 leading-7 mt-4">
                {p}
            </p>
            ))}
        </article>
    </section>
    </>
  );
}

function TabButton({
  id,
  label,
  active,
  onClick,
  ariaControls,
}: {
  id: string;
  label: string;
  active: boolean;
  onClick: () => void;
  ariaControls: string;
}) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={ariaControls}
      onClick={onClick}
      className={
        "px-4 py-2 rounded-xl text-sm transition " +
        (active ? "bg-brand text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")
      }
    >
      {label}
    </button>
  );
}


