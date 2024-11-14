"use client";
import { useRef } from "react";

interface FigureTypes {
  src: string;
  fullSrc: string;
  caption: string;
  version: "Myth War Online" | "Myth War II";
}

export function Figure({ src, fullSrc, caption, version }: FigureTypes) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };
  const closeDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (dialogRef.current && e.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <>
      <figure onClick={openDialog} aria-haspopup="dialog" role="button" tabIndex={0} aria-label="Open Dialog">
        <img src={`${src}`} alt="" />
        <figcaption>
          {caption}
          <span>{version}</span>
        </figcaption>
      </figure>
      <dialog ref={dialogRef} onClick={handleOutsideClick} className="lightbox">
        {/* Image container TODO: Drag & Zoom image within container, overflow: hidden image from container*/}
        <div className="lightbox-content">
          <img src={fullSrc} alt="" loading="lazy" />
        </div>
        <button type="button" onClick={closeDialog} aria-label="Close Dialog" className="btn-close-lightbox">
          {/* TODO: ICON */}
          Close
        </button>
      </dialog>
    </>
  );
}
