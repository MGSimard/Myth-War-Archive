import maps from "@/data/maps.json";
import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Maps</h2>
      <hr className="divider" />
      <table className="table">
        <thead>
          <tr>
            <th>File</th>
            <th>Zone</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {maps.map((map) => (
            <tr key={map.file}>
              <td>
                <a
                  href={map.link}
                  download={map.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                  aria-label={`Download ${map.file}`}
                  title={`Download ${map.file}`}>
                  {map.file}
                  <IconDownload />
                </a>
              </td>
              <td>
                <ul>
                  {map.zones.map((zone) => (
                    <li key={`${map.file}-${zone}`}>{zone}</li>
                  ))}
                </ul>
              </td>
              <td>
                <img alt="img" className="table-prev" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
