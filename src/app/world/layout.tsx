import { SubNav } from "@/components/SubNav";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function WorldLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/world", title: "World" },
    { href: "/world/storyline", title: "Storyline" },
    { href: "/world/races", title: "Races" },
    { href: "/world/regions", title: "Regions" },
  ];

  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - World</h1>
      </header>
      <main className="panel">
        <SubNav
          links={links}
          icon={<img src="https://utfs.io/f/e0BHXYWYpV1NcGykJnm4P0hJ2ERyDWqe9dvOoN5SbMzHniAp" alt="" />}
        />
        <section>
          <div className="section-content">{children}</div>
        </section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
