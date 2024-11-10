import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <img src="#" alt="Logo" />
      <ul>
        <li>
          <Link href="#">L1</Link>
        </li>
        <li>
          <Link href="#">L2</Link>
        </li>
        <li>
          <Link href="#">L3</Link>
        </li>
        <li>
          <Link href="#">L4</Link>
        </li>
      </ul>
    </nav>
  );
}
