import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-bold text-lg">D&apos;Garaje</p>
          <p className="mt-2 text-sm text-zinc-600">
            Venta de automóviles y autopartes en Bucaramanga, Santander.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm">Contacto</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600">
            <li>+57 300 3558016</li>
            <li>info@dgaraje.com</li>
            <li>Cra 29 #65-47, La Victoria, Bucaramanga</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm">Navegación</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600">
            <li>
              <Link href="/" className="hover:text-zinc-900">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-zinc-900">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/acerca" className="hover:text-zinc-900">
                Acerca
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-zinc-900">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} D&apos;Garaje. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}