"use client";
import { useState } from "react";
import { IconClose } from "./Icons";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section id="announcement-banner">
      <h2>
        A new version of the Myth War Archive is available at:{" "}
        <a className="link" href="https://mwarchive.pages.dev" target="_blank" rel="noopener noreferrer">
          mwarchive.pages.dev
        </a>
      </h2>
      <button onClick={() => setIsVisible(false)} className="banner-close-button" aria-label="Close banner">
        <IconClose />
      </button>
    </section>
  );
}
