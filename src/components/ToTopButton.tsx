"use client";

export function ToTopButton() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" onClick={scrollToTop}>
      Back To Top
    </button>
  );
}
