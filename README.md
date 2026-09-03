# D'Garaje

Sitio web de **D'Garaje**: tienda de autopartes y compraventa de vehículos, migrado desde WordPress a Next.js.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Estructura

- `src/app/page.tsx` — Inicio (hero, beneficios, productos destacados, categorías, marcas)
- `src/app/productos/page.tsx` — Galería de productos con filtro por categoría
- `src/app/productos/[slug]/page.tsx` — Detalle de producto
- `src/app/acerca/page.tsx` — Sobre nosotros
- `src/app/contacto/page.tsx` — Formas de contacto
- `src/lib/products.ts` — Catálogo estático de productos
- `public/products/` — Imágenes de productos

## Datos de contacto

- WhatsApp: +57 300 3558016
- Email: info@dgaraje.com
- Dirección: Cra 29 #65-47, La Victoria, Bucaramanga, Santander