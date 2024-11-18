import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Audio</h2>
      <hr className="divider" />
      <details>
        <summary>Music</summary>
        <table className="table">
          <thead>
            <tr>
              <th className="static">File</th>
              <th>Description</th>
              <th className="preview">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="static"></td>
              <td></td>
              <td className="preview"></td>
            </tr>
          </tbody>
        </table>
      </details>
    </>
  );
}
