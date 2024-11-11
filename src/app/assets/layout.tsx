import { SubNav } from "@/components/SubNav";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function AssetsLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/assets", title: "Assets" },
    { href: "/assets/maps", title: "Maps" },
    { href: "/assets/audio", title: "Audio" },
    { href: "/assets/wallpapers", title: "Wallpapers" },
  ];

  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Assets</h1>
      </header>
      <main className="panel">
        <SubNav links={links} icon={<img src="https://avatars.githubusercontent.com/u/126427506?v=4" alt="" />} />
        <section>
          <div className="section-content">{children}</div>
        </section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
