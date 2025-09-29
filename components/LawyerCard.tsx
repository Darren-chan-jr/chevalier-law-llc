"use client";

import Image from "next/image";
import Link from "next/link";
import { people } from "@/data/people";

type Props = {
  href: string;      // e.g. "/people/lim-bee-li"
  name: string;
  title: string;
  photo?: string;    // optional override
};

export default function LawyerCard({ href, name, title, photo }: Props) {
  // derive slug from the href (last non-empty segment)
  const slug = href.split("?")[0].split("#")[0].split("/").filter(Boolean).pop();
  const photoFromData = slug ? people.find(p => p.slug === slug)?.photo : undefined;

  const imgSrc = photo ?? photoFromData ?? "/people/placeholder.jpg"; // no /public prefix

  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 shadow-sm
                 hover:shadow-md hover:ring-brand/40 transition-transform duration-200 ease-out
                 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-3">
        <div className="font-medium text-gray-900 group-hover:text-brand">{name}</div>
        <div className="text-sm text-gray-600">{title}</div>
      </div>
    </Link>
  );
}
