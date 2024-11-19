"use client";
import { useState, useRef, type KeyboardEvent } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { IconClose, IconFullScreen, IconReset, IconZoomIn, IconZoomout } from "@/components/Icons";

interface FigureTypes {
  src: string;
  fullSrc: string;
  caption: string;
  version: "Myth War Online" | "Myth War II";
}

export function Figure({ src, fullSrc, caption, version }: FigureTypes) {
  const [isLoading, setIsLoading] = useState(true);
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

  const imgRef = useRef<HTMLImageElement | null>(null);

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <button onClick={() => zoomIn()} aria-label="Zoom In" title="Zoom In">
          <IconZoomIn />
        </button>
        <button onClick={() => zoomOut()} aria-label="Zoom Out" title="Zoom Out">
          <IconZoomout />
        </button>
        <button onClick={() => resetTransform()} aria-label="Reset View" title="Reset View">
          <IconReset />
        </button>
      </div>
    );
  };

  return (
    <>
      <figure
        onClick={openDialog}
        onKeyDown={handleKeyDown}
        aria-haspopup="dialog"
        role="button"
        tabIndex={0}
        aria-label={caption}>
        <img src={`${src}`} alt="" />
        <figcaption>
          {caption}
          <span>{version}</span>
        </figcaption>
        <IconFullScreen />
      </figure>

      <dialog ref={dialogRef} className="lightbox">
        {isLoading && (
          <div className="loader">
            <div className="loader-logo lol"></div>
          </div>
        )}
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <Controls />
              <TransformComponent>
                <img
                  ref={imgRef}
                  src={fullSrc}
                  alt=""
                  loading="lazy"
                  draggable="false"
                  onLoad={() => setIsLoading(false)}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Close Dialog"
          className="btn-close-lightbox"
          title="Close">
          <IconClose />
        </button>
      </dialog>
    </>
  );
}
