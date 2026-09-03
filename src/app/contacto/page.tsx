export const metadata = {
  title: "Contacto — D'Garaje",
  description:
    "Contáctanos por WhatsApp, email o visítanos en Bucaramanga. Estamos para ayudarte.",
};

export default function ContactoPage() {
  return (
    <div className="font-sans">
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Contacto
          </h1>
          <p className="mt-4 text-zinc-700">
            Estamos listos para ayudarte. Escríbenos por WhatsApp, email o
            visítanos directamente.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/573003558016"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-200 p-6 hover:border-zinc-900 transition"
          >
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              WhatsApp
            </p>
            <p className="mt-2 text-2xl font-bold">+57 300 3558016</p>
            <p className="mt-2 text-sm text-zinc-600">
              Respuesta rápida en horario comercial.
            </p>
          </a>
          <a
            href="mailto:info@dgaraje.com"
            className="rounded-xl border border-zinc-200 p-6 hover:border-zinc-900 transition"
          >
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Email
            </p>
            <p className="mt-2 text-2xl font-bold">info@dgaraje.com</p>
            <p className="mt-2 text-sm text-zinc-600">
              Te respondemos en menos de 24 horas.
            </p>
          </a>
          <div className="rounded-xl border border-zinc-200 p-6">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Dirección
            </p>
            <p className="mt-2 text-lg font-semibold">
              Cra 29 #65-47
            </p>
            <p className="text-sm text-zinc-600">
              La Victoria, Bucaramanga
              <br />
              Santander, Colombia
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-center">
            Envíanos un mensaje
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Para consultas más formales o presupuestos, escríbenos y te
            respondemos a tu correo.
          </p>
          <form
            className="mt-8 grid gap-4"
            action="mailto:info@dgaraje.com"
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              className="rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none"
            />
            <textarea
              name="mensaje"
              placeholder="¿En qué te podemos ayudar?"
              required
              rows={5}
              className="rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}