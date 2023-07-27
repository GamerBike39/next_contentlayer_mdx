"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumbs({}) {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);
  return (
    <div className="flex items-center space-x-2 text-sm">
      <Link href="/" className="flex items-center no-underline">
        <Home className="w-4 h-4 mr-3" /> -
      </Link>
      {crumbs.map((crumb, index) => {
        const href = `/${crumbs.slice(0, index + 1).join("/")}`;

        return (
          <React.Fragment key={crumb}>
            <Link
              href={href}
              className="hover:text-blue-500 transition-colors duration-300 no-underline text-gray-400"
            >
              {crumb}
            </Link>
            {index < crumbs.length - 1 && (
              <span className="text-gray-500">/</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
