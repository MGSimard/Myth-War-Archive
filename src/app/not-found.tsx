import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myth War Archive - 404",
};

export default function NotFound() {
  return (
    <>
      <main className="notfound">
        <h1>Page Not Found</h1>
      </main>
    </>
  );
}
