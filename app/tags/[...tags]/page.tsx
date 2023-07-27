"use client";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Tags } from "lucide-react";

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

  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const allTags = allPosts.flatMap((post) => post.tags ?? []);
    // @ts-expect-error
    const uniqueTags = [...new Set(allTags)];

    setAllTags(uniqueTags);
  }, []);

  return (
    <>
      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        <div className="flex gap-2 items-center">
          <p>Articles avec le tag </p>
          {tags.map((tag, index) => (
            <p
              key={tag + index}
              className=" w-fit border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline"
            >
              {tag}
            </p>
          ))}
        </div>
        {tags.length > 0 && (
          <div className="flex gap-2 items-center min-h-[80px]">
            <Tags className="w-6 h-6" />
            <Splide
              aria-label="tags"
              options={{
                perPage: 5,
                gap: "5px",
                width: "80%",
                pagination: false,
                arrows: false,
                breakpoints: {
                  640: {
                    perPage: 3,
                  },
                },
              }}
            >
              {allTags.map((tag, index) => (
                <SplideSlide key={tag + index} className="max-w-fit">
                  <Link
                    href={`/tags/${tag}`}
                    className=" max-w-fit w-fit border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline"
                  >
                    {tag}
                  </Link>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}

        {posts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
            <div className="flex flex-wrap my-2 gap-3 items-center w-full max-w-xs lg:max-w-lg">
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
        <Link href="/posts">Tous les articles</Link>
      </div>
    </>
  );
}
