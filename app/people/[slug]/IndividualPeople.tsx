"use client";

import React, { useEffect, useMemo, useState } from "react";

type Props = {
  biography: string[];
  experience: string[];
  awards: string[];
  areas: string[];
};

type TabKey = "bio" | "exp" | "awards" | "areas";

const HASH_TO_TAB: Record<string, TabKey> = {
  "#bio": "bio",
  "#experience": "exp",
  "#awards": "awards",
  "#practice-areas": "areas",
};
const TAB_TO_HASH: Record<TabKey, string> = {
  bio: "#bio",
  exp: "#experience",
  awards: "#awards",
  areas: "#practice-areas",
};

export default function PeopleTab({ biography, experience, awards, areas }: Props) {
  const initial: TabKey = useMemo(() => {
    if (typeof window === "undefined") return "bio";
    return HASH_TO_TAB[window.location.hash] || "bio";
  }, []);
  const [tab, setTab] = useState<TabKey>(initial);

  useEffect(() => {
    const h = TAB_TO_HASH[tab];
    if (typeof window !== "undefined" && window.location.hash !== h) {
      history.replaceState(null, "", h);
    }
  }, [tab]);

  return (
    <>
      {/* Tabs (left-aligned like your mockup) */}
      <div
        role="tablist"
        aria-label="Person tabs"
        className="inline-flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow w-fit"
      >
        <Tab id="tab-bio"    label="Biography"            active={tab==="bio"}    onClick={()=>setTab("bio")}    controls="panel-bio" />
        <Tab id="tab-exp"    label="Relevant Experience"  active={tab==="exp"}    onClick={()=>setTab("exp")}    controls="panel-exp" />
        <Tab id="tab-awards" label="Awards & Accolades"   active={tab==="awards"} onClick={()=>setTab("awards")} controls="panel-awards" />
        <Tab id="tab-areas"  label="Practice Areas"       active={tab==="areas"}  onClick={()=>setTab("areas")}  controls="panel-areas" />
      </div>

      {/* Panels */}
      <section className="mt-6">
        {tab === "bio" && (
          <article id="panel-bio" role="tabpanel" aria-labelledby="tab-bio" className="mx-auto max-w-3xl px-4">
            {biography.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-gray-800 leading-7"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                {p}
              </p>
            ))}
          </article>
        )}
        {tab === "exp" && (
          <article id="panel-exp" role="tabpanel" aria-labelledby="tab-exp" className="mx-auto max-w-3xl px-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              {experience.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </article>
        )}
        {tab === "awards" && (
          <article id="panel-awards" role="tabpanel" aria-labelledby="tab-awards" className="mx-auto max-w-3xl px-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              {awards.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </article>
        )}
        {tab === "areas" && (
          <article id="panel-areas" role="tabpanel" aria-labelledby="tab-areas" className="mx-auto max-w-3xl px-4">
            <div className="flex flex-wrap gap-2">
              {areas.map((a, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full border text-xs text-gray-700">
                  {a}
                </span>
              ))}
            </div>
          </article>
        )}
      </section>
    </>
  );
}

function Tab({
  id, label, active, onClick, controls,
}: { id: string; label: string; active: boolean; onClick: () => void; controls: string }) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm transition
        ${active ? "bg-brand text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
    >
      {label}
    </button>
  );
}
