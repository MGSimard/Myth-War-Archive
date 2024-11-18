"use client";
import { useFilter } from "@/components/FilterProvider";
import { IconDownload } from "@/components/Icons";

type TableDataTypes = {
  file: string;
  zones: string[];
  link: string;
  preview: string;
}[];

export function TableRows({ tableData }: { tableData: TableDataTypes }) {
  const { filter } = useFilter();

  const filteredData = tableData.filter((map) => {
    const flattened = [map.file, ...map.zones].flat();
    return flattened.some((value) => value.toLowerCase().includes(filter.toLowerCase()));
  });

  if (!filteredData.length) {
    return (
      <tr>
        <td className="static" style={{ textAlign: "center" }}>
          N/A
        </td>
        <td className="break">No results. ({filter})</td>
        <td className="preview" style={{ textAlign: "center" }}>
          N/A
        </td>
      </tr>
    );
  }

  return (
    <>
      {filteredData.map((map) => (
        <tr key={map.file}>
          <td className="static">
            <a
              href={map.link}
              download={map.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
              aria-label={`Download ${map.file}`}
              title={`Download ${map.file}`}>
              <IconDownload />
              {map.file}
            </a>
          </td>
          <td>
            <ul>
              {map.zones.map((zone) => (
                <li key={`${map.file}-${zone}`}>{zone}</li>
              ))}
            </ul>
          </td>
          <td className="preview">{map.preview && <img src={map.preview} alt={`${map.file} Preview`} />}</td>
        </tr>
      ))}
    </>
  );
}
