import { type Metadata } from "next";
import "@/styles/core.css";

export const metadata: Metadata = {
  title: "Myth War Archive",
  description: "Desc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
