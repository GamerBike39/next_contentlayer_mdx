import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import { Github, LinkIcon } from "lucide-react";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto pt-20 px-2">
      <article className="mx-auto flex flex-col max-w-6xl py-6 prose dark:prose-invert">
        <h1 className="text-clampXl">{page.title}</h1>
        {page.description && <p className="text-xl">{page.description}</p>}
        <div className="flex gap-6 mb-3">
          {page.site && (
            <Link href={page.site}>
              Visiter le site <LinkIcon className="inline-block" />{" "}
            </Link>
          )}
          {page.github && (
            <Link href={page.github}>
              Voir le code <Github className="inline-block" />
            </Link>
          )}
        </div>
        <hr className="m-0" />

        <div className="flex flex-col items-center justify-center text-left mdx w-full">
          <Mdx code={page.body.code} />
        </div>
      </article>
    </div>
  );
}
