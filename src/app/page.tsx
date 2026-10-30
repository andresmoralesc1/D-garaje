import Image from "next/image";
import Link from "next/link";
import { products, formatCOP } from "@/lib/products";

const benefits = [
  {
    title: "Envíos gratis",
    desc: "En compras superiores a $400.000 a todo Colombia.",
  },
  {
    title: "Partes certificadas",
    desc: "100% verificadas, con garantía documentada.",
  },
  {
    title: "Asesoría real",
    desc: "Te ayudamos por WhatsApp a encontrar la pieza exacta.",
  },
  {
    title: "Financiamiento",
    desc: "Para vehículos, con aliados bancarios locales.",
  },
];

const categories = [
  {
    title: "Vehículos",
    desc: "Sedanes, SUVs y motos verificados. Documentación al día.",
    cta: "Ver inventario",
    href: "/productos?cat=Veh%C3%ADculos",
    image: "/categories/vehicles.jpg",
  },
  {
    title: "Partes nuevas",
    desc: "Repuestos originales y OEM para todas las marcas.",
    cta: "Ver catálogo",
    href: "/productos?cat=Autopartes",
    image: "/categories/new-parts.jpg",
  },
  {
    title: "Partes usadas",
    desc: "Componentes inspeccionados con garantía D'Garaje.",
    cta: "Ver disponibles",
    href: "/productos",
    image: "/categories/used-parts.jpg",
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

const process = [
  {
    step: "01",
    title: "Eliges",
    desc: "Explora el catálogo o escríbenos por WhatsApp con la pieza que buscas.",
  },
  {
    step: "02",
    title: "Verificamos",
    desc: "Nuestro equipo revisa el producto, documentos y compatibilidad.",
  },
  {
    step: "03",
    title: "Entregamos",
    desc: "Recibe en Bucaramanga en 24h o envío nacional con seguimiento.",
  },
];

export default function Home() {
  const featured = products.slice(0, 4);
  return (
    <div className="font-sans">
      {/* HERO — full-bleed photo + dark overlay */}
      <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/hero-bg.jpg"
          alt="Vehículo en vitrina D'Garaje"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
        <div className="absolute inset-0 -z-10 bg-grid" />

        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          {/* Trust badge row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-zinc-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Más de 10 años en Bucaramanga
            </span>
            <span className="text-zinc-600">·</span>
            <span>Envíos a todo Colombia</span>
            <span className="text-zinc-600">·</span>
            <span>Repuestos certificados</span>
          </div>

          <h1 className="mt-6 text-display max-w-3xl text-white">
            Tu próximo vehículo,
            <br />
            <span className="text-brand">en Bucaramanga.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-zinc-300">
            Repuestos originales, partes usadas verificadas y vehículos
            listos para entrega inmediata. Todo con garantía documentada
            y asesoría directa por WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-hover transition shadow-lg shadow-brand/20"
            >
              Ver catálogo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="https://wa.me/573003558016?text=Hola%2C%20me%20interesa%20un%20producto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition backdrop-blur"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-emerald-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Stat strip */}
          <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-mono-num">
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-400">Años</dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold text-white">+10</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-400">Marcas</dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold text-white">+15</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-400">Clientes</dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold text-white">+2.000</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-zinc-200 sm:rounded-lg overflow-hidden">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-6">
              <p className="font-semibold text-zinc-900">{b.title}</p>
              <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-eyebrow text-brand">Lo más reciente</p>
              <h2 className="mt-2 text-h2 text-zinc-900">Productos destacados</h2>
            </div>
            <Link
              href="/productos"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 hover:text-brand transition"
            >
              Ver todos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200 hover:ring-zinc-900 transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verificado
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-eyebrow text-zinc-500">{p.category}</p>
                  <p className="mt-1.5 text-base font-semibold leading-snug text-zinc-900 line-clamp-2">
                    {p.name}
                  </p>
                  <div className="mt-auto flex items-end justify-between pt-4">
                    <p className="text-lg font-bold text-zinc-900 text-mono-num">
                      {formatCOP(p.price)}
                    </p>
                    <span className="text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition">
                      Ver →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — with photos */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brand">Explora</p>
            <h2 className="mt-2 text-h2 text-zinc-900">Por categoría</h2>
            <p className="mt-3 text-zinc-600">
              Encuentra exactamente lo que necesitas, en un solo lugar.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl ring-1 ring-zinc-200 hover:ring-zinc-900 transition"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-zinc-900/0" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-lg font-semibold text-zinc-900">{c.title}</p>
                  <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    {c.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — reemplaza el bloque "Nuestra plataforma" */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brand">Cómo trabajamos</p>
            <h2 className="mt-2 text-h2 text-zinc-900">De la búsqueda a la entrega</h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="relative rounded-2xl bg-white p-6 ring-1 ring-zinc-200">
                <span className="text-mono-num text-5xl font-black text-zinc-200">{p.step}</span>
                <p className="mt-3 text-h3 text-zinc-900">{p.title}</p>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-eyebrow text-center text-zinc-500">Marcas que manejamos</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12 text-zinc-400 font-semibold tracking-tight">
            {brands.map((b) => (
              <span key={b} className="text-base sm:text-lg">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
