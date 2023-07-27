"use client";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TagsPage() {
  const pathname = usePathname();
  // // Récupère les tags depuis l'URL
  const tags = pathname.split("/").slice(2);

  const posts = allPosts.filter((post) => {
    // // Récupère les tags du post
    const postTags = post.tags;
    // // Vérifie si les tags du post contiennent tous les tags de l'URL
    const hasAllTags = tags.every((tag) => postTags?.includes(tag));
    return hasAllTags;
  });

  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <div className="flex my-2 gap-3 items-center w-full">
            {post.tags &&
              post.tags.map((tag, index) => (
                <Link
                  key={tag + index}
                  href={`/tags/${tag}`}
                  className="border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline"
                >
                  {tag}
                </Link>
              ))}
          </div>
        </article>
      ))}
      <Link href="/posts">Tous les articles</Link>
    </div>
  );
}
