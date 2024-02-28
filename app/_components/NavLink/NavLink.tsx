"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

export default function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={twMerge(
        "text-rose-300 hover:text-rose-500",
        pathname == path && "font-bold",
      )}
    >
      {children}
    </Link>
  );
}
