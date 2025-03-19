
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === 'es' ? '¡Mensaje enviado!' : 'Message sent!',
        description: language === 'es' 
          ? 'Gracias por tu mensaje. Te responderé lo antes posible.' 
          : 'Thank you for your message. I will get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-playfair font-bold mb-6">
                {t('contact.title')}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {language === 'es' ? (
                  <p>
                    Si deseas contactarme para entrevistas, conferencias, colaboraciones editoriales o cualquier otra consulta, 
                    puedes hacerlo a través de este formulario y te responderé a la brevedad posible.
                  </p>
                ) : (
                  <p>
                    If you wish to contact me for interviews, conferences, editorial collaborations or any other inquiry, 
                    you can do so through this form and I will respond as soon as possible.
                  </p>
                )}
              </div>
              
              <div className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {language === 'es' ? 'Correo electrónico' : 'Email'}
                    </h3>
                    <a href="mailto:contacto@gustavong.com" className="text-primary hover:underline">
                      contacto@gustavong.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {language === 'es' ? 'Redes sociales' : 'Social Media'}
                    </h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        Twitter
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        Instagram
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'es' ? 'Asunto' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-semibold shadow-sm transition duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="mr-2">{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white/100 rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        {t('contact.send')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
