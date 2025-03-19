
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { pressData, getPressMentions, getPressInterviews } from '@/data/press';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Items per page for pagination
const ITEMS_PER_PAGE = 8;

const Press = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'interviews' | 'mentions'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter press items based on active tab
  const filteredPressItems = activeTab === 'all' 
    ? pressData 
    : activeTab === 'interviews' 
      ? getPressInterviews() 
      : getPressMentions();
  
  // Pagination
  const totalPages = Math.ceil(filteredPressItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredPressItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  // Change tab
  const changeTab = (tab: 'all' | 'interviews' | 'mentions') => {
    setActiveTab(tab);
    setCurrentPage(1);
  };
  
  // Change page
  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-playfair font-bold mb-8">
              {t('press.title')}
            </h1>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-12">
              <button
                onClick={() => changeTab('all')}
                className={`py-4 px-6 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {language === 'es' ? 'Todos' : 'All'}
              </button>
              <button
                onClick={() => changeTab('interviews')}
                className={`py-4 px-6 font-medium text-sm ${
                  activeTab === 'interviews'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t('press.interviews')}
              </button>
              <button
                onClick={() => changeTab('mentions')}
                className={`py-4 px-6 font-medium text-sm ${
                  activeTab === 'mentions'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t('press.mentions')}
              </button>
            </div>
            
            {/* Press Items Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {paginatedItems.map(item => (
                <motion.div 
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 h-full card-hover"
                  >
                    <div className="relative">
                      <div className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-medium rounded shadow-sm">
                        {language === 'es' ? item.type : item.typeEn}
                      </div>
                      <img 
                        src={item.image} 
                        alt={language === 'es' ? item.title : item.titleEn} 
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-gray-500 text-xs mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString(
                            language === 'es' ? 'es-AR' : 'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </time>
                      </div>
                      <h3 className="font-playfair text-lg font-medium mb-2 line-clamp-2">
                        {language === 'es' ? item.title : item.titleEn}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {language === 'es' ? item.summary : item.summaryEn}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">
                          {item.publication}
                        </span>
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => changePage(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowRight className="h-5 w-5 rotate-180" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => changePage(page)}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        page === currentPage
                          ? 'bg-primary text-primary-foreground'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => changePage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Press;
