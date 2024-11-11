import { SubNavLink } from "./SubNavLink";

interface PropTypes {
  icon: React.ReactNode;
  links: { href: string; title: string }[];
}

export function SubNav({ icon, links }: PropTypes) {
  return (
    <nav className="subnav">
      {icon}
      <ul>
        {links.map((link) => (
          <SubNavLink key={link.title} path={link.href} title={link.title} />
        ))}
      </ul>
    </nav>
  );
}
