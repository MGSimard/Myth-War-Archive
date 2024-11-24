export default function Page() {
  return (
    <>
      <h2>Images</h2>
      <hr className="divider" />
      <details>
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
      <details>
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
