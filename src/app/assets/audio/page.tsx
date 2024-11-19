import { AudioPlayer } from "@/components/AudioPlayer";
import { IconDownload } from "@/components/Icons";
import audio from "@/data/assets-audio.json";

export default function Page() {
  return (
    <>
      <h2>Audio</h2>
      <hr className="divider" />
      <details className="details-header">
        <summary>
          <h3>Music</h3>
        </summary>
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
                  <AudioPlayer src={music.link} loop={true} />
                </td>
                <td className="tddesc">{music.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
      <details className="details-header">
        <summary>
          <h3>Ambient</h3>
        </summary>
        <table className="table">
          <thead>
            <tr>
              <th className="audio-file">File</th>
              <th className="audio-desc">Description</th>
            </tr>
          </thead>
          <tbody>
            {audio.ambient.map((sound) => (
              <tr key={sound.file}>
                <td>
                  <a
                    href={sound.link}
                    download={sound.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                    aria-label={`Download ${sound.file}`}
                    title={`Download ${sound.file}`}>
                    <IconDownload />
                    {sound.file}
                  </a>
                  <AudioPlayer src={sound.link} loop={false} />
                </td>
                <td className="tddesc">{sound.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
      <details className="details-header">
        <summary>
          <h3>Sound Effects</h3>
        </summary>
        <table className="table">
          <thead>
            <tr>
              <th className="audio-file">File</th>
              <th className="audio-desc">Description</th>
            </tr>
          </thead>
          <tbody>
            {audio.effects.map((effect) => (
              <tr key={effect.file}>
                <td>
                  <a
                    href={effect.link}
                    download={effect.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                    aria-label={`Download ${effect.file}`}
                    title={`Download ${effect.file}`}>
                    <IconDownload />
                    {effect.file}
                  </a>
                  <AudioPlayer src={effect.link} loop={false} />
                </td>
                <td className="tddesc">{effect.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </>
  );
}
