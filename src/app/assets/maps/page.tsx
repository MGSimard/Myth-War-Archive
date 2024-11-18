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
            <th className="static">File</th>
            <th>Zone</th>
            <th className="preview">Preview</th>
          </tr>
        </thead>
        <tbody>
          {maps.map((map) => (
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
              <td className="preview">
                <img
                  src="https://vaultmedia.ign.com/rpgvault/image/article/751/751438/mythwar06121701a_1166419323.jpg"
                  alt="img"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
