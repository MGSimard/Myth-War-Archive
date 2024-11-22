import { SubNav } from "@/components/SubNav";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function AssetsLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/assets", title: "Assets" },
    { href: "/assets/maps", title: "Maps" },
    { href: "/assets/images", title: "Images" },
    { href: "/assets/audio", title: "Audio" },
  ];

  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Assets</h1>
      </header>
      <main className="panel">
        <SubNav links={links} icon={<img src="/assets/icon-assets.webp" alt="" />} />
        <section>{children}</section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
