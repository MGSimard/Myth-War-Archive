import maps from "@/data/maps.json";
import { IconDownload } from "@/components/Icons";

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
                <a
                  href={map.link}
                  download={map.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                  aria-label={`Download ${map.file} - ${map.map}`}
                  title={`Download ${map.file} - ${map.map}`}>
                  <IconDownload />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
