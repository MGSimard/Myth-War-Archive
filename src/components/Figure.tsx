"use client";
import { useState, useEffect, useRef } from "react";

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
        <LightboxContent fullSrc={fullSrc} />
        <button type="button" onClick={closeDialog} aria-label="Close Dialog" className="btn-close-lightbox">
          {/* TODO: ICON */}
          Close
        </button>
      </dialog>
    </>
  );
}

function LightboxContent({ fullSrc }: { fullSrc: string }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handlePointerDown = (e: PointerEvent) => {
    console.log("POINTER DOWN!");
    if (!imgRef.current) return;
    imgRef.current.setPointerCapture(e.pointerId);
    setIsDragging(true);
  };
  const handlePointerUp = (e: PointerEvent) => {
    console.log("POINTER UP!");
    if (!imgRef.current) return;
    imgRef.current.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  const handleImgDrag = () => {
    console.log("handleImgDrag Triggered!");
  };
  const handleImgZoom = () => {
    console.log("handleImgZoom Triggered!");
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const image = imgRef.current;

    // Add a onLoad from img constraint for adding event listeners?
    // Probably doesn't matter, but currently this all mounts on page render.
    // Since Dialog and img do render in DOM, even if image isn't fetched (Lazy, loads on viewport visibility)
    if (image) {
      image.addEventListener("pointerdown", handlePointerDown, { signal });
      image.addEventListener("pointerup", handlePointerUp, { signal });
    }

    return () => {
      controller.abort();
    };
  }, [imgRef]);

  useEffect(() => {
    if (isDragging) console.log("DRAGGING!");
    else console.log("NOT DRAGGING!");
  }, [isDragging]);

  /* TODO: Consider disabling touchActions in css */
  return (
    <div className="lightbox-content">
      <img ref={imgRef} src={fullSrc} alt="" loading="lazy" draggable="false" />
    </div>
  );
}
