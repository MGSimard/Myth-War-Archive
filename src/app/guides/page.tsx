import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myth War Archive - Guides",
  description: "Myth War Archive | Guide directory for all things Myth War.",
};

export default function Page() {
  return (
    <>
      <h2>Guides</h2>
      <hr className="divider" />
      <h3>Leveling</h3>
      <p>
        Contains guides regarding the entire leveling process from start to finish. Includes most efficient options and
        their alternatives. Within you&apos;ll also find information regarding events which coincide with the leveling
        process, such as the Wednesday Event.
      </p>
      <h3>Rebirth</h3>
      <p>-</p>
    </>
  );
}
