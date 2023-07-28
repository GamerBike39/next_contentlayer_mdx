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

const PostCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative ">
        {allPosts.map((post, index) => {
          return (
            <Card key={post._id} className="relative">
              <Link href={post.slug}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
              </Link>
              <CardContent>
                <CardDescription className="min-h-[50px]">
                  {post.description}
                </CardDescription>
              </CardContent>
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
