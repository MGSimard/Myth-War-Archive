import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function Page() {
  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Home</h1>
      </header>
      <main className="panel">
        <section>
          <div className="section-content">
            <h2>Section</h2>
            <hr className="divider" />
            <p>Section stuff</p>
          </div>
        </section>
        <section>
          <div className="section-content">
            <h2>Section</h2>
            <hr className="divider" />
            <p>Section stuff</p>
          </div>
        </section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
