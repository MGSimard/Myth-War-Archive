import type { Metadata } from "next";
import maps from "@/data/maps.json";
import { FilterProvider } from "@/components/FilterProvider";
import { TableRows } from "@/components/TableRows";
import { FilterInput } from "@/components/FilterInput";

export const metadata: Metadata = {
  title: "Myth War Archive - Maps",
  description: "Myth War Archive | A list of all Myth War maps, previewable and directly downloadable tilesets.",
};

export default function Page() {
  return (
    <>
      <FilterProvider>
        <div className="maps-header">
          <h2>Maps</h2>
          <FilterInput />
        </div>
        <hr className="divider" />
        <table className="table">
          <thead>
            <tr>
              <th className="th-static tborder">File</th>
              <th>Zone</th>
              <th className="th-preview">Preview</th>
            </tr>
          </thead>
          <tbody>
            <TableRows tableData={maps} />
          </tbody>
        </table>
      </FilterProvider>
    </>
  );
}
