"use client";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Tags } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import { Button } from "@/components/ui/button";

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

  // Filtrer le tableau allTags pour exclure le tag actif
  const filteredTags = allTags.filter((tag) => !tags.includes(tag));

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-2 items-center">
          <p>Articles avec le tag </p>
          <p className=" w-fit border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline">
            {tags}
          </p>
        </div>
        {tags.length > 0 && (
          <div className="flex items-center min-h-[100px] justify-start">
            <label htmlFor="tags">
              <Tags className="w-6 h-6" />
            </label>
            <Splide
              aria-label="tags"
              options={{
                perPage: 5,
                gap: "10px",
                width: "100%",
                pagination: false,
                arrows: false,
                breakpoints: {
                  640: {
                    perPage: 3,
                  },
                  360: {
                    perPage: 2,
                  },
                },
              }}
            >
              {filteredTags.map((tag, index) => (
                <SplideSlide key={tag + index} className="max-w-fit">
                  <Link
                    href={`/tags/${tag}`}
                    className="border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline"
                  >
                    {tag}
                  </Link>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
        <Link href="/posts" className="max-w-fit block">
          <SVGHoverAnimation text="Tout les projets" />
        </Link>
        <hr className="my-5" />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          {posts.map((post) => (
            <Card key={post._id} className="relative">
              <Link href={post.slug}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {post.description && (
                    <CardDescription className="min-h-[50px]">
                      {post.description}
                    </CardDescription>
                  )}
                </CardContent>
              </Link>
              <CardFooter className="flex flex-col-reverse w-full items-start gap-5 justify-between h-fit">
                <div className="flex flex-wrap my-2 gap-3 items-center w-full max-w-xs lg:max-w-lg">
                  <Tags />
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <Link
                        key={tag + index}
                        href={`/tags/${tag}`}
                        className="border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 no-underline"
                      >
                        {tag}
                      </Link>
                    ))}
                </div>
                <hr className="h-[0.2px] w-full" />
                <Button className="flex  justify-start" size={"sm"}>
                  <Link href={post.slug}>
                    <SVGHoverAnimation text="Consulter" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
