"use client";

import { IconDownload } from "@/components/Icons";

interface MapTypes {
  file: string;
  map: string;
  link: string;
}

export function DownloadButton({ entry }: { entry: MapTypes }) {
  return (
    <a
      href={entry.link}
      download={entry.file}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-download"
      aria-label={`Download ${entry.file} - ${entry.map}`}
      title={`Download ${entry.file} - ${entry.map}`}>
      <IconDownload />
    </a>
  );
}
