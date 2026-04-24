"use client"

import { cn } from "@/lib/utils";
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
    <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-8 gap-3">
      <Link href="/">
        <Image
          className="w-48"
          src="/navbar_logo.png"
          alt="Mariale Trinidad"
          width={400}
          height={200}
          priority
        />
      </Link>
      <div className="flex gap-4 md:gap-20 text-md md:text-md font-normal">
        {navbar_paths.map((path) => (
          <Link key={path.url} href={path.url}>
            <span className={cn((pathname === path.url || (pathname.includes("project") && path.label === "SELECTED WORK")) && "underline")}>{path.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
