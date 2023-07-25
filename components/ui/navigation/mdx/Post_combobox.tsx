"use client";
import * as React from "react";
import { allPosts } from "@/.contentlayer/generated";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface ArticleMenuProps {
  params?: {
    slug: string[];
  };
}

export function ArticleMenu({ params }: ArticleMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const pathname = usePathname();
  const router = useRouter();

  const posts = allPosts.map((post) => ({
    value: post.title,
    label: post.title,
    link: post.slug,
  }));

  const handleSelect = (value: string) => {
    const selectedPost = posts.find((post) => post.value === value);
    if (selectedPost) {
      router.push(selectedPost.link);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? posts.find((post) => post.value === value)?.label
            : "Selectionnez un article..."}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Cherchez un article..." className="h-9" />
          <CommandEmpty>No post found.</CommandEmpty>
          <CommandGroup>
            {posts.map((post) => (
              <Link
                key={"articleMenu" + post.value}
                className="w-full flex justify-between"
                href={post.link}
              >
                <CommandItem
                  onSelect={() => {
                    setValue(post.value);
                    setOpen(false);
                    handleSelect(post.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSelect(post.value);
                    }
                  }}
                  className="flex items-center h-full w-full cursor-pointer"
                >
                  <span>{post.label}</span>

                  <CheckCircle2
                    className={cn(
                      "ml-auto h-4 w-4",
                      pathname === post.link
                        ? "text-green-500"
                        : "text-transparent"
                    )}
                  />
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
