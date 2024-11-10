import { NavLink } from "@/components/NavLink";
import { IconMap, IconTools, IconGroup, IconAssets } from "@/components/Icons";

export function Nav() {
  return (
    <nav>
      <img src="#" alt="Logo" />
      <ul>
        <NavLink path="World" icon={<IconMap />} />
        <NavLink path="Assets" icon={<IconAssets />} />
        <NavLink path="Tools" icon={<IconTools />} />
        <NavLink path="Communities" icon={<IconGroup />} />
      </ul>
    </nav>
  );
}
