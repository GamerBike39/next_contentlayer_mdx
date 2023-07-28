// "use client";
import { allPosts } from "@/.contentlayer/generated";
import { Tags } from "lucide-react";
import Link from "next/link";
import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";

interface PostCardProps {
  prezCard?: boolean;
}

const PostCard = ({ prezCard = false }: PostCardProps) => {
  const date = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("fr-FR", { month: "long" });
    const day = dateObj.toLocaleString("fr-FR", { day: "numeric" });
    const year = dateObj.toLocaleString("fr-FR", { year: "numeric" });
    return `${day} ${month} ${year}`;
  };

  return (
    <>
      <div
        className={`
      ${
        prezCard
          ? "flex flex-wrap gap-5 justify-center"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      }
      flex relative
      `}
      >
        {allPosts.map((post, index) => {
          return (
            <Card
              key={post._id}
              className={`${
                prezCard
                  ? "mini-card module module-article article max-w-xs drop-shadow-lg"
                  : ""
              }`}
            >
              <Link href={post.slug}>
                <CardHeader className="py-5">
                  <CardTitle>{post.title}</CardTitle>
                  {post.date && (
                    <p className="text-xs text-gray-600 dark:text-gray-500">
                      {date(post.date)}
                    </p>
                  )}
                  <hr className="w-1/2" />
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[50px] pr-10">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Link>
              <CardFooter className="flex flex-col-reverse w-full items-start gap-5 justify-between h-fit">
                <div className="flex flex-wrap my-2 gap-3 items-center w-full">
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
          );
        })}
      </div>
    </>
  );
};

export default PostCard;
