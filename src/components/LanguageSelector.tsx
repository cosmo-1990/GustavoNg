
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <Menu.Button className="inline-flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition duration-200">
        <Globe className="h-5 w-5" />
        <span className="sr-only">{t('common.language')}</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary text-foreground' : 'text-foreground'
                  } ${
                    language === 'es' ? 'font-medium' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => setLanguage('es')}
                >
                  {language === 'es' && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mr-2 text-xs">
                      ✓
                    </motion.span>
                  )}
                  {t('common.spanish')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary text-foreground' : 'text-foreground'
                  } ${
                    language === 'en' ? 'font-medium' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => setLanguage('en')}
                >
                  {language === 'en' && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mr-2 text-xs">
                      ✓
                    </motion.span>
                  )}
                  {t('common.english')}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
