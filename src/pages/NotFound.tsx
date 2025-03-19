
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-9xl font-playfair font-bold text-gray-200 mb-4">404</div>
            <h1 className="text-3xl font-playfair font-bold mb-4">
              {language === 'es' ? 'Página no encontrada' : 'Page Not Found'}
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {language === 'es' 
                ? 'Lo sentimos, la página que estás buscando no existe o ha sido movida.'
                : 'Sorry, the page you are looking for does not exist or has been moved.'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-semibold shadow-sm transition duration-300 hover:bg-primary/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
