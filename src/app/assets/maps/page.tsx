import maps from "@/data/maps.json";
import { FilterProvider } from "@/components/FilterProvider";
import { TableRows } from "@/components/TableRows";
import { FilterInput } from "@/components/FilterInput";

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
              <th className="static filecol">File</th>
              <th>Zone</th>
              <th className="preview">Preview</th>
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
