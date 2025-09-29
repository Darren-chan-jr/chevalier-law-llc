import Link from "next/link";
  import type { PracticeArea } from "@/data/practice-areas";

  export default function PracticeCard({ item }: { item: PracticeArea }) {
    return (
      <Link href={`/practice-areas/${item.slug}`} className="block rounded-2xl border hover:shadow-sm transition">
        <div className="p-4">
          <div className="rounded-xl aspect-[4/3] bg-gray-100" />
          <div className="mt-4">
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-gray-600">{item.summary}</div>
          </div>
        </div>
      </Link>
    );
  }