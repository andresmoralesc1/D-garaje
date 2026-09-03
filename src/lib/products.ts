export type Product = {
  slug: string;
  name: string;
  category: "Vehículos" | "Autopartes";
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
};

export const products: Product[] = [
  {
    slug: "mercedes-compresor-c180-2005",
    name: "Mercedes Compresor C180 2005",
    category: "Autopartes",
    price: 19990,
    image: "/products/mercedes-compresor-c180-2005.jpg",
    shortDescription:
      "Compresor de aire acondicionado original para Mercedes-Benz C180 año 2005.",
    longDescription:
      "Compresor OEM para Mercedes-Benz C180 2005. Probado y certificado, listo para instalar. Ideal para reemplazo o reparación del sistema de climatización del vehículo.",
  },
  {
    slug: "honda-cb-190r-2021",
    name: "Honda CB 190R 2021",
    category: "Vehículos",
    price: 6300000,
    image: "/products/honda-cb-190r-2021.jpg",
    shortDescription:
      "Motocicleta Honda CB 190R modelo 2021 en excelente estado.",
    longDescription:
      "Honda CB 190R 2021. Moto deportiva de baja cilindrada, ideal para ciudad y carretera. Documentación al día, revisión técnico-mecánica vigente.",
  },
  {
    slug: "suzuki-grand-vitara-sz-2015",
    name: "Suzuki Grand Vitara SZ 2015",
    category: "Vehículos",
    price: 55000000,
    image: "/products/suzuki-grand-vitara-sz-2015.jpg",
    shortDescription:
      "Camioneta Suzuki Grand Vitara SZ automática, modelo 2015.",
    longDescription:
      "Suzuki Grand Vitara SZ 2015 automática. SUV confiable, amplio espacio interior, perfecta para familia o trabajo. Financiamiento disponible.",
  },
  {
    slug: "bmw-316i-2015",
    name: "BMW 316i 2015 Luxury",
    category: "Vehículos",
    price: 68700000,
    image: "/products/bmw-316i-2015.jpg",
    shortDescription:
      "BMW 316i 2015 versión Luxury, impecable estado general.",
    longDescription:
      "BMW Serie 3 316i 2015 Luxury. Sedán premium con equipamiento completo, motor eficiente y mantenimiento al día. Una oportunidad única en el mercado.",
  },
];

export const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);