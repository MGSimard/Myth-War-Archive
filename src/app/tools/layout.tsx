import { SubNav } from "@/components/SubNav";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/tools", title: "Tools" },
    { href: "/tools/reverse-engineering", title: "Reverse-Engineering" },
    { href: "/tools/modding", title: "Modding" },
  ];

  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Tools</h1>
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
