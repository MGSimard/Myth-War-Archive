"use client";
import { useEffect, useRef, type KeyboardEvent } from "react";

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
        <LightboxContent fullSrc={fullSrc} dialogRef={dialogRef} />
        <button type="button" onClick={closeDialog} aria-label="Close Dialog" className="btn-close-lightbox">
          {/* TODO: ICON */}
          Close
        </button>
      </dialog>
    </>
  );
}

/* TODO REMOVE "ANY" */
function LightboxContent({
  fullSrc,
  dialogRef,
}: {
  fullSrc: string;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragOffset = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: PointerEvent) => {
    if (!imgRef.current) return;
    dragOffset.current = { x: e.offsetX, y: e.offsetY };
    imgRef.current.setPointerCapture(e.pointerId);
    isDragging.current = true;
  };
  const handlePointerUp = (e: PointerEvent) => {
    if (!imgRef.current) return;
    dragOffset.current = null;
    imgRef.current.releasePointerCapture(e.pointerId);
    isDragging.current = false;
  };

  // I want to try a version with transforms instead. This would also make zoom calcs easier (Resnapping on zoom)
  const handleImgDrag = (e: PointerEvent) => {
    const container = imgRef?.current?.parentElement;
    if (!isDragging || !imgRef.current || !dragOffset.current || !container) return;
    if (!container) return;
    // INITIAL POINTER > IMAGE Offset:      dragOffset.current
    // CURRENT POINTER > IMAGE Offset:      { x: e.offsetX, y: e.offsetY }
    // CURRENT IMAGE > CONTAINER Offset:    { x: imgRef.current.offsetLeft, y: imgRef.current.offsetTop }
    // CURRENT POINTER > CONTAINER Offset:  { x: e.offsetX + imgRef.current.offsetLeft, y: e.offsetY + imgRef.current.offsetTop}

    // Get offset from pointer to container then get img pos result.
    const ptc = { x: e.offsetX + imgRef.current.offsetLeft, y: e.offsetY + imgRef.current.offsetTop };
    const imgTargetPos = { x: ptc.x - dragOffset.current.x, y: ptc.y - dragOffset.current.y };

    // Boundary constraints (Keep image from being dragged too far INWARDS of container)
    const containerRect = container.getBoundingClientRect();
    const imgRect = imgRef.current.getBoundingClientRect();
    const minX = containerRect.width - imgRect.width;
    const minY = containerRect.height - imgRect.height;
    const constrainedX = Math.max(minX, Math.min(0, imgTargetPos.x));
    const constrainedY = Math.max(minY, Math.min(0, imgTargetPos.y));

    if (imgRect.width > containerRect.width) {
      imgRef.current.style.left = `${constrainedX}px`;
    }
    if (imgRect.height > containerRect.height) {
      imgRef.current.style.top = `${constrainedY}px`;
    }
  };

  const handleZoomIn = () => {
    const container = imgRef?.current?.parentElement;
    if (!imgRef.current || !container) return;

    const imgRect = imgRef.current.getBoundingClientRect();

    imgRef.current.style.width = `${imgRect.width + 800}px`;
    if (imgRect.width <= container.clientWidth) {
      imgRef.current.style.removeProperty("left");
    }
    if (imgRect.width <= container.clientHeight) {
      imgRef.current.style.removeProperty("top");
    }
  };
  const handleZoomOut = () => {
    const container = imgRef?.current?.parentElement;
    if (!imgRef.current || !container) return;

    const imgRect = imgRef.current.getBoundingClientRect();

    imgRef.current.style.width = `${Math.max(800, imgRect.width - 800)}px`;
    if (imgRect.width <= container.clientWidth) {
      imgRef.current.style.removeProperty("left");
    }

    if (imgRect.height <= container.clientHeight) {
      imgRef.current.style.removeProperty("top");
    }
  };

  // SET POINTER EVENTS
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const image = imgRef.current;

    if (image) {
      image.addEventListener("pointerdown", handlePointerDown, { signal });
      image.addEventListener("pointerup", handlePointerUp, { signal });
      image.addEventListener("pointercancel", handlePointerUp, { signal });
      image.addEventListener("pointermove", handleImgDrag, { signal });
    }

    return () => {
      controller.abort();
    };
  }, [imgRef]);

  // RESET STYLES TO DEFAULT ON DIALOG CLOSE
  useEffect(() => {
    const handleResetStyles = () => {
      if (imgRef.current) {
        imgRef.current.style.removeProperty("left");
        imgRef.current.style.removeProperty("top");
        imgRef.current.style.removeProperty("width");
      }
    };

    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener("close", handleResetStyles);
    return () => {
      dialog.removeEventListener("close", handleResetStyles);
    };
  }, [dialogRef]);

  return (
    <div className="lightbox-content">
      <img ref={imgRef} src={fullSrc} alt="" loading="lazy" draggable="false" />
      <div className="lb-btns-zoom">
        <button type="button" onClick={handleZoomIn}>
          Zoom In
        </button>
        <button type="button" onClick={handleZoomOut}>
          Zoom Out
        </button>
      </div>
    </div>
  );
}
