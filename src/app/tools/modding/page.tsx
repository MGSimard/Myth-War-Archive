import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Modding</h2>
      <hr className="divider" />
      <table className="table-assets">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tool</td>
            <td>Desc</td>
            <td>
              <a
                href="#"
                download=""
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download"
                aria-label={`Download ${"TOOLHERE"}`}
                title={`Download ${"TOOLHERE"}`}>
                <IconDownload />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
