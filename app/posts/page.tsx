"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown10,
  ArrowDownAZ,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpFromDot,
  Maximize2,
  Minimize2,
  Tags,
} from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Luckiest_GuyFont } from "@/utils/fonts";
import { allPosts } from "@/.contentlayer/generated";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import CursorGradient from "@/components/cursorGradient/CursorGradient";
import { cn } from "@/lib/utils";

export default function TagsPage() {
  const searchParams = useSearchParams();
  const tagQuerry = searchParams.get("tag");
  const [sortByDate, setSortByDate] = useState(false);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [sortType, setSortType] = useState("default");
  const [defaultPostsCount, setDefaultPostsCount] = useState(4);
  const [activeTags, setActiveTags] = useState<string[]>(allTags);
  const [allowMultipleTags, setAllowMultipleTags] = useState(false); //  état pour autoriser la sélection multiple
  const [additionalPostsCount, setAdditionalPostsCount] = useState(4);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const allTags = allPosts.flatMap((post) => post.tags ?? []);
    // @ts-expect-error
    const uniqueTags = [...new Set(allTags)];
    setAllTags(uniqueTags);
  }, []);

  useEffect(() => {
    // si le tag est dans l'url, on le met dans le state
    if (tagQuerry) {
      setActiveTags([tagQuerry]);
    } else {
      setActiveTags([]); // Utiliser une liste vide ici
    }
  }, [tagQuerry]);

  // Handle tag click event
  const handleTagClick = (tag: any) => {
    if (allowMultipleTags) {
      // Si la sélection multiple est autorisée, nous ajoutons ou supprimons le tag de la liste activeTags
      setActiveTags((prevTags) => {
        if (prevTags.includes(tag)) {
          return prevTags.filter((t) => t !== tag);
        }
        return [...prevTags, tag];
      });
    } else {
      // Sinon, nous remplaçons simplement la liste activeTags par le tag cliqué
      setActiveTags((prevTags) => {
        if (prevTags.includes(tag)) {
          return [];
        }
        return [tag];
      });
    }
  };

  const handleMultipleTagsClick = () => {
    setAllowMultipleTags((prev) => !prev);
    setActiveTags([]);
  };

  // Filter posts based on active tags
  const posts = allPosts.filter((post) => {
    const postTags = post.tags;
    const hasAllTags = activeTags.every((tag) => postTags?.includes(tag));

    if (sortType === "date") {
      return hasAllTags;
    } else if (sortType === "alphabetical") {
      return hasAllTags && post.title;
    } else {
      return hasAllTags;
    }
  });

  const postsToShow = posts
    .slice()
    .sort((a, b) => {
      if (sortType === "date") {
        if (sortByDate) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
      } else if (sortType === "alphabetical") {
        if (sortAlphabetically) {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      } else {
        return 0;
      }
    })
    .slice(0, defaultPostsCount);

  const handleLoadMorePosts = () => {
    setDefaultPostsCount((prevCount) => prevCount + additionalPostsCount);
  };

  const handleSortByDate = () => {
    setSortType("date");
    setSortByDate((prev) => !prev);
    setSortAlphabetically(false);
  };

  const handleSortAlphabetically = () => {
    setSortType("alphabetical");
    setSortAlphabetically((prev) => !prev);
    setSortByDate(false);
  };

  const handleMinimizeToggle = () => {
    setIsMinimized((prevIsMinimized) => !prevIsMinimized);
    localStorage.setItem("isMinimized", JSON.stringify(!isMinimized));
  };

  useEffect(() => {
    const storedIsMinimized = localStorage.getItem("isMinimized");
    if (storedIsMinimized !== null) {
      setIsMinimized(JSON.parse(storedIsMinimized));
    }
  }, []);

  const dateFormatted = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-10 pt-20">
        <div>
          <h1 className={`text-6xl font-bold ${Luckiest_GuyFont.className}`}>
            J'ai écrit des trucs !
          </h1>
          <p className="italic font-extralight">
            Mes expérimentations textuelles
          </p>
        </div>
        <hr className="my-5" />
        <div className="flex items-center min-h-[50px] justify-start">
          <label htmlFor="tags">
            <Tags className="w-6 h-6" />
          </label>
          <Splide
            aria-label="tags"
            options={{
              perPage: 5,
              gap: "10px",
              width: "100%",
              padding: {
                left: "10px",
              },
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
            {allTags.map((tag, index) => (
              <SplideSlide key={tag + index} className="max-w-fit py-3">
                {/* Toggle active class based on tag selection */}
                <div>
                  <div
                    className={`${
                      activeTags.includes(tag)
                        ? "border-gray-600 dark:border-white -translate-y-1 transform transition-all duration-300 ease-in-out scale-105"
                        : "bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
                    } hover:border-gray-700 dark:hover:border-white border rounded-md px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 cursor-pointer no-underline hover:-translate-y-[1px] transform transition-all duration-300 ease-in-out]`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </div>

                  {activeTags.includes(tag) && (
                    <ArrowUpFromDot
                      className={`flex justify-center w-full mt-1 h-3 animate-bounce `}
                    />
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
            <Switch
              id="terms"
              checked={allowMultipleTags}
              onClick={handleMultipleTagsClick}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              tag multiple
            </label>
          </div>

          <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
            <Switch
              id="sortByDate"
              checked={sortByDate}
              onClick={handleSortByDate}
            />
            <label htmlFor="sortByDate" className="text-sm font-medium">
              {sortByDate ? (
                <ArrowUp10 className="cursor-pointer" />
              ) : (
                <ArrowDown10 className="cursor-pointer" />
              )}
            </label>
          </div>

          <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
            <Switch
              id="sortAlphabetically"
              checked={sortAlphabetically}
              onClick={handleSortAlphabetically}
            />

            <label htmlFor="sortAlphabetically" className="text-sm font-medium">
              {sortAlphabetically ? (
                <ArrowDownAZ className="cursor-pointer" />
              ) : (
                <ArrowUpAZ className="cursor-pointer" />
              )}
            </label>
          </div>

          <div className="flex items-center space-x-1 border px-2 py-1 rounded-md">
            <Switch
              id="minimize"
              checked={isMinimized}
              onClick={handleMinimizeToggle}
            />

            <label htmlFor="minimize" className="text-sm font-medium">
              {isMinimized ? <Minimize2 /> : <Maximize2 />}
            </label>
          </div>
        </div>

        <hr className="my-5" />

        <div
          className={`grid grid-cols-1 gap-5 
        ${isMinimized ? "md:grid-cols-1 space-y-5" : "md:grid-cols-2"}
        `}
        >
          {!postsToShow.length && (
            <div className="flex items-center justify-center">
              <p className="text-sm font-bold text-muted-foreground w-full">
                Aucun article trouvé avec les tags sélectionnés
              </p>
            </div>
          )}
          {postsToShow.map((post) => (
            <motion.div
              key={post._id + "animation"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
                type: "tween",
              }}
              whileInView={{ opacity: 1 }}
              className={`${
                isMinimized
                  ? `w-fit px-5 py-3 h-24 hover:border dark:hover:border-white hover:border-gray-600 transform transition-all ease-in-out]`
                  : ""
              }`}
            >
              {isMinimized ? (
                <Link href={post.slug}>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-xs font-extralight">
                    {dateFormatted(post.date)}
                  </p>
                  {/* <CardContent> */}
                  {post.description && (
                    <CardDescription className="mt-1">
                      {post.description}
                    </CardDescription>
                  )}
                  {/* </CardContent> */}
                </Link>
              ) : (
                <Card
                  key={post._id}
                  className={` bg-transparent dark:hover:bg-[#1e1e2bf8] hover:scale-105 dark:hover:border-white hover:border-gray-600 transform transition-all duration-300 ease-in-out`}
                >
                  <CursorGradient>
                    <Link href={post.slug}>
                      <CardHeader>
                        {post.picture && (
                          <Image
                            src={post.picture}
                            alt=""
                            width={200}
                            height={200}
                            className="rounded-md mx-auto"
                          />
                        )}
                        <CardTitle>{post.title}</CardTitle>
                        <p className="text-xs font-extralight">
                          {dateFormatted(post.date)}
                        </p>
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
                            <div
                              key={tag + index}
                              onClick={() => handleTagClick(tag)}
                              className="hover:border-gray-700 dark:hover:border-white border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 no-underline cursor-pointer"
                            >
                              {tag}
                            </div>
                          ))}
                      </div>
                      <hr className="h-[0.2px] w-full" />
                      <Button className="flex  justify-start" size={"sm"}>
                        <Link href={post.slug}>
                          <SVGHoverAnimation text="Consulter" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </CursorGradient>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
        {defaultPostsCount < posts.length && (
          <Button
            onClick={handleLoadMorePosts}
            className="my-5"
            variant={"secondary"}
          >
            Charger plus d'articles
          </Button>
        )}
      </div>
    </>
  );
}
