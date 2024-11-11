"use client";

import { IconUpChevron } from "@/components/Icons";

export function BtnScrollToTop() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" onClick={scrollToTop} className="btn-scroll-to-top" aria-label="Scroll to top">
      <div></div>
      <IconUpChevron />
    </button>
  );
}
