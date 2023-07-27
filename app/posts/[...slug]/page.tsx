import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

import "@code-hike/mdx/dist/index.css";
import NavPost from "@/components/ui/navigation/mdx/NavPosts";
import Image from "next/image";
import Link from "next/link";
import { Tags } from "lucide-react";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(", "),
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@GamerBike39",
      images: [
        "https://media.discordapp.net/attachments/1041748300510003202/1126456355713187840/metaImg.jpg?width=1140&height=625",
      ],
    },
    openGraph: {
      type: "website",
      url: `/posts/${post.slugAsParams}`,
      title: "Mont Poupet Bike Park",
      description: post.description,
      images: [
        {
          url: "https://media.discordapp.net/attachments/1041748300510003202/1126456355713187840/metaImg.jpg?width=1140&height=625",
          width: 800,
          height: 600,
          alt: "JulWebDev",
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      {post.picture ? (
        <div className="w-full min-h-[500px] mb-10 relative flex items-center rounded-lg">
          <Image
            src={post.picture}
            alt={post.title}
            fill
            sizes="10vw"
            className="blur-3xl -z-10"
          />
          <Image
            src={post.picture}
            alt={post.title}
            fill
            priority
            sizes="80vw"
            className="brightness-[0.7] object-cover overlayImgBlack"
          />

          <div className="relative z-10 h-full w-full flex justify-end flex-col items-center ">
            <h1 className="mb-2 text-white text-7xl brightness-200 text-center">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-xl mt-0 text-white">{post.description}</p>
            )}
          </div>
        </div>
      ) : (
        <h1 className="mt-20 xl:mt-10 mb-2 text-center text-3xl xl:text-6xl ">
          {post.title}
        </h1>
      )}
      <article className="py-6 prose dark:prose-invert lg:max-w-4xl mx-auto">
        {/* affichage des tags */}
        <div className="flex my-2 gap-3 items-center w-full justify-start">
          <Tags />
          {post.tags &&
            post.tags.map((tag, index) => (
              <Link
                href={`/tags/${tag}`}
                key={tag + index}
                className="border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline"
              >
                {tag}
              </Link>
            ))}
        </div>
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
      <div className="fixed xl:left-0 xl:top-32 left-0 top-0 z-50 dark:bg-black bg-white xl:bg-transparent dark:xl:bg-transparent w-full xl:w-fit py-3 h-auto">
        {post.navigation ? (
          <NavPost
            navigationItems={post.navigation}
            params={{ slug: [post.slug] }}
          />
        ) : (
          <NavPost navigationItems={[]} params={{ slug: [post.slug] }} />
        )}
      </div>
    </div>
  );
}
