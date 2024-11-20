import communities from "@/data/communities.json";

export default function Page() {
  return (
    <>
      <h2>Communities</h2>
      <hr className="divider" />
      <Section title="Servers" data={communities.servers} />
      <hr className="divider" />
      <Section title="Discord" data={communities.discord} />
    </>
  );
}

interface DataTypes {
  name: string;
  link: string;
  description: string;
}

function Section({ title, data }: { title: string; data: DataTypes[] }) {
  return (
    <>
      <h3>{title}</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="audio-file filecol">Link</th>
            <th className="audio-desc">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.link}>
              <td className="filecol">
                <a href={entry.link} target="_blank">
                  {entry.name}
                </a>
              </td>
              <td>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
