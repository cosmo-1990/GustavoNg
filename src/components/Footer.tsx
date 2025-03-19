
import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-playfair font-medium mb-4">Gustavo Ng</h3>
            <p className="text-gray-600 text-sm">
              Periodista y escritor argentino especializado en cultura y sociedad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-medium mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:gustavoemiliong@gmail.com" className="text-gray-600 hover:text-primary transition duration-300">
                gustavoemiliong@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-medium mb-4">{t('nav.home')}</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Gustavo Ng. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
