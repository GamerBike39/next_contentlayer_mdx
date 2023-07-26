import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

import "@code-hike/mdx/dist/index.css";
import NavPost from "@/components/ui/navigation/mdx/NavPosts";
import Image from "next/image";

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
    <div className="relative">
      <article className="py-6 prose dark:prose-invert lg:max-w-4xl mx-auto">
        {post.picture ? (
          <div className="w-full h-[600px] mb-20 relative flex items-center rounded-lg">
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
              sizes="100vw"
              className="brightness-[0.7] object-cover overlayImgBlack"
            />

            <div className="relative z-10 h-full w-full flex justify-end flex-col items-center ">
              <h1 className="mb-2 text-white">{post.title}</h1>
              {post.description && (
                <p className="text-xl mt-0 text-white">{post.description}</p>
              )}
            </div>
          </div>
        ) : (
          <h1 className="mb-2">{post.title}</h1>
        )}

        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
      <div className="fixed lg:left-0 lg:top-32 left-0 top-0 z-50 dark:bg-black bg-white lg:bg-transparent dark:lg:bg-transparent w-full lg:w-fit py-3 h-auto">
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
