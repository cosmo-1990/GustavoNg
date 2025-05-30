
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const translations: Record<string, Record<Language, string>> = {
  // Navegación
  'nav.home': {
    es: 'Inicio',
    en: 'Home',
  },
  'nav.biography': {
    es: 'Biografía',
    en: 'Biography',
  },
  'nav.articles': {
    es: 'Artículos',
    en: 'Articles',
  },
  'nav.press': {
    es: 'Prensa',
    en: 'Press',
  },
  'nav.books': {
    es: 'Libros',
    en: 'Books',
  },
  'nav.photos': {
    es: 'Fotos',
    en: 'Photos',
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact',
  },
  
  // Home
  'home.welcome': {
    es: 'Bienvenidos',
    en: 'Welcome',
  },
  'home.subtitle': {
    es: 'Periodista y Escritor',
    en: 'Journalist and Writer',
  },
  'home.intro': {
    es: 'Explorando culturas, compartiendo historias.',
    en: 'Exploring cultures, sharing stories.',
  },
  'home.latest': {
    es: 'Últimos artículos',
    en: 'Latest articles',
  },
  'home.featured.book': {
    es: 'Libro destacado',
    en: 'Featured book',
  },
  'home.featured.gallery': {
    es: 'Galería destacada',
    en: 'Featured gallery',
  },
  'home.view.all': {
    es: 'Ver todo',
    en: 'View all',
  },

  // Biografía
  'bio.title': {
    es: 'Biografía',
    en: 'Biography',
  },
  'bio.quote': {
    es: 'Escribir es descubrir el mundo a través de palabras.',
    en: 'Writing is discovering the world through words.',
  },

  // Artículos
  'articles.title': {
    es: 'Artículos Periodísticos',
    en: 'Journalistic Articles',
  },
  'articles.filter': {
    es: 'Filtrar por',
    en: 'Filter by',
  },
  'articles.search': {
    es: 'Buscar artículos...',
    en: 'Search articles...',
  },
  'articles.readmore': {
    es: 'Leer más',
    en: 'Read more',
  },
  'articles.date': {
    es: 'Fecha',
    en: 'Date',
  },

  // Prensa
  'press.title': {
    es: 'Prensa',
    en: 'Press',
  },
  'press.mentions': {
    es: 'Menciones en prensa',
    en: 'Press mentions',
  },
  'press.interviews': {
    es: 'Entrevistas',
    en: 'Interviews',
  },

  // Libros
  'books.title': {
    es: 'Libros',
    en: 'Books',
  },
  'books.published': {
    es: 'Publicado',
    en: 'Published',
  },
  'books.publisher': {
    es: 'Editorial',
    en: 'Publisher',
  },
  'books.buyhere': {
    es: 'Comprar aquí',
    en: 'Buy here',
  },

  // Fotos
  'photos.title': {
    es: 'Fotografías',
    en: 'Photography',
  },
  'photos.gallery.china': {
    es: 'Viajes a China',
    en: 'China Travels',
  },
  'photos.gallery.buenosaires': {
    es: 'Buenos Aires',
    en: 'Buenos Aires',
  },
  'photos.gallery.newyork': {
    es: 'Nueva York',
    en: 'New York',
  },
  'photos.gallery.misc': {
    es: 'Varias',
    en: 'Miscellaneous',
  },

  // Contacto
  'contact.title': {
    es: 'Contacto',
    en: 'Contact',
  },
  'contact.name': {
    es: 'Nombre',
    en: 'Name',
  },
  'contact.email': {
    es: 'Correo electrónico',
    en: 'Email',
  },
  'contact.message': {
    es: 'Mensaje',
    en: 'Message',
  },
  'contact.send': {
    es: 'Enviar mensaje',
    en: 'Send message',
  },
  'contact.success': {
    es: 'Mensaje enviado con éxito',
    en: 'Message sent successfully',
  },

  // Footer
  'footer.rights': {
    es: 'Todos los derechos reservados',
    en: 'All rights reserved',
  },
  
  // Común
  'common.loading': {
    es: 'Cargando...',
    en: 'Loading...',
  },
  'common.language': {
    es: 'Idioma',
    en: 'Language',
  },
  'common.spanish': {
    es: 'Español',
    en: 'Spanish',
  },
  'common.english': {
    es: 'Inglés',
    en: 'English',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
