"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ path, icon }: { path: string; icon: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === `/${path.toLowerCase()}` || pathname.startsWith(`/${path.toLowerCase()}/`);

  return (
    <li>
      <Link href={`/${path.toLowerCase()}`} className={isActive ? "activeLink" : ""}>
        {icon}
        <span>{path}</span>
      </Link>
    </li>
  );
}
