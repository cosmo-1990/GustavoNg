
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { booksData } from '@/data/books';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Books = () => {
  const { language } = useLanguage();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96]
      }
    })
  };

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
            {language === 'es' ? 'Libros' : 'Books'}
          </motion.h1>
          
          <div className="grid grid-cols-1 gap-16">
            {booksData.map((book, index) => (
              <motion.div
                key={book.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-primary/5 rounded-lg transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}></div>
                    <div className="relative">
                      <img 
                        src={book.cover} 
                        alt={language === 'es' ? book.title : book.titleEn} 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-8 lg:col-span-9">
                  <h2 className="text-2xl md:text-3xl font-playfair font-medium mb-4">
                    {language === 'es' ? book.title : book.titleEn}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {language === 'es' ? book.description : book.descriptionEn}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">
                        {language === 'es' ? 'Detalles' : 'Details'}
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-gray-500 font-medium mr-2">ISBN:</span>
                          <span>{book.isbn}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 font-medium mr-2">
                            {language === 'es' ? 'Editorial:' : 'Publisher:'}
                          </span>
                          <span>
                            {language === 'es' ? book.publisher : book.publisherEn}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 font-medium mr-2">
                            {language === 'es' ? 'Publicado:' : 'Published:'}
                          </span>
                          <span>
                            {new Date(book.publishDate).toLocaleDateString(
                              language === 'es' ? 'es-AR' : 'en-US',
                              { year: 'numeric', month: 'long' }
                            )}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href={book.buyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium shadow-sm transition duration-300 hover:bg-primary/90"
                  >
                    {language === 'es' ? 'Comprar libro' : 'Buy book'} 
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
