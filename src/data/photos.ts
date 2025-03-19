
export interface Gallery {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  coverImage: string;
  featured: boolean;
  photos: Photo[];
}

export interface Photo {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  imageUrl: string;
  location: string;
  locationEn: string;
  date: string;
}

export const galleries: Gallery[] = [
  {
    id: "viajes-china",
    title: "Viajes a China",
    titleEn: "China Travels",
    description: "Una colección de fotografías capturadas durante mis diferentes viajes a China, explorando desde las grandes metrópolis hasta pueblos tradicionales.",
    descriptionEn: "A collection of photographs captured during my different trips to China, exploring from large metropolises to traditional villages.",
    coverImage: "/placeholder.svg",
    featured: true,
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `China - Fotografía ${i + 1}`,
      titleEn: `China - Photo ${i + 1}`,
      description: "Captura de un momento único en mi viaje por China.",
      descriptionEn: "Capture of a unique moment in my journey through China.",
      imageUrl: "/placeholder.svg",
      location: ["Beijing", "Shanghai", "Xi'an", "Guilin", "Hangzhou"][Math.floor(Math.random() * 5)],
      locationEn: ["Beijing", "Shanghai", "Xi'an", "Guilin", "Hangzhou"][Math.floor(Math.random() * 5)],
      date: new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    }))
  },
  {
    id: "buenos-aires",
    title: "Buenos Aires",
    titleEn: "Buenos Aires",
    description: "Mi ciudad natal a través de mi lente: arquitectura, vida urbana y momentos cotidianos en la capital argentina.",
    descriptionEn: "My hometown through my lens: architecture, urban life and everyday moments in the Argentine capital.",
    coverImage: "/placeholder.svg",
    featured: false,
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Buenos Aires - Fotografía ${i + 1}`,
      titleEn: `Buenos Aires - Photo ${i + 1}`,
      description: "Escenas urbanas de la capital argentina.",
      descriptionEn: "Urban scenes from Argentina's capital.",
      imageUrl: "/placeholder.svg",
      location: ["Recoleta", "San Telmo", "Palermo", "La Boca", "Puerto Madero"][Math.floor(Math.random() * 5)],
      locationEn: ["Recoleta", "San Telmo", "Palermo", "La Boca", "Puerto Madero"][Math.floor(Math.random() * 5)],
      date: new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    }))
  },
  {
    id: "nueva-york",
    title: "Nueva York",
    titleEn: "New York",
    description: "Instantáneas de la Gran Manzana, captando su energía única, diversidad cultural y paisajes urbanos icónicos.",
    descriptionEn: "Snapshots of the Big Apple, capturing its unique energy, cultural diversity and iconic urban landscapes.",
    coverImage: "/placeholder.svg",
    featured: false,
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Nueva York - Fotografía ${i + 1}`,
      titleEn: `New York - Photo ${i + 1}`,
      description: "La ciudad que nunca duerme desde mi perspectiva.",
      descriptionEn: "The city that never sleeps from my perspective.",
      imageUrl: "/placeholder.svg",
      location: ["Manhattan", "Brooklyn", "Queens", "Central Park", "Times Square"][Math.floor(Math.random() * 5)],
      locationEn: ["Manhattan", "Brooklyn", "Queens", "Central Park", "Times Square"][Math.floor(Math.random() * 5)],
      date: new Date(2019, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    }))
  },
  {
    id: "varias",
    title: "Varias",
    titleEn: "Miscellaneous",
    description: "Una colección ecléctica de fotografías de diferentes viajes y momentos especiales alrededor del mundo.",
    descriptionEn: "An eclectic collection of photographs from different trips and special moments around the world.",
    coverImage: "/placeholder.svg",
    featured: false,
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Misceláneas - Fotografía ${i + 1}`,
      titleEn: `Miscellaneous - Photo ${i + 1}`,
      description: "Momentos diversos capturados a lo largo de mis viajes.",
      descriptionEn: "Various moments captured throughout my travels.",
      imageUrl: "/placeholder.svg",
      location: ["París", "Roma", "Tokio", "Moscú", "Madrid"][Math.floor(Math.random() * 5)],
      locationEn: ["Paris", "Rome", "Tokyo", "Moscow", "Madrid"][Math.floor(Math.random() * 5)],
      date: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    }))
  }
];

export const getFeaturedGallery = (): Gallery | undefined => {
  return galleries.find(gallery => gallery.featured);
};

export const getGalleryById = (id: string): Gallery | undefined => {
  return galleries.find(gallery => gallery.id === id);
};
