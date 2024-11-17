import toolsRE from "@/data/tools-re.json";
import { IconDownload } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <h2>Reverse-Engineering</h2>
      <hr className="divider" />
      <table className="table-assets">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Author</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {toolsRE.map((tool) => (
            <tr key={tool.file}>
              <td>{tool.file}</td>
              <td>{tool.author}</td>
              <td>{tool.desc}</td>
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
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
