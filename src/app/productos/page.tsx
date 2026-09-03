import Link from "next/link";
import { products, formatCOP } from "@/lib/products";

export const metadata = {
  title: "Productos — D'Garaje",
  description:
    "Galería de productos: vehículos y autopartes disponibles en D'Garaje.",
};

type SearchParams = Promise<{ cat?: string }>;

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { cat } = await searchParams;
  const filtered = cat
    ? products.filter((p) => encodeURIComponent(p.category) === cat)
    : products;

  return (
    <div className="font-sans">
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight">Productos</h1>
          <p className="mt-2 text-zinc-600">
            {filtered.length} producto{filtered.length === 1 ? "" : "s"} disponible{filtered.length === 1 ? "" : "s"}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/productos"
              className={`px-3 py-1.5 rounded-full text-sm border ${
                !cat ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-300 hover:border-zinc-900"
              }`}
            >
              Todos
            </Link>
            {(["Vehículos", "Autopartes"] as const).map((c) => {
              const active = cat === encodeURIComponent(c);
              return (
                <Link
                  key={c}
                  href={`/productos?cat=${encodeURIComponent(c)}`}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    active ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-300 hover:border-zinc-900"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
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
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {p.category}
                </p>
                <p className="mt-1 font-semibold leading-tight">{p.name}</p>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                  {p.shortDescription}
                </p>
                <p className="mt-3 font-bold text-zinc-900">
                  {formatCOP(p.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-12 text-zinc-500">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </section>
    </div>
  );
}