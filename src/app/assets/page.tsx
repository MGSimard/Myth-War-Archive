import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Myth War Archive - Assets",
  description: "Myth War Archive | Myth War material pulled from official sources, for easy access and reference.",
};

export default function Page() {
  return (
    <>
      <h2>Assets</h2>
      <hr className="divider" />
      <h3>Maps</h3>
      <p>
        A collection of all maps from Myth War Online & Myth War II. A preview is available by hovering over the images,
        and downloads come in zip files containing 800x600 tiles which make up the full map. If you wish to stitch these
        together, visit the{" "}
        <Link href="/tools/reverse-engineering" className="link">
          Reverse-Engineering
        </Link>{" "}
        section and download the StitchTiles tool. Drag all the tiles onto the tool, enter the amount of columns and get
        an output.
      </p>
      <h3>Images</h3>
      <p>
        An archive of character sprites, item icons, wallpapers, and other visual assets from the games. These images
        reflect the unique style of the Myth War series.
      </p>
      <h3>Audio</h3>
      <p>
        Original game music, ambient tracks, and sound effects from Myth War Online & Myth War II played by the
        Singapore National Symphony Orchestra. Perfect for reliving the game&apos;s atmosphere or supporting fan
        projects.
      </p>
    </>
  );
}
