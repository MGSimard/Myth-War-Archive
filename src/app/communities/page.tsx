import type { Metadata } from "next";
import communities from "@/data/communities.json";
import { IconLink } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Myth War Archive - Communities",
  description: "Myth War Archive | A directory of all main active and defunct communities for the Myth War games.",
};

export default function Page() {
  return (
    <>
      <h2>Communities</h2>
      <hr className="divider" />
      <Section title="Servers" data={communities.servers} />
      <Section title="Discord" data={communities.discord} />
      <Section title="Subreddits" data={communities.subreddits} />
      <Section title="Forums" data={communities.forums} />
      <hr className="divider" />
      <Section title="Official (Defunct)" data={communities.official} />
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
            <th className="th-static2 tborder">Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.link}>
              <td className="tborder">
                <a href={entry.link} target="_blank" className="link">
                  {entry.name} <IconLink />
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
