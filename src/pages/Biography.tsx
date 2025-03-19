
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Biography = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-sm uppercase tracking-wider font-semibold mb-6 bg-primary/5 px-3 py-1 rounded-full">
            {t('bio.title')}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Gustavo Ng
          </h1>
          
          <div className="relative mb-12">
            <img 
              src="/placeholder.svg" 
              alt="Gustavo Ng"
              className="w-full h-80 object-cover rounded-lg" 
            />
            <div className="bg-white shadow-md rounded-md p-6 max-w-xl mx-auto -mt-16 relative z-10">
              <p className="text-xl font-playfair italic text-center">
                {t('bio.quote')}
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {language === 'es' ? (
              <>
                <p>
                  Gustavo Ng, nacido en Buenos Aires, Argentina, es un periodista y escritor que ha dedicado su carrera a tender puentes culturales entre Oriente y Occidente. Con más de dos décadas de experiencia profesional, su trabajo se centra especialmente en las relaciones entre América Latina y China.
                </p>
                
                <p>
                  Licenciado en Comunicación por la Universidad de Buenos Aires y con estudios de posgrado en Estudios Asiáticos, Gustavo comenzó su carrera en la prensa escrita, trabajando para diversos medios argentinos antes de especializarse en temas relacionados con Asia.
                </p>
                
                <p>
                  En 2005, fundó la revista "Dang Dai", la primera publicación especializada en cultura china en Argentina, que dirigió durante más de diez años. A través de esta plataforma, introdujo a los lectores hispanohablantes a las complejidades de la sociedad, el arte y la política china contemporánea.
                </p>
                
                <p>
                  Como periodista, ha realizado numerosos viajes de investigación a China, Japón y otros países asiáticos, entrevistando a destacadas figuras culturales y políticas. Sus artículos han sido publicados en medios como La Nación, Clarín, Página/12 y diversos medios internacionales.
                </p>
                
                <h2>Obra y Contribuciones</h2>
                
                <p>
                  Gustavo es autor de varios libros que exploran la influencia cultural china en el mundo occidental y particularmente en América Latina. Su primer libro, "La Ruta de la Seda: Un Viaje Cultural" (2021), rápidamente se convirtió en una obra de referencia sobre las conexiones históricas entre Oriente y Occidente.
                </p>
                
                <p>
                  Como conferencista, ha sido invitado a universidades y centros culturales en Argentina, España, Estados Unidos y China. Sus charlas abordan temas como el diálogo intercultural, la diáspora china en América Latina y el nuevo rol geopolítico de China en el mundo.
                </p>
                
                <p>
                  Desde 2015, coordina el programa "Puentes con China" en la Universidad Nacional de Buenos Aires, que promueve el intercambio académico y cultural entre instituciones argentinas y chinas.
                </p>
                
                <h2>Enfoques y Perspectivas</h2>
                
                <p>
                  El trabajo de Gustavo se distingue por su enfoque humanista y su interés en mostrar las conexiones profundas que existen entre culturas aparentemente distantes. Como él mismo ha expresado: "Mi objetivo es desmontar estereotipos y crear espacios de entendimiento genuino entre las personas, más allá de las diferencias lingüísticas o culturales".
                </p>
                
                <p>
                  En sus escritos y conferencias, aborda temas como la globalización cultural, las transformaciones sociales de la China moderna, y el impacto de las migraciones en la conformación de identidades híbridas.
                </p>
                
                <p>
                  Actualmente, divide su tiempo entre Argentina y China, donde continúa con sus investigaciones sobre las relaciones culturales entre ambas regiones y trabaja en nuevos proyectos editoriales.
                </p>
              </>
            ) : (
              <>
                <p>
                  Gustavo Ng, born in Buenos Aires, Argentina, is a journalist and writer who has dedicated his career to building cultural bridges between East and West. With more than two decades of professional experience, his work focuses especially on the relations between Latin America and China.
                </p>
                
                <p>
                  With a degree in Communication from the University of Buenos Aires and postgraduate studies in Asian Studies, Gustavo began his career in print media, working for various Argentine publications before specializing in Asian-related issues.
                </p>
                
                <p>
                  In 2005, he founded "Dang Dai" magazine, the first publication specialized in Chinese culture in Argentina, which he directed for more than ten years. Through this platform, he introduced Spanish-speaking readers to the complexities of contemporary Chinese society, art, and politics.
                </p>
                
                <p>
                  As a journalist, he has made numerous research trips to China, Japan, and other Asian countries, interviewing prominent cultural and political figures. His articles have been published in media such as La Nación, Clarín, Página/12, and various international media outlets.
                </p>
                
                <h2>Work and Contributions</h2>
                
                <p>
                  Gustavo is the author of several books exploring Chinese cultural influence in the Western world and particularly in Latin America. His first book, "The Silk Road: A Cultural Journey" (2021), quickly became a reference work on the historical connections between East and West.
                </p>
                
                <p>
                  As a lecturer, he has been invited to universities and cultural centers in Argentina, Spain, the United States, and China. His talks address topics such as intercultural dialogue, the Chinese diaspora in Latin America, and China's new geopolitical role in the world.
                </p>
                
                <p>
                  Since 2015, he has coordinated the "Bridges with China" program at the National University of Buenos Aires, which promotes academic and cultural exchange between Argentine and Chinese institutions.
                </p>
                
                <h2>Approaches and Perspectives</h2>
                
                <p>
                  Gustavo's work is distinguished by its humanistic approach and his interest in showing the deep connections that exist between seemingly distant cultures. As he himself has expressed: "My goal is to dismantle stereotypes and create spaces for genuine understanding between people, beyond linguistic or cultural differences."
                </p>
                
                <p>
                  In his writings and lectures, he addresses topics such as cultural globalization, the social transformations of modern China, and the impact of migrations on the formation of hybrid identities.
                </p>
                
                <p>
                  Currently, he divides his time between Argentina and China, where he continues his research on cultural relations between both regions and works on new editorial projects.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Biography;
