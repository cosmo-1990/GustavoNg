
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { articlesData, getArticleBySlug, getArticleCategories, getArticleCategoriesEn } from '@/data/articles';
import { Search, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

const Articles = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [article, setArticle] = useState(slug ? getArticleBySlug(slug) : null);
  
  const categories = language === 'es' ? getArticleCategories() : getArticleCategoriesEn();
  
  useEffect(() => {
    if (slug) {
      const foundArticle = getArticleBySlug(slug);
      setArticle(foundArticle);
      
      if (!foundArticle) {
        navigate('/articulos');
      }
    } else {
      setArticle(null);
    }
  }, [slug, navigate]);
  
  // Filter articles based on search and category
  const filteredArticles = articlesData.filter(article => {
    const titleMatch = language === 'es' 
      ? article.title.toLowerCase().includes(searchTerm.toLowerCase())
      : article.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    
    const categoryMatch = !selectedCategory || (language === 'es' 
      ? article.category === selectedCategory
      : article.categoryEn === selectedCategory);
    
    return titleMatch && categoryMatch;
  });
  
  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  // Change page
  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/articulos" 
              className="inline-flex items-center text-sm mb-8 text-gray-600 hover:text-primary transition duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('articles.title')}
            </Link>
            
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm uppercase tracking-wider font-semibold mb-4 bg-primary/5 px-3 py-1 rounded-full">
                {language === 'es' ? article.category : article.categoryEn}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                {language === 'es' ? article.title : article.titleEn}
              </h1>
              
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(
                    language === 'es' ? 'es-AR' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </time>
              </div>
              
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ 
                  __html: language === 'es' ? article.content : article.contentEn 
                }} />
              </div>
              
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-xl font-playfair font-medium mb-4">
                  {language === 'es' ? 'Artículos relacionados' : 'Related Articles'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {articlesData
                    .filter(a => a.id !== article.id && (language === 'es' 
                      ? a.category === article.category 
                      : a.categoryEn === article.categoryEn))
                    .slice(0, 3)
                    .map(relatedArticle => (
                      <div key={relatedArticle.id} className="card-hover">
                        <Link to={`/articulos/${relatedArticle.slug}`} className="block">
                          <h4 className="font-playfair font-medium mb-2 line-clamp-2">
                            {language === 'es' ? relatedArticle.title : relatedArticle.titleEn}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {new Date(relatedArticle.date).toLocaleDateString(
                              language === 'es' ? 'es-AR' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-playfair font-bold mb-6">
              {t('articles.title')}
            </h1>
            
            {/* Filters */}
            <div className="mb-12 space-y-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={t('articles.search')}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
                  />
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-700 mr-3">
                  {t('articles.filter')}:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                {paginatedArticles.map(article => (
                  <motion.div 
                    key={article.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover"
                  >
                    <Link to={`/articulos/${article.slug}`}>
                      <div>
                        <img 
                          src={article.image} 
                          alt={language === 'es' ? article.title : article.titleEn} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            {language === 'es' ? article.category : article.categoryEn}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(article.date).toLocaleDateString(
                              language === 'es' ? 'es-AR' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        </div>
                        <h3 className="font-playfair text-xl font-medium mb-2 line-clamp-2">
                          {language === 'es' ? article.title : article.titleEn}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {language === 'es' ? article.summary : article.summaryEn}
                        </p>
                        <span className="text-primary text-sm font-medium inline-flex items-center">
                          {t('articles.readmore')}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {language === 'es' 
                    ? 'No se encontraron artículos que coincidan con tu búsqueda.'
                    : 'No articles found matching your search.'}
                </p>
              </div>
            )}
            
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
                    <ArrowLeft className="h-5 w-5" />
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

export default Articles;
