import { type Metadata } from "next";
import { Geist, Playfair, Playfair_Display_SC } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "@/styles/core.css";

const geist = Geist({ subsets: ["latin"], fallback: ["sans-serif"] });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfairSC",
});

export const metadata: Metadata = {
  title: "Myth War Archive",
  description: "Desc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${playfairDisplaySC.variable} ${playfair.variable}`}>
        <div className="content">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
