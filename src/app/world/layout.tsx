import Link from "next/link";
import { ToTopButton } from "@/components/ToTopButton";

export default function WorldLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - World</h1>
      </header>
      <main className="panel">
        <section>
          <div className="section-header">
            <div className="sh-title">
              <img alt="O" />
              <ul>
                <li>
                  <Link href="/world/storyline">Storyline</Link>
                  <Link href="/world/races">Races</Link>
                  <Link href="/world/regions">Regions</Link>
                </li>
              </ul>
            </div>
            <div className="sh-topright">More &gt;&gt;</div>
          </div>
          <div className="section-content">{children}</div>
        </section>
        <ToTopButton />
      </main>
    </>
  );
}