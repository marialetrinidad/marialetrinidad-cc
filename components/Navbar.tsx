"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarPath {
  label: string
  url: string
}

const navbar_paths: NavbarPath[] = [
  {
    label: "SELECTED WORK",
    url: "/"
  },
  {
    label: "ILLUSTRATION",
    url: "/illustration"
  },
  {
    label: "ABOUT/CONTACT",
    url: "/about"
  }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 gap-3">
      <Link href="/">
        <Image
          src="/navbar_logo.png"
          alt="Mariale Trinidad"
          width={299}
          height={40}
          priority
        />
      </Link>
      <div className="flex gap-6 text-sm font-medium tracking-wide">
        <span>{pathname}</span>
        {navbar_paths.map((path) => (
          <Link key={path.url} href={path.url}>
            <span className={}>{path.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
