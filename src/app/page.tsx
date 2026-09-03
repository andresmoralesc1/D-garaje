import Link from "next/link";
import { products, formatCOP } from "@/lib/products";

const benefits = [
  {
    title: "Envíos Gratis",
    desc: "En compras superiores a $400.000 a todo el país.",
  },
  {
    title: "Partes Certificadas",
    desc: "100% de garantía en todos nuestros productos.",
  },
  {
    title: "Grandes Ahorros",
    desc: "Los mejores precios del mercado en autopartes.",
  },
  {
    title: "Reembolsos",
    desc: "Si no queda satisfecho con su compra, le devolvemos su dinero.",
  },
];

const categories = [
  {
    title: "Automóviles",
    desc: "Mira nuestro catálogo de vehículos disponibles para compra inmediata.",
    cta: "Comprar",
    href: "/productos?cat=Veh%C3%ADculos",
  },
  {
    title: "Partes Nuevas",
    desc: "Encuentra aquí las mejores autopartes nuevas para tu vehículo.",
    cta: "Comprar",
    href: "/productos?cat=Autopartes",
  },
  {
    title: "Partes Usadas",
    desc: "Autopartes usadas a precios justos y con garantía.",
    cta: "Comprar",
    href: "/productos",
  },
];

const brands = [
  "Mercedes-Benz",
  "Honda",
  "Suzuki",
  "BMW",
  "Toyota",
  "Chevrolet",
  "Nissan",
  "Hyundai",
];

export default function Home() {
  const featured = products.slice(0, 4);
  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-sm uppercase tracking-widest text-zinc-300">
            Productos de calidad
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight">
            Mejores autopartes
          </h1>
          <p className="mt-4 max-w-xl text-zinc-200">
            Compra, vende y encuentra las autopartes que tu vehículo necesita.
            Envíos gratis por compras superiores a $400.000.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition"
            >
              Ver catálogo
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-zinc-200 p-5"
            >
              <p className="font-semibold">{b.title}</p>
              <p className="mt-1 text-sm text-zinc-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Lo más vendido
              </p>
              <h2 className="text-3xl font-bold tracking-tight mt-1">
                Productos destacados
              </h2>
            </div>
            <Link
              href="/productos"
              className="hidden sm:inline text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}`}
                className="group rounded-xl bg-white border border-zinc-200 overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-square bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    {p.category}
                  </p>
                  <p className="mt-1 font-semibold leading-tight line-clamp-2">
                    {p.name}
                  </p>
                  <p className="mt-2 font-bold text-zinc-900">
                    {formatCOP(p.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Explora por categoría
          </h2>
          <p className="mt-2 text-center text-zinc-600 max-w-xl mx-auto">
            Encuentra exactamente lo que necesitas: vehículos, partes nuevas o
            usadas, todo en un solo lugar.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 hover:bg-zinc-900 hover:text-white transition"
              >
                <p className="text-lg font-semibold">{c.title}</p>
                <p className="mt-2 text-sm opacity-80">{c.desc}</p>
                <p className="mt-4 text-sm font-medium underline underline-offset-4">
                  {c.cta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BLOCK */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Nuestra plataforma
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Compra fácil, compra seguro
          </h2>
          <p className="mt-4 text-zinc-700">
            Nuestra plataforma en línea es fácil de navegar, lo que te permitirá
            encontrar rápidamente los productos que necesitas. Contamos con un
            sistema de búsqueda avanzada y filtros de categoría para facilitar
            tu búsqueda. Ya sea que necesites repuestos, accesorios o
            componentes específicos, estamos aquí para ayudarte a mantener tu
            vehículo en perfectas condiciones.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-center text-sm uppercase tracking-widest text-zinc-500">
            Marcas destacadas
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-zinc-600 font-medium">
            {brands.map((b) => (
              <span key={b} className="text-base">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}