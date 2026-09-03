export const metadata = {
  title: "Acerca — D'Garaje",
  description:
    "Conoce al equipo de D'Garaje: expertos en autopartes y compraventa de vehículos en Bucaramanga.",
};

const stats = [
  { value: "+4800", label: "Productos curados" },
  { value: "+12", label: "Categorías" },
  { value: "5/5", label: "Calificación promedio" },
  { value: "100%", label: "Garantía" },
];

const team = [
  {
    name: "Uriel Jaimes",
    role: "Propietario / Emprendedor",
    bio: "Experto en el sector automotor con amplia experiencia en autopartes y vehículos.",
  },
  {
    name: "Mila",
    role: "Atención al cliente",
    bio: "Te ayuda a encontrar exactamente lo que necesitas para tu vehículo.",
  },
  {
    name: "Kunit",
    role: "Asesoría técnica",
    bio: "Especialista en compatibilidad de partes y recomendaciones.",
  },
  {
    name: "Jaime",
    role: "Logística",
    bio: "Encargado de envíos y entregas a nivel nacional.",
  },
];

export default function AcercaPage() {
  return (
    <div className="font-sans">
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Encuentra tu próximo proyecto
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Pasión por los vehículos
          </h1>
          <p className="mt-6 text-zinc-700 leading-relaxed">
            En <strong>D&apos;Garaje</strong> nos apasiona ayudar a nuestros
            clientes a mantener sus vehículos en óptimas condiciones. Nuestro
            equipo está formado por expertos en autopartes y entusiastas de los
            automóviles que comparten tu pasión por los detalles. Estamos
            comprometidos en brindarte asesoramiento y orientación para que
            tomes decisiones informadas sobre tus compras.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Los números hablan por sí solos
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-200 p-6 text-center"
              >
                <p className="text-3xl font-black text-zinc-900">{s.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Nuestro equipo
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <div className="h-16 w-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xl font-black">
                  {t.name.charAt(0)}
                </div>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
                <p className="mt-3 text-sm text-zinc-700">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}