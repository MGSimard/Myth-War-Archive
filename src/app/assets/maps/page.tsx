const maps = [{ file: "Map001", map: "Sky Passage (MW1)", link: "https://google.com" }];

export default function Page() {
  return (
    <>
      <h2>Maps</h2>
      <hr className="divider" />
      <table>
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
                <a href={map.link} download={`${map.file} - ${map.map}`}>
                  <button type="button">Download</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
