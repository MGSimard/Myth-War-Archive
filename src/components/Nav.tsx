import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <img src="#" alt="Logo" />
      <ul>
        <li>
          <Link href="#">
            <img src="https://i.imgur.com/EfiueTt.jpeg" alt="O" />
            <span>Item One</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="https://i.imgur.com/EfiueTt.jpeg" alt="O" />
            <span>This</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="https://i.imgur.com/EfiueTt.jpeg" alt="O" />
            <span>
              Item Number ThreeItem Number ThreeItem Number ThreeItem Number ThreeItem Number ThreeItem Number ThreeItem
              Number ThreeItem Number Three
            </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="https://i.imgur.com/EfiueTt.jpeg" alt="O" />
            <span>Fourth Item</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
