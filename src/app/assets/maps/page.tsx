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
            <th>Zone</th>
            <th>Preview</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {maps.map((map) => (
            <tr key={map.file}>
              <td>{map.file}</td>
              <td>
                <ul>
                  {map.zones.map((zone) => (
                    <li key={`${map.file}-${zone}`}>{zone}</li>
                  ))}
                </ul>
              </td>
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
                  aria-label={`Download ${map.file}`}
                  title={`Download ${map.file}`}>
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
