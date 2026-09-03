import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/acerca", label: "Acerca" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 text-white font-black">
            D
          </span>
          <span className="font-bold tracking-tight">D&apos;Garaje</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-700 hover:text-zinc-900 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="hidden sm:inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
        >
          Escríbenos
        </Link>
      </div>
    </header>
  );
}