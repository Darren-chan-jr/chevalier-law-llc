import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type Post = PostMeta & { contentHtml: string };

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

export function getPostMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDir, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: (data.excerpt || content.slice(0, 140)).trim()
  };
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDir, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: (data.excerpt || content.slice(0, 140)).trim(),
    contentHtml,
  };
}

export function getSortedPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map(getPostMeta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}