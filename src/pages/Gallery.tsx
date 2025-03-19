
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { getGalleryById } from '@/data/photos';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Map, Calendar } from 'lucide-react';

const Gallery = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [gallery, setGallery] = useState(id ? getGalleryById(id) : null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundGallery = getGalleryById(id);
      setGallery(foundGallery);
      
      if (!foundGallery) {
        navigate('/fotos');
      }
    } else {
      setGallery(null);
    }
  }, [id, navigate]);
  
  if (!gallery) {
    return null;
  }
  
  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhotoIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedPhotoIndex(prev => 
        prev === 0 ? gallery.photos.length - 1 : prev - 1
      );
    } else {
      setSelectedPhotoIndex(prev => 
        prev === gallery.photos.length - 1 ? 0 : prev + 1
      );
    }
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto('prev');
      } else if (e.key === 'ArrowRight') {
        navigatePhoto('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/fotos" 
            className="inline-flex items-center text-sm mb-8 text-gray-600 hover:text-primary transition duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'es' ? 'Volver a galerías' : 'Back to galleries'}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-playfair font-bold mb-4">
              {language === 'es' ? gallery.title : gallery.titleEn}
            </h1>
            
            <p className="text-gray-600 mb-12 max-w-3xl">
              {language === 'es' ? gallery.description : gallery.descriptionEn}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gallery.photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="overflow-hidden rounded-lg shadow-sm cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square relative">
                    <img 
                      src={photo.imageUrl} 
                      alt={language === 'es' ? photo.title : photo.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="sr-only">Ver foto</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
            >
              <ArrowLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
            >
              <ArrowRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </button>
            
            <div
              className="max-w-6xl max-h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.photos[selectedPhotoIndex] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img 
                      src={gallery.photos[selectedPhotoIndex].imageUrl} 
                      alt={language === 'es' 
                        ? gallery.photos[selectedPhotoIndex].title 
                        : gallery.photos[selectedPhotoIndex].titleEn
                      }
                      className="mx-auto max-h-[75vh] w-auto"
                    />
                    
                    <div className="mt-4 text-white">
                      <h3 className="text-xl font-playfair">
                        {language === 'es' 
                          ? gallery.photos[selectedPhotoIndex].title 
                          : gallery.photos[selectedPhotoIndex].titleEn
                        }
                      </h3>
                      <p className="text-white/80 mt-2">
                        {language === 'es' 
                          ? gallery.photos[selectedPhotoIndex].description 
                          : gallery.photos[selectedPhotoIndex].descriptionEn
                        }
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/70">
                        <div className="flex items-center">
                          <Map className="h-4 w-4 mr-1" />
                          <span>
                            {language === 'es' 
                              ? gallery.photos[selectedPhotoIndex].location 
                              : gallery.photos[selectedPhotoIndex].locationEn
                            }
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(gallery.photos[selectedPhotoIndex].date).toLocaleDateString(
                              language === 'es' ? 'es-AR' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="inline-flex bg-black/50 px-3 py-1 rounded-full text-white/70 text-sm">
                {selectedPhotoIndex + 1} / {gallery.photos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
