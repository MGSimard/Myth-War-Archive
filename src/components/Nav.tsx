import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/components/NavLink";
import { IconMap, IconTools, IconGroup, IconAssets } from "@/components/Icons";

export function Nav() {
  return (
    <nav>
      <Link href="/">
        <div className="nav-logo"></div>
      </Link>
      <ul>
        <NavLink path="World" icon={<IconMap />} />
        <NavLink path="Assets" icon={<IconAssets />} />
        <NavLink path="Tools" icon={<IconTools />} />
        <NavLink path="Communities" icon={<IconGroup />} />
      </ul>
    </nav>
  );
}
