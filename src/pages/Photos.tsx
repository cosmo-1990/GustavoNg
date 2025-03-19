
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { galleries } from '@/data/photos';
import { motion } from 'framer-motion';

const Photos = () => {
  const { language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-playfair font-bold mb-16"
          >
            {language === 'es' ? 'Fotografías' : 'Photography'}
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleries.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredId(gallery.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative overflow-hidden rounded-lg group"
              >
                <Link to={`/fotos/${gallery.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <img 
                    src={gallery.coverImage} 
                    alt={language === 'es' ? gallery.title : gallery.titleEn}
                    className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <h2 className="text-2xl font-playfair font-medium text-white mb-2">
                      {language === 'es' ? gallery.title : gallery.titleEn}
                    </h2>
                    <p className={`text-white/80 mb-4 max-w-lg transition-opacity duration-300 ${hoveredId === gallery.id ? 'opacity-100' : 'opacity-0 md:opacity-70'}`}>
                      {language === 'es' ? gallery.description : gallery.descriptionEn}
                    </p>
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full">
                      {gallery.photos.length} {language === 'es' ? 'fotos' : 'photos'}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Photos;
