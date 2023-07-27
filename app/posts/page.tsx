import { allPosts } from "@/.contentlayer/generated";
import { Tags } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <div className="flex my-2 gap-3 items-center w-full">
            <Tags />
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
    </div>
  );
}
