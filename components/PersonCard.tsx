import Link from "next/link";
  import type { Person } from "@/data/people";

  export default function PersonCard({ person }: { person: Person }) {
    return (
      <Link href={`/people/${person.slug}`} className="block rounded-2xl border hover:shadow-sm transition">
        <div className="p-4">
          <div className="rounded-xl aspect-[4/3] bg-gray-100" />
          <div className="mt-4">
            <div className="font-medium">{person.name}</div>
            <div className="text-sm text-gray-600">{person.title}</div>
            <div className="mt-1 text-xs text-gray-500">{person.practiceAreas.join(", ")}</div>
          </div>
        </div>
      </Link>
    );
  }