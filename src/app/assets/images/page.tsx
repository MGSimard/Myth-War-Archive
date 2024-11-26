import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myth War Archive - Images",
  description: "Myth War Archive | Image directory of assets from Myth War.",
};

export default function Page() {
  return (
    <>
      <h2>Images</h2>
      <hr className="divider" />
      <details className="details-header">
        <summary>
          <h3>Characters</h3>
        </summary>
        <table className="table">
          <thead>
            <tr>
              <th className="th-static tborder">File</th>
              <th>Description</th>
              <th className="th-preview">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tborder"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </details>
      <details className="details-header">
        <summary>
          <h3>Wallpapers</h3>
        </summary>
        <table className="table">
          <thead>
            <tr>
              <th className="th-static tborder">File</th>
              <th>Description</th>
              <th className="th-preview">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tborder"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </details>
    </>
  );
}
