import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { IconMap, IconTools, IconCommunities, IconAssets } from "@/components/Icons";

const Links = [
  { path: "World", icon: <IconMap /> },
  { path: "Assets", icon: <IconAssets /> },
  { path: "Tools", icon: <IconTools /> },
  { path: "Communities", icon: <IconCommunities /> },
];
// Opted against sublinks, action count ended up being the same anyways

export function Nav() {
  return (
    <nav className="sidenav">
      <Link href="/" className="sidenav-logo-wrapper">
        <div className="sidenav-logo"></div>
        <span>Myth War Archive</span>
      </Link>
      <ul>
        {Links.map((link) => (
          <NavLink key={link.path} path={link.path} icon={link.icon} />
        ))}
      </ul>
    </nav>
  );
}
