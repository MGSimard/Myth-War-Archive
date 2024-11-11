"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SubNavLink({ path, title }: { path: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li>
      <Link href={path} className={isActive ? "activeSubNavLink" : ""}>
        {title}
      </Link>
    </li>
  );
}
