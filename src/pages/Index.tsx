
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedArticles } from '@/data/articles';
import { getFeaturedBook } from '@/data/books';
import { getFeaturedGallery } from '@/data/photos';
import { useEffect, useState } from 'react';

const Index = () => {
  const { t, language } = useLanguage();
  const [featuredArticles, setFeaturedArticles] = useState(getFeaturedArticles());
  const [featuredBook, setFeaturedBook] = useState(getFeaturedBook());
  const [featuredGallery, setFeaturedGallery] = useState(getFeaturedGallery());

  useEffect(() => {
    setFeaturedArticles(getFeaturedArticles());
    setFeaturedBook(getFeaturedBook());
    setFeaturedGallery(getFeaturedGallery());
  }, [language]);
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block text-sm uppercase tracking-wider font-semibold mb-6 bg-primary/5 px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('home.welcome')}
            </motion.span>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Gustavo Ng
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {t('home.subtitle')}
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-500 mb-10 font-merriweather italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {t('home.intro')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link 
                to="/biografia" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-semibold shadow-sm transition duration-300 hover:bg-primary/90 transform hover:-translate-y-1"
              >
                {t('nav.biography')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-playfair font-medium">
              {t('home.latest')}
            </h2>
            <Link 
              to="/articulos" 
              className="text-primary inline-flex items-center text-sm font-medium hover:underline"
            >
              {t('home.view.all')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredArticles.map((article) => (
              <motion.div 
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 card-hover"
                variants={itemVariants}
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img 
                    src={article.image} 
                    alt={language === 'es' ? article.title : article.titleEn} 
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2 inline-block">
                    {language === 'es' ? article.category : article.categoryEn}
                  </span>
                  <h3 className="font-playfair text-xl font-medium mb-2 line-clamp-2">
                    {language === 'es' ? article.title : article.titleEn}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {language === 'es' ? article.summary : article.summaryEn}
                  </p>
                  <Link 
                    to={`/articulos/${article.slug}`} 
                    className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                  >
                    {t('articles.readmore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Book Section */}
      {featuredBook && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-playfair font-medium">
                {t('home.featured.book')}
              </h2>
              <Link 
                to="/libros" 
                className="text-primary inline-flex items-center text-sm font-medium hover:underline"
              >
                {t('home.view.all')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-lg transform rotate-3"></div>
                <div className="relative">
                  <img 
                    src={featuredBook.cover} 
                    alt={language === 'es' ? featuredBook.title : featuredBook.titleEn} 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-playfair font-medium mb-4">
                  {language === 'es' ? featuredBook.title : featuredBook.titleEn}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'es' ? featuredBook.description : featuredBook.descriptionEn}
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 font-medium min-w-28">
                      {t('books.published')}:
                    </span>
                    <span>
                      {new Date(featuredBook.publishDate).toLocaleDateString(
                        language === 'es' ? 'es-AR' : 'en-US',
                        { year: 'numeric', month: 'long' }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 font-medium min-w-28">
                      {t('books.publisher')}:
                    </span>
                    <span>
                      {language === 'es' ? featuredBook.publisher : featuredBook.publisherEn}
                    </span>
                  </div>
                </div>
                <a 
                  href={featuredBook.buyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium shadow-sm transition duration-300 hover:bg-primary/90"
                >
                  {t('books.buyhere')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Featured Gallery */}
      {featuredGallery && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-playfair font-medium">
                {t('home.featured.gallery')}
              </h2>
              <Link 
                to="/fotos" 
                className="text-primary inline-flex items-center text-sm font-medium hover:underline"
              >
                {t('home.view.all')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={featuredGallery.coverImage} 
                    alt={language === 'es' ? featuredGallery.title : featuredGallery.titleEn}
                    className="w-full h-full object-cover aspect-video"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-8">
                    <h3 className="text-white font-playfair text-3xl font-medium mb-2">
                      {language === 'es' ? featuredGallery.title : featuredGallery.titleEn}
                    </h3>
                    <p className="text-white/80 mb-4 max-w-prose">
                      {language === 'es' ? featuredGallery.description : featuredGallery.descriptionEn}
                    </p>
                    <Link
                      to={`/fotos/${featuredGallery.id}`}
                      className="inline-flex items-center text-white text-sm font-medium hover:underline"
                    >
                      {t('home.view.all')}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {featuredGallery.photos.slice(0, 4).map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img 
                      src={photo.imageUrl} 
                      alt={language === 'es' ? photo.title : photo.titleEn}
                      className="w-full h-full object-cover aspect-square transition duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-medium mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'es' 
                ? 'Si desea contactarse conmigo, puede hacerlo a través del formulario en la página de contacto.'
                : 'If you would like to contact me, you can do so through the form on the contact page.'}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-semibold shadow-sm transition duration-300 hover:bg-primary/90"
            >
              {t('nav.contact')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
