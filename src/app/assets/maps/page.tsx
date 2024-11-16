import maps from "@/data/maps.json";
import { DownloadButton } from "@/components/DownloadButton";

export default function Page() {
  return (
    <>
      <h2>Maps</h2>
      <hr className="divider" />
      <table className="table-assets">
        <thead>
          <tr>
            <th>File</th>
            <th>Map</th>
            <th>Preview</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {maps.map((map) => (
            <tr key={map.file}>
              <td>{map.file}</td>
              <td>{map.map}</td>
              <td>
                <img alt="img" />
              </td>
              <td>
                <DownloadButton entry={map} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
