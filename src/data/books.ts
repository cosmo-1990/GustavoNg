
export interface Book {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  publishDate: string;
  publisher: string;
  publisherEn: string;
  cover: string;
  isbn: string;
  buyLink: string;
  featured: boolean;
}

export const booksData: Book[] = [
  {
    id: 1,
    title: "La Ruta de la Seda: Un Viaje Cultural",
    titleEn: "The Silk Road: A Cultural Journey",
    description: "Un recorrido por la histórica Ruta de la Seda, explorando las conexiones culturales entre Oriente y Occidente a lo largo de los siglos.",
    descriptionEn: "A journey through the historic Silk Road, exploring cultural connections between East and West throughout the centuries.",
    publishDate: "2021-05-15",
    publisher: "Editorial Planeta",
    publisherEn: "Planeta Publishing",
    cover: "/placeholder.svg",
    isbn: "978-3-16-148410-0",
    buyLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "Conversaciones con el Dragón",
    titleEn: "Conversations with the Dragon",
    description: "Ensayos sobre la China moderna y su creciente influencia en América Latina, basados en entrevistas y experiencias personales del autor.",
    descriptionEn: "Essays on modern China and its growing influence in Latin America, based on interviews and personal experiences of the author.",
    publishDate: "2018-11-10",
    publisher: "Fondo de Cultura Económica",
    publisherEn: "Economic Culture Fund",
    cover: "/placeholder.svg",
    isbn: "978-3-16-148411-7",
    buyLink: "#",
    featured: false
  },
  {
    id: 3,
    title: "Buenos Aires - Shanghai: Ciudades Espejo",
    titleEn: "Buenos Aires - Shanghai: Mirror Cities",
    description: "Un análisis comparativo entre dos grandes urbes, sus paralelismos históricos, sociales y culturales a pesar de estar en extremos opuestos del planeta.",
    descriptionEn: "A comparative analysis between two great cities, their historical, social and cultural parallels despite being on opposite ends of the planet.",
    publishDate: "2019-08-23",
    publisher: "Emecé Editores",
    publisherEn: "Emecé Publishers",
    cover: "/placeholder.svg",
    isbn: "978-3-16-148412-4",
    buyLink: "#",
    featured: false
  },
  {
    id: 4,
    title: "Periodismo sin Fronteras",
    titleEn: "Journalism Without Borders",
    description: "Reflexiones sobre el oficio periodístico en la era global, basado en tres décadas de experiencia profesional entre Asia y América Latina.",
    descriptionEn: "Reflections on the journalistic profession in the global era, based on three decades of professional experience between Asia and Latin America.",
    publishDate: "2020-03-30",
    publisher: "Sudamericana",
    publisherEn: "Sudamericana",
    cover: "/placeholder.svg",
    isbn: "978-3-16-148413-1",
    buyLink: "#",
    featured: false
  }
];

export const getFeaturedBook = (): Book | undefined => {
  return booksData.find(book => book.featured);
};
