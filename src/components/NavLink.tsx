"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ path, icon }: { path: string; icon: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={`/${path.toLowerCase()}`} className={pathname === `/${path.toLowerCase()}` ? "activeLink" : ""}>
        {icon}
        <span>{path}</span>
      </Link>
    </li>
  );
}
