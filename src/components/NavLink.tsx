"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkTypes {
  path: string;
  icon: React.ReactNode;
}

export function NavLink({ path, icon }: NavLinkTypes) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${path.toLowerCase()}`);

  return (
    <li>
      <Link href={`/${path.toLowerCase()}`} className={`mainLink${isActive ? " activeLink" : ""}`}>
        {icon}
        <span>{path}</span>
      </Link>
    </li>
  );
}
