"use client";
import Link from "next/link";
import { IconMap, IconTools, IconGroup, IconAssets } from "@/components/Icons";

export function Nav() {
  return (
    <nav>
      <img src="#" alt="Logo" />
      <ul>
        <li>
          <Link href="/world">
            <IconMap />
            <span>World</span>
          </Link>
        </li>
        <li>
          <Link href="/assets">
            <IconAssets />
            <span>Assets</span>
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <IconTools />
            <span>Tools</span>
          </Link>
        </li>
        <li>
          <Link href="/communities">
            <IconGroup />
            <span>Communities</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
