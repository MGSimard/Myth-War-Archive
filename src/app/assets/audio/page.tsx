import { AudioPlayer } from "@/components/AudioPlayer";
import { IconDownload } from "@/components/Icons";
import audio from "@/data/assets-audio.json";

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
            {audio.music.map((music) => (
              <tr key={music.file}>
                <td className="static">
                  <a
                    href={music.link}
                    download={music.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                    aria-label={`Download ${music.file}`}
                    title={`Download ${music.file}`}>
                    <IconDownload />
                    {music.file}
                  </a>
                </td>
                <td>{music.description}</td>
                <td>
                  <AudioPlayer src={music.link} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </>
  );
}
