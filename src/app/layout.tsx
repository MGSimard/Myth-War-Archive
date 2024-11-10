import { type Metadata } from "next";
import { Nav } from "@/components/Nav";
import "@/styles/core.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Myth War Archive",
  description: "Desc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
