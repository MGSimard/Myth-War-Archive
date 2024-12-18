import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function CommunitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Communities</h1>
      </header>
      <main className="panel">
        <section>{children}</section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
