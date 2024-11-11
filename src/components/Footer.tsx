import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>Myth War Archive © 2024</div>
      <div>
        <ul>
          <li>
            <Link href="https://github.com/MGSimard/Myth-War-Archive" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
