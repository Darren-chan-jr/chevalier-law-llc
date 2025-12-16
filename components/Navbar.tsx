"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Bigger brand block */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* Logo */}
          <Image
            src="/chevalier_law_white.png"
            alt="Chevalier Law LLC"
            width={56}   // was 32–48
            height={56}
            priority
          />
          {/* Firm name */}
          <span className="font-brand leading-none text-xl sm:text-2xl lg:text-3xl whitespace-nowrap">
            Chevalier Law LLC
          </span>
        </Link>

        {/* Desktop links: larger font + more gap */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-base lg:text-lg">
          <Link href="/about" className="hover:text-brand-accent">About Us</Link>
          <Link href="/people" className="hover:text-brand-accent">People</Link>
          <Link href="/practice-areas" className="hover:text-brand-accent whitespace-nowrap">Practice Areas</Link>
          <Link href="/insights" className="hover:text-brand-accent whitespace-nowrap">Knowledge &amp; Insights</Link>
          <Link
            href="/contact"
            className="ml-2 px-4 lg:px-5 py-2 rounded-2xl bg-white text-brand hover:bg-white/90 text-base lg:text-lg"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button (slightly larger icon target) */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-3 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile panel unchanged */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-brand">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-base">
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">About Us</Link>
            <Link href="/people" onClick={() => setOpen(false)} className="py-2">People</Link>
            <Link href="/practice-areas" onClick={() => setOpen(false)} className="py-2">Practice Areas</Link>
            <Link href="/insights" onClick={() => setOpen(false)} className="py-2">Knowledge &amp; Insights</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-1 px-4 py-2 rounded-2xl bg-white text-brand text-center">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
