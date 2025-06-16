import { type Metadata } from "next";
import { Geist, Playfair, Playfair_Display_SC } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "@/styles/core.css";
import { Banner } from "@/components/Banner";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", fallback: ["sans-serif"] });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfairSC",
});

export const metadata: Metadata = {
  title: "Myth War Archive",
  description:
    "Myth War Archive | A resource meant to preserve the history of the Myth War series, and act as a hub for ease of research and development access.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${playfairDisplaySC.variable} ${playfair.variable}`}>
        <div className="content">
          <Banner />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
