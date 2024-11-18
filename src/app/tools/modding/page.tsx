import toolsMod from "@/data/tools-mod.json";
import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Modding</h2>
      <hr className="divider" />
      <table className="table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {toolsMod.map((tool) => (
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
                  {tool.file}
                  <IconDownload />
                </a>
              </td>
              <td>
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
