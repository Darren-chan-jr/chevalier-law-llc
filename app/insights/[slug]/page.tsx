import Image from "next/image";
import { notFound } from "next/navigation";
import { insightPosts, formatPostDate, type InsightBlock } from "@/data/insights";

export async function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = insightPosts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} — Chevalier Law LLC` : "Insight — Chevalier Law LLC",
    description: post?.excerpt ?? "Insight article",
  };
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const post = insightPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const dateLabel = formatPostDate(post.date, "en-US");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[200px] sm:h-[240px] overflow-hidden">
        <Image
          src={post.image ?? "/insights/placeholder.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl w-full px-4 pb-6">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold">{post.title}</h1>
            <p className="text-white/85 text-sm">{dateLabel}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        {/* If you want the excerpt up top: */}
        {post.excerpt && <p className="text-gray-700">{post.excerpt}</p>}

        <ArticleBlocks blocks={post.content ?? []} />
      </section>
    </main>
  );
}

/* --- Render blocks --- */
function ArticleBlocks({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <article className="prose prose-gray max-w-none">
      {blocks.map((b, i) => renderBlock(b, i))}
    </article>
  );
}

function renderBlock(b: InsightBlock, key: number) {
  switch (b.type) {
    case "paragraph":
      return <p key={key}>{b.text}</p>;
    case "heading": {
      const L = b.level ?? 2;
      if (L === 2) return <h2 key={key}>{b.text}</h2>;
      if (L === 3) return <h3 key={key}>{b.text}</h3>;
      return <h4 key={key}>{b.text}</h4>;
    }
    case "list":
      return (
        <ul key={key}>
          {b.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={key}>
          <p>{b.text}</p>
          {b.cite && <cite>— {b.cite}</cite>}
        </blockquote>
      );
    default:
      return null;
  }
}
