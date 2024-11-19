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
              <th className="audio-file">File</th>
              <th className="audio-desc">Description</th>
            </tr>
          </thead>
          <tbody>
            {audio.music.map((music) => (
              <tr key={music.file}>
                <td>
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
                  <AudioPlayer src={music.link} />
                </td>
                <td>{music.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </>
  );
}
