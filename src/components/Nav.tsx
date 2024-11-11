import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { IconMap, IconTools, IconGroup, IconAssets } from "@/components/Icons";

export function Nav() {
  return (
    <nav className="sidenav">
      <Link href="/" className="sidenav-logo-wrapper">
        <div className="sidenav-logo"></div>
        <span>Myth War Archive</span>
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
