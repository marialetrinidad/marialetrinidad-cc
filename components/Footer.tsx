import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-4 text-3xl">
      <p>© Mariale Trinidad, 2026</p>
      <div className="flex gap-4 mt-1">
        <Link href="/datenschutz">/Datenschutz</Link>
        <Link href="/impressum">/Impressum</Link>
      </div>
    </footer>
  );
}
