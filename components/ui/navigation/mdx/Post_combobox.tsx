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
import { usePathname } from "next/navigation";

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const pathname = usePathname();

  const posts = allPosts.map((post) => ({
    value: post.title,
    label: post.title,
    link: post.slug,
  }));

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
              <Link className="w-full flex justify-between" href={post.link}>
                <CommandItem
                  key={post.value}
                  onSelect={() => {
                    setValue(post.value);
                    setOpen(false);
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
