"use client";
import { useRef, type KeyboardEvent } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

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
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDialog();
    }
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
      <figure
        onClick={openDialog}
        onKeyDown={handleKeyDown}
        aria-haspopup="dialog"
        role="button"
        tabIndex={0}
        aria-label="Open Dialog">
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

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <button onClick={() => zoomIn()}>+</button>
        <button onClick={() => zoomOut()}>-</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </div>
    );
  };

  return (
    <div className="lightbox-content">
      <TransformWrapper initialScale={1}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <Controls />
            <TransformComponent>
              <img ref={imgRef} src={fullSrc} alt="" loading="lazy" draggable="false" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
