export function Lightbox() {
  return (
    <dialog ref={dialogRef} onClick={handleOutsideClick} className="lightbox">
      <img src="https://utfs.io/f/e0BHXYWYpV1NdGG50LQzJHT9ox4VtUMZX7Bazbr538mg2SCw" alt="" />
      <button type="button" onClick={closeDialog}>
        ×
      </button>
      <button type="button">o</button>
    </dialog>
  );
}
