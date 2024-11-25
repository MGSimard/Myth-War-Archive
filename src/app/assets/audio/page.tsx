import { AudioPlayer } from "@/components/AudioPlayer";
import { IconDownload } from "@/components/Icons";
import audio from "@/data/assets-audio.json";

export default function Page() {
  return (
    <>
      <h2>Audio</h2>
      <hr className="divider" />
      <Section title="Music" data={audio.music} />
      <Section title="Ambient" data={audio.ambient} />
      <Section title="Sound Effects" data={audio.effects} />
    </>
  );
}

interface DataTypes {
  file: string;
  description: string;
  link: string;
}

function Section({ title, data }: { title: string; data: DataTypes[] }) {
  return (
    <details className="details-header">
      <summary>
        <h3>{title}</h3>
      </summary>
      <table className="table">
        <thead>
          <tr>
            <th className="th-audio tborder">File</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.file}>
              <td className="tborder">
                <a
                  href={entry.link}
                  download={entry.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                  aria-label={`Download ${entry.file}`}
                  title={`Download ${entry.file}`}>
                  <IconDownload />
                  {entry.file}
                </a>
                <AudioPlayer src={entry.link} loop={false} />
              </td>
              <td>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}
