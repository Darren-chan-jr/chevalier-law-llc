import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/data/insights";

export default function PostCard({
  slug,
  title,
  date,
  image,
}: {
  slug: string;
  title: string;
  date: string;
  image?: string;
}) {
  const href = `/insights/${encodeURIComponent(slug)}`;
  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 shadow-sm
                 hover:shadow-md hover:ring-brand/40 transition-transform duration-200 ease-out
                 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={image ?? "/insights/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
        />
      </div>

      <div className="p-4">
        <div className="text-[12px] text-gray-500">{formatPostDate(date, "en-US")}</div>
        <h3 className="mt-1 text-base font-medium text-gray-900 line-clamp-2 group-hover:text-brand">
          {title}
        </h3>

        <div className="mt-3 text-[12px] font-semibold tracking-wide text-brand/80">
          READ MORE →
        </div>
      </div>
    </Link>
  );
}
