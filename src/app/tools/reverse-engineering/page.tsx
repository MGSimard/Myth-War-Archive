import toolsRE from "@/data/tools-re.json";
import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Reverse-Engineering</h2>
      <hr className="divider" />
      <table className="table">
        <thead>
          <tr>
            <th className="th-static">Tool</th>
            <th className="th-static tborder">Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {toolsRE.map((tool) => (
            <tr key={tool.file}>
              <td>
                <a
                  href={tool.link}
                  download={tool.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                  aria-label={`Download ${tool.file}`}
                  title={`Download ${tool.file}`}>
                  <IconDownload />
                  {tool.file}
                </a>
              </td>
              <td className="tborder">
                <ul>
                  {tool.authors.map((author) => (
                    <li key={author}>{author}</li>
                  ))}
                </ul>
              </td>
              <td>{tool.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
