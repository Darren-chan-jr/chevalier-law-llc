"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

type Person = {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  photo?: string;
  social?: { linkedin?: string; facebook?: string; twitter?: string; instagram?: string };
};

export default function PersonTile({ person }: { person: Person }) {
  const router = useRouter();
  const goto = () => router.push(`/people/${person.slug}`);

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`View ${person.name}'s profile`}
      onClick={goto}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goto();
        }
      }}
      className="
        group cursor-pointer text-center rounded-2xl border bg-white p-4
        shadow-sm transition-all duration-200 ease-out
        hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand
      "
    >
      {/* Photo / placeholder */}
      <div className="relative mx-auto w-56 h-72 sm:w-64 sm:h-80 overflow-hidden rounded-md bg-gray-200">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill className="object-cover grayscale-[35%]" />
        ) : null}
      </div>

      {/* Name / role */}
      <div className="mt-4">
        <h3 className="font-semibold group-hover:text-brand transition-colors">{person.name}</h3>
        <div className="text-sm text-gray-600">{person.title}</div>

        <div className="mt-1 text-xs text-gray-600">Practice</div>
        <div className="text-xs text-gray-500 italic">“{person.practiceAreas.join(", ")}”</div>
      </div>

      {/* Socials (don’t trigger card navigation) */}
      {person.social && (
        <div className="mt-2 flex items-center justify-center gap-3 text-gray-700">
          {person.social.linkedin && (
            <a
              href={person.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={16} />
            </a>
          )}
          {person.social.facebook && (
            <a
              href={person.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Facebook size={16} />
            </a>
          )}
          {person.social.twitter && (
            <a
              href={person.social.twitter}
              aria-label="Twitter/X"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter size={16} />
            </a>
          )}
          {person.social.instagram && (
            <a
              href={person.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
