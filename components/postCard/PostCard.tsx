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
import Image from "next/image";

export default function PostCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <Card key={post._id} className="relative min-h-[250px] z-10">
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
            <CardFooter className="flex flex-col my-2 gap-3 items-start w-full">
              <div className="flex flex-wrap gap-3 items-center w-full">
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
              <hr />
              <Link
                href={post.slug}
                className="absolute bottom-2 right-2 flex justify-start"
              >
                <SVGHoverAnimation text="Consulter" />
              </Link>
            </CardFooter>
            {/* {post.picture && (
              <Image
                src={post.picture}
                alt={post.title}
                fill
                className="rounded-md brightness-[0.2] -z-10"
              />
            )} */}
          </Card>
        ))}
      </div>
    </>
  );
}
