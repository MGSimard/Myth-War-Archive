import { SubNav } from "@/components/SubNav";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/guides", title: "Guides" },
    { href: "/guides/leveling", title: "Leveling" },
    { href: "/guides/rebirth", title: "Rebirth" },
  ];

  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Guides</h1>
      </header>
      <main className="panel">
        <SubNav links={links} icon={<img src="/assets/icon-guides.webp" alt="" />} />
        <section>{children}</section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
