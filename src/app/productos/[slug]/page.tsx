import Link from "next/link";
import { notFound } from "next/navigation";
import { products, formatCOP } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return {
    title: p ? `${p.name} — D'Garaje` : "Producto — D'Garaje",
    description: p?.shortDescription ?? "Producto D'Garaje",
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="font-sans">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/productos"
          className="text-sm text-zinc-600 hover:text-zinc-900"
        >
          ← Volver a productos
        </Link>
      </div>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-10 md:grid-cols-2">
          <div className="aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-zinc-500">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-black text-zinc-900">
              {formatCOP(product.price)}
            </p>
            <p className="mt-6 text-zinc-700 leading-relaxed">
              {product.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition"
              >
                Consultar por este producto
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold hover:border-zinc-900 transition"
              >
                Ver más productos
              </Link>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-zinc-600">
              <li>✔ Garantía certificada</li>
              <li>✔ Envío gratis en compras superiores a $400.000</li>
              <li>✔ Asesoría personalizada</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}