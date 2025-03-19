// Data for the website

// Articles
const articlesData = [
  {
    id: 1,
    slug: 'articulo-1',
    title: 'Política exterior 2024 de China: afirmándose para lo que vendrá',
    titleEn: "China's Foreign Policy 2024: Asserting Itself for What's to Come",
    excerpt: 'El despliegue ascendente de China, incluyendo una “diplomacia de la paz” y las prevenciones ante un nuevo gobierno de Donald Trump.',
    excerptEn: "China's increasing deployment, including 'peace diplomacy' and precautions against a new Donald Trump administration.",
    content: `<p>El despliegue ascendente de China, incluyendo una “diplomacia de la paz” y las prevenciones ante un nuevo gobierno de Donald Trump.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 1. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2025-01-15').toISOString(),
    image: 'images/Política exterior 2024 de China.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link: "https://tektonikos.website/politica-exterior-2024-de-china-afirmandose-para-lo-que-vendra/"
  },
  {
    id: 2,
    slug: 'articulo-2',
    title: 'El oxímoron chino: la dictadura democrática',
    titleEn: 'The Chinese oxymoron: the democratic dictatorship',
    excerpt: 'Con recursos comunicativos restringidos, China empieza a plantear la discusión sobre qué es la democracia.',
    excerptEn: 'With limited communication resources, China is beginning to raise the question of what democracy is.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-11-5').toISOString(),
    image: 'images/El oxímoron chino.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/el-oximoron-chino-la-dictadura-democratica/"
  },
  {
    id: 3,
    slug: 'articulo-3',
    title: 'Desmalvinización, un síntoma colonial',
    titleEn: 'De-Malvinization, a colonial symptom',
    excerpt: 'El gobierno argentino encauzó la relación con Gran Bretaña en la cesión de las Malvinas.',
    excerptEn: 'The Argentine government channeled its relationship with Great Britain into the cession of the Malvinas.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-10-17').toISOString(),
    image: 'images/Desmalvinización un síntoma colonial.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/desmalvinizacion-un-sintoma-colonial/"
  },
  {
    id: 4,
    slug: 'articulo-4',
    title: 'China y la afirmación de una modernidad alternativa',
    titleEn: 'China and the affirmation of an alternative modernity',
    excerpt: 'La modernidad propia es concebida como clave y en contraposición con Occidente.',
    excerptEn: 'Modernity itself is conceived as key and in contrast to the West.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-9-6').toISOString(),
    image: 'images/China y la afirmación de una modernidad alternativa.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/china-y-la-afirmacion-de-una-modernidad-alternativa/"
  },
  {
    id: 5,
    slug: 'articulo-5',
    title: 'Las espectaculares elecciones de una democracia socavada',
    titleEn: 'The spectacular elections of an undermined democracy',
    excerpt: 'La frusilería del proceso electoral de EE.UU. evidencia problemas de representatividad.',
    excerptEn: 'The triviality of the US electoral process highlights problems of representativeness.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-8-11').toISOString(),
    image: 'images/Las espectaculares elecciones de una democracia socavada.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/las-espectaculares-elecciones-de-una-democracia-socavada/"
  },
  {
    id: 6,
    slug: 'articulo-6',
    title: 'Arabia Saudita en el declive del dólar global',
    titleEn: 'Saudi Arabia in the decline of the global dollar',
    excerpt: 'El Reino, clave en el mundo petrolero, cada vez teje más alianzas con China.',
    excerptEn: 'The Kingdom, a key player in the oil world, is increasingly forging alliances with China.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-7-10').toISOString(),
    image: 'images/Arabia Saudita en el declive del dólar global.png',
    category: 'Economía',
    categoryEn: 'Economy',
    source: "Tectónikos",
    link:"https://tektonikos.website/arabia-saudita-en-el-declive-del-dolar-global/"
  },
  {
    id: 7,
    slug: 'articulo-7',
    title: 'Entrevista a Francesca Staiano: “Ante China, la Unión Europea se somete a Estados Unidos”',
    titleEn: 'Interview with Francesca Staiano: "In the face of China, the European Union submits to the United States"',
    excerpt: 'Un posicionamiento marcado por la falta de soberanía y el desbarranco democrático.',
    excerptEn: 'A position marked by a lack of sovereignty and democratic collapse.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-6-9').toISOString(),
    image: 'images/Entrevista a Francesca Staiano.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/entrevista-a-francesca-staiano-ante-china-la-union-europea-se-somete-a-estados-unidos/"
  },
  {
    id: 8,
    slug: 'articulo-8',
    title: 'Guillermo Carmona: “Argentina debe proyectarse hacia el área austral”',
    titleEn: 'Guillermo Carmona: “Argentina must project itself toward the southern region”',
    excerpt: 'El exsecretario argentino del Atlántico Sur analiza el futuro de una región crucial.',
    excerptEn: 'The former Argentine Secretary of the South Atlantic analyzes the future of a crucial region.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-2-4').toISOString(),
    image: 'images/Guillermo Carmona.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/guillermo-carmona-argentina-debe-proyectarse-hacia-el-area-austral/"
  },
  {
    id: 9,
    slug: 'articulo-9',
    title: 'El arte de la guerra en la civilización latinoamericana',
    titleEn: 'The art of war in Latin American civilization',
    excerpt: 'Análisis del impacto y posibilidades de traducción del clásico “El arte de la guerra” en los países de América Latina.',
    excerptEn: 'Analysis of the impact and translation possibilities of the classic "The Art of War" in Latin American countries.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2025-1-10').toISOString(),
    image: 'images/10.jpeg',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Revista China Hoy, China",
    link:"https://www.chinahoy.com.cn/2018/wh/202501/t20250110_800389617.html"
  },
  {
    id: 10,
    slug: 'articulo-10',
    title: 'El peronismo y China más allá de la pandemia',
    titleEn: 'Peronism and China beyond the pandemic',
    excerpt: 'La pandemia evidenció la necesidad de un Estado macizo, un escenario que permitió comparar rasgos de la China socialista con la Argentina peronista.',
    excerptEn: 'The pandemic highlighted the need for a massive state, a scenario that allowed us to compare the features of socialist China with Peronist Argentina.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2020-4-8').toISOString(),
    image: 'images/El peronismo y China más allá de la pandemia.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/04/08/el-peronismo-y-china-mas-alla-de-la-pandemia/"
  },
  {
    id: 11,
    slug: 'articulo-11',
    title: 'Efectos colaterales del coronavirus',
    titleEn: 'Side effects of the coronavirus',
    excerpt: 'Tanto los atribulados distopistas occidentales como los enérgicos utopistas chinos parecieran tener razones para que el brote de un virus que en sus peores días en China mató a un promedio de 60 personas contra un total de casi 28.000 chinos muertos, tomara una magnitud que aún resta explicar.',
    excerptEn: 'Both the beleaguered Western dystopians and the energetic Chinese utopians seem to have reasons for the outbreak of a virus that in its worst days in China killed an average of 60 people out of a total of nearly 28,000 Chinese dead, to reach a magnitude that remains to be explained.',
    date: new Date('2020-3-17').toISOString(),
    image: 'images/Efectos colaterales del coronavirus.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/17/efectos-colaterales-del-coronavirus/"
  },
  {
    id: 12,
    slug: 'articulo-12',
    title: 'China, el dilema de un periodista',
    titleEn: "China, a journalist's dilemma",
    excerpt: 'Las dificultades de los periodistas latinoamericanos para informar sobre China sin derivar hacia la propaganda emitida por el Partido Comunista Chino ni la propaganda de la Secretaría de Estado de los Estados Unidos.',
    excerptEn: 'The difficulties Latin American journalists face in reporting on China without deviating into propaganda issued by the Chinese Communist Party or the U.S. Secretary of State.',
    date: new Date('2021-4-4').toISOString(),
    image: 'images/China el dilema de un periodista.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2021/04/04/china-el-dilema-de-un-periodista/"
  },
  {
    id: 13,
    slug: 'articulo-13',
    title: 'La bandera de los argentinos',
    titleEn: "The flag of the Argentines",
    excerpt: 'Los símbolos patrios cumplen la función de tender un espacio de convivencia entre personas diversas. En el Día de la Bandera argentina, argentinos de origen chino cuentan qué sienten ante el emblema celeste y blanco que los ha adoptado y que ellos adoptaron.',
    excerptEn: 'National symbols serve the purpose of creating a space for coexistence among diverse people. On Argentine Flag Day, Argentines of Chinese origin share their feelings about the blue and white emblem that has adopted them and that they have adopted.',
    date: new Date('2020-6-21').toISOString(),
    image: 'images/La bandera de los argentinos.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/06/23/la-bandera-de-los-argentinos/"
  },
  {
    id: 14,
    slug: 'articulo-14',
    title: 'El Día del Fulgor',
    titleEn: "The Day of Splendor",
    excerpt: 'La celebración del Qīngmíng jié, el Día de los Muertos en China, moviliza fantasmas en tiempos de pandemia.',
    excerptEn: 'The celebration of Qingming Jié, the Day of the Dead in China, mobilizes ghosts in times of pandemic.',
    date: new Date('2020-4-4').toISOString(),
    image: 'images/El Día del Fulgor.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/04/04/el-dia-del-fulgor/"
  },
  {
    id: 15,
    slug: 'articulo-15',
    title: 'Un tango llamado Gaviota',
    titleEn: "A tango called Seagull",
    excerpt: 'La historia de Ou Zhanming, a quien el tango que se le prendó en los años que pasó en Buenos Aires, se bautizó Gaviota, para que en las milongas recordaran su nombre, es traductor de libros de tango, representa a la Academia Nacional del Tango en Beijing y se encarga del tema en la Embajada Argentina.',
    excerptEn: 'The story of Ou Zhanming, who was captivated by the tango that captivated him during the years he spent in Buenos Aires. He baptized himself Gaviota (Seagull) so that his name would be remembered at milongas. He is a translator of tango books, represents the National Tango Academy in Beijing, and is in charge of the subject at the Argentine Embassy.',
    date: new Date('2020-6-9').toISOString(),
    image: 'images/Un tango llamado Gaviota.png',
    category: 'Cultura',
    categoryEn: 'Culture',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/06/09/un-tango-llamado-gaviota/"
  },
  {
    id: 16,
    slug: 'articulo-16',
    title: 'Hoja de ruta para las relaciones con China',
    titleEn: "Roadmap for relations with China",
    excerpt: 'El nuevo embajador argentino en China, Luis María Kreckler y el Representante Especial ante ese gobierno, Sabino Vaca Narvaja, dan pistas sobre la relación que se busca con el gigante asiático.',
    excerptEn: 'The new Argentine ambassador to China, Luis María Kreckler, and the Special Representative to that government, Sabino Vaca Narvaja, provide clues about the relationship they are seeking with the Asian giant.',
    date: new Date('2020-5-21').toISOString(),
    image: 'images/Hoja de ruta para las relaciones con China.png',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/hoja-de-ruta-para-las-relaciones-con-china"
  },
  {
    id: 17,
    slug: 'articulo-17',
    title: 'China y las distopías',
    titleEn: "China and the dystopias",
    excerpt: 'China es construida desde los aparatos ideológicos occidentales como una distopía, algo así como lo contrario a una utopía.',
    excerptEn: 'China is constructed by Western ideological apparatuses as a dystopia, something like the opposite of a utopia.',
    date: new Date('2019-11-8').toISOString(),
    image: 'images/2.jpeg',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/china-y-las-distopias"
  },
  {
    id: 18,
    slug: 'articulo-18',
    title: 'El coronavirus como escenario de disputa',
    titleEn: "Coronavirus as a scenario of dispute",
    excerpt: 'El mundo asiste preocupado a la falta de cooperación entre Estados Unidos y China, o más aún, ante la escalada en la tensión de los dos mayores países de la Tierra en medio de la pandemia más atemorizante en lo que va del siglo.',
    excerptEn: 'The world is concerned about the lack of cooperation between the United States and China, and even more so, the escalating tensions between the two largest countries on Earth amid the most terrifying pandemic of the century.',
    date: new Date('2020-3-21').toISOString(),
    image: 'images/3.jpeg',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/el-coronavirus-como-escenario-de-disputa"
  },
  {
    id: 19,
    slug: 'articulo-19',
    title: 'La Ruta de la Política para retomar la relación con China',
    titleEn: "The Political Route to Resuming Relations with China",
    excerpt: 'La vigencia de la posición de Cristina en 2015 frente a los lineamientos de la política exterior que anunció Alberto Fernández. de las coincidencias entre Perón y Mao a los acuerdos de cooperación entre ambos países.',
    excerptEn: "The validity of Cristina's 2015 stance on the foreign policy guidelines announced by Alberto Fernández. From the similarities between Perón and Mao to the cooperation agreements between the two countries.",
    date: new Date('2020-1-26').toISOString(),
    image: 'images/4.jpeg',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/la-ruta-de-la-politica-para-retomar-la-relacion-con-china"
  },
  {
    id: 20,
    slug: 'articulo-20',
    title: 'Tweeting Trump y el control de las redes sociales',
    titleEn: "Trump's tweeting and social media control",
    excerpt: 'Las redes sociales son censuradas como creadoras de imbecilidad. Pero no puede ignorárselas.',
    excerptEn: "Social media is criticized for creating stupidity. But it can't be ignored.",
    date: new Date('2020-9-19').toISOString(),
    image: 'images/1.jpeg',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Contraeditorial",
    link:"https://contraeditorial.com/tweeting-trump-y-el-control-de-las-redes-sociales/"
  },
  {
    id: 21,
    slug: 'articulo-21',
    title: 'El murciélago',
    titleEn: "The bat",
    excerpt: 'La epidemia no afectó de la misma manera a China y a Occidente. Aún estamos lejos de formarnos una imagen planetaria completa que dé cuenta de las razones de la pandemia e integre todas sus dimensiones, desde la biológica y la sanitaria hasta la tecnológica, la financiera, la social, la geopolítica, la cultural y la política interna de cada nación.',
    excerptEn: "The epidemic did not affect China and the West equally. We are still far from forming a complete global picture that accounts for the causes of the pandemic and integrates all its dimensions, from the biological and health-related to the technological, financial, social, geopolitical, cultural, and domestic politics of each nation.",
    date: new Date('2020-3-22').toISOString(),
    image: 'images/El muerciélago.png',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/22/el-murcielago/"
  },
  {
    id: 22,
    slug: 'articulo-22',
    title: 'Los ochocientos',
    titleEn: "The eight hundred",
    excerpt: 'Al cumplirse 75 años del final de la Segunda Guerra Mundial, se estrenó en China la película 八佰, Los ochocientos, que habla de la participación de ese país en la contienda. El tema es abordado en esta nota en un intento de comprender hasta qué punto China se nos presenta como otra realidad.',
    excerptEn: "On the 75th anniversary of the end of World War II, the film 八佰 (The Eight Hundred) was released in China, which tells of that country's participation in the conflict. This article addresses the topic in an attempt to understand the extent to which China is presented to us as a different reality.",
    date: new Date('2020-9-2').toISOString(),
    image: 'images/Los Ochocientos.png',
    category: 'Cultura', 
    categoryEn: 'Culture',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/09/03/los-ochocientos/"
  },
  {
    id: 23,
    slug: 'articulo-23',
    title: 'Los argentinos que no pueden volver a China',
    titleEn: "Argentines who cannot return to China",
    excerpt: 'Entre cien y doscientos argentinos que viven en China quedaron varados en Argentina por la cuarentena global que impuso la pandemia de Covid-19. Gustavo Ng entrevistó a varios afectados.',
    excerptEn: "Between 100 and 200 Argentines living in China were stranded in Argentina by the global quarantine imposed by the COVID-19 pandemic. Gustavo Ng interviewed several of those affected.",
    date: new Date('2020-12-16').toISOString(),
    image: 'images/Los argentinos que no pueden volver a China.png',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/12/16/los-argentinos-que-no-pueden-volver-a-china/"
  },
  {
    id: 24,
    slug: 'articulo-24',
    title: 'Entre el presidente y los chinos, un sabor autopía',
    titleEn: "Between the president and the Chinese, a taste of utopity",
    excerpt: 'La novela distópica Slapstick (Payasadas), del escritor Kurt Vonnegut, profetizó varios rasgos de la pandemia de COVID-19, entre ellos los problemas de Estados Unidos para afrontarla.',
    excerptEn: "Kurt Vonnegut's dystopian novel Slapstick prophesied several features of the COVID-19 pandemic, including America's struggles to cope with it.",
    date: new Date('2020-10-4').toISOString(),
    image: 'images/Entre el presidente y los chinos, un sabor a utopía.png',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/10/04/entre-el-presidente-y-los-chinos-un-sabor-a-utopia/"
  },
  {
    id: 25,
    slug: 'articulo-25',
    title: 'Carta a la comunidad china en Argentina por el 24 de marzo',
    titleEn: "Letter to the Chinese community in Argentina for March 24th",
    excerpt: 'Informe a la colectividad formada por migrantes chinos sobre la dictadura cívico-militar de 1976 a 1983.',
    excerptEn: "Report to the Chinese migrant community on the civil-military dictatorship from 1976 to 1983.",
    date: new Date('2020-3-24').toISOString(),
    image: 'images/Carta a la comunidad china en Argentina por el 24 de marzo.png',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/24/carta-a-la-comunidad-china-en-argentina-por-el-24-de-marzo/"
  },
  {
    id: 26,
    slug: 'articulo-26',
    title: 'El fin de la indigencia en China: ¿un hito de la humanidad?',
    titleEn: "The end of homelessness in China: a milestone for humanity?",
    excerpt: 'Oculta por la pandemia, y por el desinterés de gran parte de la prensa occidental, la noticia de la desaparición de la pobreza extrema china tiene dimensiones históricas. Las lecciones que este proceso deja para el mundo.',
    excerptEn: "Obscured by the pandemic and the lack of interest of much of the Western press, the news of the disappearance of extreme poverty in China has historic dimensions. The lessons this process offers for the world.",
    date: new Date('2021-1-2').toISOString(),
    image: 'images/6.jpeg',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/opinion/el-fin-de-la-indigencia-en-china-un-hito-de-la-humanidad.phtml"
  },
  {
    id: 27,
    slug: 'articulo-27',
    title: 'Vacunas en la guerra de la comunicación',
    titleEn: "Vaccines in the communication war",
    excerpt: 'Las encuestas revelan que en los países occidentales crece la imagen negativa de Beijing que, claramente, está perdiendo la batalla de la comunicación con Washington y sus aliados.',
    excerptEn: "Polls reveal that Beijing's negative image is growing in Western countries, and it is clearly losing the battle for communication with Washington and its allies.",
    date: new Date('2021-4-21').toISOString(),
    image: 'images/7.jpeg',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/internacional/vacunas-guerra-comunicacion.phtml"
  },
  {
    id: 28,
    slug: 'articulo-28',
    title: 'Democracia en modo chino',
    titleEn: "Democracy in Chinese mode",
    excerpt: 'El gobierno de Xi Jinping acaba de publicar un documento en el que explica que China es un país democrático. En Occidente, tal afirmación produce un sarcasmo generalizado, que los chinos retrucan haciendo ver que los occidentales se han tragado el cuento de que la única democracia posible es aquella que los países dominantes de Europa y América imponen como universal. “No existe un modelo fijo de democracia, sino que se manifiesta de muchas formas”, dice el informe.',
    excerptEn: "Xi Jinping's government has just published a document explaining that China is a democratic country. In the West, such a statement provokes widespread sarcasm, which the Chinese counter by suggesting that Westerners have bought into the narrative that the only democracy possible is the one imposed as universal by the dominant countries of Europe and America. \"There is no fixed model of democracy, but it manifests itself in many forms\" ​the report states.",
    date: new Date('2021-12-7').toISOString(),
    image: 'images/8.jpeg',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Radio Gráfica",
    link:"https://radiografica.org.ar/2021/12/07/democracia-en-modo-chino/"
  },
  {
    id: 29,
    slug: 'articulo-29',
    title: 'La riqueza simbólica de la serpiente',
    titleEn: "The symbolic richness of the snake",
    excerpt: 'Leyendas, mitos y simbología de la Serpiente en las antiguas tradiciones de conocimiento de China.',
    excerptEn: "Legends, myths and symbolism of the Snake in the ancient knowledge traditions of China.",
    date: new Date('2024-12-26').toISOString(),
    image: 'images/9.jpeg',
    category: 'Cultura',
    categoryEn: 'Culture', 
    source: "Revista China Hoy, China",
    link:"https://www.chinahoy.com.cn/2018/tj/202412/t20241226_800388183.html"
  },
  {
    id: 30,
    slug: 'articulo-30',
    title: 'Sabino Vaca Narvaja: retomar un camino con China',
    titleEn: "Sabino Vaca Narvaja: resume a path with China",
    excerpt: 'Heredero de una familia política, el joven especialista quiere dar un nuevo impulso a las relaciones con China.',
    excerptEn: "Heir to a political family, the young specialist wants to give new impetus to relations with China.",
    date: new Date('2020-5-22').toISOString(),
    image: 'images/5.jpeg',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/politica/sabino-vaca-narvaja-retomar-camino-china.phtml"
  },
  {
    id: 31,
    slug: 'articulo-31',
    title: 'Tras el camino de mi padre',
    titleEn: "Following my father's path",
    excerpt: 'Gustavo Ng cuenta el reencuentro luego de veinte años sin ver a su padre. Trabajo, desarraigo, identidad y las formas del hogar. ¿Qué enseñanzas trae la búsqueda del padre?',
    excerptEn: "Gustavo Ng recounts his reunion after twenty years without seeing his father. Work, displacement, identity, and the ways of homemaking. What lessons does the search for one's father bring?",
    date: new Date('2017-6-16').toISOString(),
    image: 'images/Tras el camino de mi padre.png',
    category: 'Cultura',
    categoryEn: 'Culture', 
    source: "Revista Anfibia",
    link:"https://www.revistaanfibia.com/tras-camino-padre/"
  },
  {
    id: 32,
    slug: 'articulo-32',
    title: 'China profundiza el camino de la innovación tecnológica',
    titleEn: "China deepens the path of technological innovation",
    excerpt: 'El crecimiento previsto por China para este 2024 es del 5 por ciento. El acento ya no está puesto en la cantidad y sino en la calidad del avance, con eje en los sectores de nuevas energías, equipos de alta gama y biotecnología.',
    excerptEn: "China's projected growth for 2024 is 5 percent. The emphasis is no longer on quantity but on the quality of progress, focusing on the new energy, high-end equipment, and biotechnology sectors.",
    date: new Date('2024-3-31').toISOString(),
    image: 'images/China profundiza el camino de la innovación tecnológica.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Página 12",
    link:"https://www.pagina12.com.ar/724696-china-profundiza-el-camino-de-la-innovacion-tecnologica"
  },
  {
    id: 33,
    slug: 'articulo-33',
    title: 'El PCCh proyecta China hasta el 2028',
    titleEn: "The CCP projects China until 2028",
    excerpt: 'Comenzarán hoy las sesiones del XX Congreso del Partido Comunista Chino (PCCh), el máximo órgano del partido que gobierna el país más poblado y una de las dos mayores economías del mundo.',
    excerptEn: "Sessions of the 20th Congress of the Chinese Communist Party (CCP), the highest body of the party that governs the most populous country and one of the world's two largest economies, will begin today.",
    date: new Date('2022-10-16').toISOString(),
    image: 'images/El PCCh proyecta China hasta el 2028.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/el-pcch-proyecta-china-hasta-el-2028/"
  },
  {
    id: 34,
    slug: 'articulo-34',
    title: 'El desafío: emerger con otros',
    titleEn: "The challenge: emerging with others",
    excerpt: 'El anuncio de que Argentina había entrado en los BRICS fue eufórico. Si bien se había empezado a hablar del tema diez años atrás, hubo altibajos. El anuncio de que se había decidido la inclusión de Argentina pareció sorprender a los analistas y al Gobierno.',
    excerptEn: "The announcement that Argentina had joined the BRICS was euphoric. Although the topic had been discussed for ten years, there were ups and downs. The announcement that Argentina had been included seemed to surprise analysts and the government.",
    date: new Date('2023-8-27').toISOString(),
    image: 'images/El desafío emerger con otros.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/desafio-emerger-con-otros/"
  },
  {
    id: 35,
    slug: 'articulo-35',
    title: 'La época de la longevidad',
    titleEn: "The age of longevity",
    excerpt: 'El país más poblado del mundo es el que tiene una de las tasas de natalidad más bajas. En China, en 1950, habían nacido 6,11 niños por mujer y es necesario que nazcan 2 para que la población se mantenga.',
    excerptEn: "The most populous country in the world has one of the lowest birth rates. In China, in 1950, 6.11 children were born per woman, and two more are needed to maintain the population.",
    date: new Date('2021-11-27').toISOString(),
    image: 'images/La época de la longevidad.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/la-epoca-de-la-longevidad/"
  },
  {
    id: 36,
    slug: 'articulo-36',
    title: 'A 100 años de su fundación, no hay China sin el PCCh',
    titleEn: "100 years after its founding, there is no China without the CCP",
    excerpt: 'No hay China sin gobierno. No hay gobierno chino sin Partido Comunista Chino. No hay China sin Partido Comunista Chino (PCCh).',
    excerptEn: "There is no China without a government. There is no Chinese government without the Chinese Communist Party. There is no China without the Chinese Communist Party (CCP).",
    date: new Date('2021-7-26').toISOString(),
    image: 'images/A 100 años de su fundación, no hay China sin el PCCh.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/a-100-anos-de-su-fundacion-no-hay-china-sin-el-pcch/"
  },
  {
    id: 37,
    slug: 'articulo-37',
    title: 'Argentina y los uigures',
    titleEn: "Argentina and the Uyghurs",
    excerpt: 'En el vacío informativo entre Occidente y China, la problemática de la minoría uigur, que tiene una facción independentista y parte de la jihad, es aprovechada por Estados Unidos para fustigar a China.',
    excerptEn: "In the information vacuum between the West and China, the plight of the Uighur minority, which has an independence faction and is part of the jihad movement, is being exploited by the United States to criticize China.",
    date: new Date('2020-1-5').toISOString(),
    image: 'images/Argentna y los uigures.png',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/argentina-y-los-uigures/"
  },
  // Agrega más artículos según sea necesario
];

// Press
const pressData = [
  {
    id: 1,
    title: 'China - La superación de la pobreza',
    titleEn: 'China - Overcoming poverty',
    publication: 'Programa “La Casa Invita”, AM 750',
    date: new Date('2021-6-8').toISOString(),
    summary: 'Entrevista a Gustavo Ng, autor del libro China, “La superación de la pobreza”',
    summaryEn: 'Interview with Gustavo Ng, author of the book China, “Overcoming poverty”',
    link: 'https://ar.radiocut.fm/audiocut/china-superacion-pobreza-casa-invita/',
    image: 'images/Prensa/5.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 2,
    title: 'CERCA Y LEJOS',
    titleEn: 'CLOSE AND FAR',
    publication: 'CGTN Español',
    date: new Date('2017-05-14').toISOString(),
    summary: 'Con la participación de Gustavo Ng, desde una perspectiva objetiva, se muestra un mundo y una China más reales y se analizan en profundidad temas culturales, históricos y políticos, presentando en detalle los constantes cambios y el irrefrenable desarrollo de China y de su pueblo.',
    summaryEn: 'With the participation of Gustavo Ng, from an objective perspective, a more real world and China are shown and cultural, historical and political issues are analyzed in depth, presenting in detail the constant changes and the unstoppable development of China and its people.',
    link: 'https://www.youtube.com/watch?v=uGG4sOrT3dQ',
    image: 'images/Prensa/6.jpeg',
    type: 'interview',
    typeEn: 'interview',
  
  },
  {
    id: 3,
    title: 'Viaje al Tíbet, ayer y hoy de una frontera caliente',
    titleEn: 'Journey to Tibet, yesterday and today of a hot border',
    publication: 'Programa “Voces del Mundo”, Radio Sputnik',
    date: new Date('2019-06-13').toISOString(),
    summary: 'Con una densidad poblacional de dos personas por kilómetro cuadrado y un territorio casi desértico, el Tíbet es una región remota incluso para los parámetros chinos. "Los monjes budistas tienen una presencia importantísima, pero el gobierno central de China tiene el control político y militar de la zona", dijo el periodista Gustavo Ng.',
    summaryEn: 'With a population density of two people per square kilometer and an almost desert territory, Tibet is a remote region even by Chinese standards. "Buddhist monks have a very important presence, but the central government of China has political and military control of the area," said journalist Gustavo Ng.',
    link: 'https://noticiaslatam.lat/20190713/tibet-region-remota-1088000228.html',
    image: 'images/Prensa/Viaje al Tíbet, ayer y hoy de una frontera caliente.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 4,
    title: 'Redactor jefe de la Revista Argentina DangDai: Estoy difundiendo la cultura china en Argentina',
    titleEn: 'Editor in chief of the Argentine DangDai Magazine: I am spreading Chinese culture in Argentina',
    publication: 'Wuzhou Communication Publising Media',
    date: new Date('2023-11-27').toISOString(),
    summary: 'Gustavo Ng relata su acercamiento a China y su carrera como difusor de la cultura china en Argentina.',
    summaryEn: 'Gustavo Ng recounts his approach to China and his career as a disseminator of Chinese culture in Argentina.',
    link: 'https://mp.weixin.qq.com/s/5l7OuHvijwyVXMq4ueeFSA',
    image: 'images/Prensa/8.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 5,
    title: 'Una misión a través de los libros',
    titleEn: 'A mission through books',
    publication: 'Revista China Hoy',
    date: new Date('2023-11-1').toISOString(),
    summary: 'Gustavo Ng relata cómo dedica su vida a informar sobre China en Argentina a través de los medios de comunicación y de libros.',
    summaryEn: 'Gustavo Ng recounts how he dedicates his life to informing about China in Argentina through the media and books.',
    link: 'https://www.chinahoy.com.cn/2018/tt/202311/t20231101_800347723.html',
    image: 'images/Prensa/9.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 6,
    title: 'China contra la pobreza, una batalla en palabras',
    titleEn: 'China against poverty, a battle in words',
    publication: 'Diario La Prensa, Panamá',
    date: new Date('2024-08-10').toISOString(),
    summary: 'El autor argentino Gustavo Ng, estará en Panamá presentado su obra "Podemos vencer la pobreza - La experiencia de China", donde narra su experiencia conociendo la erradicación de la pobreza en China.',
    summaryEn: 'Argentine author Gustavo Ng will be in Panama presenting his work "We can overcome poverty - The China experience", where he narrates his experience getting to know the eradication of poverty in China.',
    link: 'https://www.prensa.com/vivir/china-contra-la-pobreza-una-batalla-en-palabras/#google_vignette',
    image: 'images/Prensa/10.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 7,
    title: 'Gustavo NG: "Cuando veo a mi viejo imagino la eternidad"',
    titleEn: 'Gustavo NG: "When I see my old man, I imagine eternity"',
    publication: 'Diario Tiempo Argentino',
    date: new Date('2017-08-6').toISOString(),
    summary: 'En su último libro, el escritor propone una suerte de crónica neoyorquina sobre el postergado reencuentro con su padre después de 20 años de indiferencia.',
    summaryEn: 'In his latest book, the writer proposes a sort of New York chronicle about the postponed reunion with his father after 20 years of indifference.',
    link: 'https://www.tiempoar.com.ar/ta_article/gustavo-ng-cuando-veo-a-mi-viejo-imagino-la-eternidad',
    image: 'images/2.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 8,
    title: 'Conferencia del escritor argentino Gustavo NG en Beijing',
    titleEn: 'Conference by Argentine writer Gustavo NG in Beijing',
    publication: 'Embajada Argentina en China',
    date: new Date('2023-05-15').toISOString(),
    summary: 'El 15 de junio tuvo lugar en Beijing una conferencia de Gustavo NG, periodista y escritor especializado en China, Director de la Revista cultural Dang Dai y autor de varias obras relativas al país asiático.',
    summaryEn: 'On June 15, a conference by Gustavo NG, a journalist and writer specializing in China, Director of the cultural magazine Dang Dai and author of several works related to the Asian country, took place in Beijing.',
    link: 'https://echin.cancilleria.gob.ar/es/conferencia-del-escritor-argentino-gustavo-ng-en-beijing',
    image: 'images/Prensa/3.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 9,
    title: '¿Por qué China sólo tuvo 5000 muertos por Covid-19 ?',
    titleEn: 'Why did China only have 5000 deaths from Covid-19?',
    publication: 'Programa Café a la Turca, FM Horizonte',
    date: new Date('2022-01-28').toISOString(),
    summary: 'Entrevista de Café a la Turca a Gustavo Ng, periodista especializado en China, director de la revista DangDai, junto al colega Néstor Restivo, y compilador del libro recientemente publicado "La superación de la pandemia en América Latina", con artículos de diferentes autores sobre el escenario sanitario con que América Latina y Argentina debieron enfrentar la Covid-19 y la incidencia que tuvo en el manejo de la pandemia la cooperación de China.',
    summaryEn: 'Café a la Turca interview with Gustavo Ng, a journalist specializing in China, director of the magazine DangDai, along with colleague Néstor Restivo, and compiler of the recently published book "Overcoming the pandemic in Latin America", with articles by different authors on the health scenario that Latin America and Argentina had to face Covid-19 and the impact that China\'s cooperation had on pandemic management.',
    link: 'https://araziroxana.com.ar/nota/1238/por-que-china-solo-tuvo-5000-muertos-por-covid-19-',
    image: 'images/Prensa/7.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 10,
    title: '“El horóscopo chino es un pequeño Aleph de la cultura de los chinos”',
    titleEn: '"The Chinese horoscope is a small Aleph of Chinese culture"',
    publication: 'Diario Tiempo Argentino',
    date: new Date('2021-02-08').toISOString(),
    summary: 'El periodista y escritor Gustavo Ng, que recoge en un libro sus indagaciones sobre las claves que regirán el 2021 bajo el signo del búfalo de metal.',
    summaryEn: 'Journalist and writer Gustavo Ng, who collects in a book his inquiries about the keys that will govern 2021 under the sign of the metal buffalo.',
    link: 'https://www.tiempoar.com.ar/ta_article/el-horoscopo-chino-es-un-pequeno-aleph-de-la-cultura-de-los-chinos',
    image: 'images/Prensa/1.jpeg',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 11,
    title: 'El mayor premio de China a escritores extranjeros fue otorgado al argentino Gustavo Ng',
    titleEn: 'China\'s highest award to foreign writers was given to Argentine Gustavo Ng',
    publication: 'Página 12',
    date: new Date('2023-06-16').toISOString(),
    summary: 'El autor de “La intimidad de las islas”, “El regalo del Dios Viento” y “El Tangram de China”, entre otros títulos, es uno de los grandes divulgadores de la cultura del gigante asiático.',
    summaryEn: 'The author of "The Intimacy of the Islands", "The Gift of the Wind God" and "The Tangram of China", among other titles, is one of the great disseminators of the culture of the Asian giant.',
    link: 'https://www.youtube.com/watch?v=uGG4sOrT3dQ',
    image: 'images/Prensa/El mayor premio de China.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 12,
    title: 'Gustavo Ng criticó los polémicos dichos de Diana Mondino',
    titleEn: 'Gustavo Ng criticized the controversial statements of Diana Mondino',
    publication: 'Radio Con Vos 89.9',
    date: new Date('2024-05-03').toISOString(),
    summary: 'Entrevistado por Reynaldo Sietecase, Gustavo Ng analiza desde Beijing los prejuicios y la torpeza de la diplomacia del Gobierno de Javier Milei ante China.',
    summaryEn: 'Interviewed by Reynaldo Sietecase, Gustavo Ng analyzes from Beijing the prejudices and clumsiness of the diplomacy of Javier Milei\'s Government towards China.',
    link: 'https://noticiaslatam.lat/20190713/tibet-region-remota-1088000228.html',
    image: 'images/Prensa/Gustavo Ng criticó los polémicos dichos de Diana Mondino.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 13,
    title: 'Gustavo Ng: “China toma de la cultura argentina lo que encuentra en el bazar de la cultura global”',
    titleEn: 'Gustavo Ng: "China takes from Argentine culture what it finds in the global culture bazaar"',
    publication: 'La Nación',
    date: new Date('2023-06-03').toISOString(),
    summary: 'El escritor y periodista ganó el Special Book Award que otorga el gobierno chino; trabaja en la biografía de un artista cantonés, Lo Yuao, que vivió en San Nicolás de los Arroyos.',
    summaryEn: 'The writer and journalist won the Special Book Award given by the Chinese government; he is working on the biography of a Cantonese artist, Lo Yuao, who lived in San Nicolás de los Arroyos.',
    link: 'https://www.lanacion.com.ar/cultura/gustavo-ng-china-toma-de-la-cultura-argentina-lo-que-encuentra-en-el-bazar-de-la-cultura-global-nid03072023/',
    image: 'images/Prensa/Gustavo Ng China toma de la cultura argentina.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 14,
    title: 'Gustavo Ng: "Para los chinos somos un tesoro de recursos naturales y humanos"',
    titleEn: 'Gustavo Ng: "For the Chinese, we are a treasure trove of natural and human resources"',
    publication: 'Perfil, programa “Modo Fontevecchia”',
    date: new Date('2023-05-30').toISOString(),
    summary: 'Uno de los fundadores de Dang Dai afirmó que China se comporta, en el terreno externo, de manera neoliberal, pero podría favorecer el desarrollo de países de Latinoamérica.',
    summaryEn: 'One of the founders of Dang Dai stated that China behaves, in the external field, in a neoliberal way, but could favor the development of Latin American countries.',
    link: 'https://www.perfil.com/noticias/modo-fontevecchia/gustavo-ng-para-los-chinos-somos-un-tesoro-de-recursos-naturales-y-humanos-modof.phtml',
    image: 'images/Prensa/Gustavo Ng Para los chinos somos.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 15,
    title: 'Gustavo Ng ganó el premio mayor de China para escritores extranjeros',
    titleEn: 'Gustavo Ng won China\'s top prize for foreign writers',
    publication: 'Infobae',
    date: new Date('2023-06-15').toISOString(),
    summary: 'El periodista y editor argentino recibió en Beijing el Special Book Award, por su labor de difusión cultural. “Necesitamos que nuestras relaciones vayan más allá de la venta de recursos naturales e involucren al arte y la ciencia”, afirmó.',
    summaryEn: 'The Argentine journalist and editor received the Special Book Award in Beijing for his cultural dissemination work. "We need our relationships to go beyond the sale of natural resources and involve art and science," he said.',
    link: 'https://www.infobae.com/cultura/2023/06/15/gustavo-ng-gano-el-premio-mayor-de-china-para-escritores-extranjeros/',
    image: 'images/Prensa/Gustavo Ng ganó el premio mayor.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 16,
    title: '"China tiene una política específica hacia una nueva configuración del mundo" - Una entrevista con Gustavo Ng',
    titleEn: '"China has a specific policy towards a new world configuration" - An interview with Gustavo Ng',
    publication: 'Jacobin',
    date: new Date('2022-10-22').toISOString(),
    summary: 'Hasta ahora China se atuvo a las reglas de juego mundiales, pero este XX Congreso del PCCh puede empezar a marcar el punto de inflexión hacia un momento de mayor injerencia en la política global.',
    summaryEn: 'So far, China has adhered to global rules of the game, but this 20th Congress of the CCP could begin to mark the turning point towards a moment of greater interference in global politics.',
    link: 'https://jacobinlat.com/2022/10/china-tiene-una-politica-especifica-hacia-una-nueva-configuracion-del-mundo/',
    image: 'images/Prensa/China tiene una política específica.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 17,
    title: 'Gustavo Ng: “China es inevitable para toda América Latina y hasta para los Estados Unidos”',
    titleEn: 'Gustavo Ng: "China is inevitable for all of Latin America and even for the United States"',
    publication: 'CNN Radio Argentina',
    date: new Date('2024-10-14').toISOString(),
    summary: 'Gustavo Ng, editor de la revista DangDai, afirmó que “China es inevitable. La dimensión que ganó y la aceleración económica que tiene, hace que sea inevitable para toda América Latina, así como lo es para los Estados Unidos”.',
    summaryEn: 'Gustavo Ng, editor of the DangDai magazine, stated that "China is inevitable. The dimension it has gained and the economic acceleration it has, makes it inevitable for all of Latin America, as it is for the United States".',
    link: 'https://cnnespanol.cnn.com/radio/2024/10/14/gustavo-ng-china-es-inevitable-para-toda-america-latina-y-hasta-para-los-estados-unidos',
    image: 'images/Prensa/Gustavo Ng China es inevitable.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 18,
    title: 'Dice el periodista argentino que más sabe de China: "Como uno ve que Mondino es rica, piensa que es culta"',
    titleEn: 'Says the Argentine journalist who knows the most about China: "When you see that Mondino is rich, you think she is cultured"',
    publication: 'Perfil, programa “Modo Fontevecchia”',
    date: new Date('2024-05-03').toISOString(),
    summary: 'El periodista Gustavo Ng se refirió a los dichos de la Canciller, que dijo que "los chinos son todos iguales", y los comparó con "hablar con alguien y que se saque los mocos delante tuyo". "Cuando se habla de negocios estos son pequeños gestos de mala educación".',
    summaryEn: 'Journalist Gustavo Ng referred to the statements of the Chancellor, who said that "the Chinese are all the same", and compared them to "talking to someone and having them pick their nose in front of you". "When it comes to business, these are small gestures of bad manners".',
    link: 'https://www.perfil.com/noticias/modo-fontevecchia/dice-el-periodista-argentino-que-mas-sabe-de-china-como-uno-ve-que-mondino-es-rica-piensa-que-es-culta-modof.phtml',
    image: 'images/Prensa/Dice el periodista argentino que más.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 19,
    title: 'La China profunda vista con ojos del argentino Gustavo Ng',
    titleEn: 'Deep China seen through the eyes of Argentine Gustavo Ng',
    publication: 'Tiempo Argentino',
    date: new Date('2023-07-09').toISOString(),
    summary: 'Premiado por la difusión de la cultura del milenario país asiático, el codirector de la revista Dang Dai cuenta sus experiencias entre pueblos y territorios donde Occidente tiene la demonización fácil.',
    summaryEn: 'Awarded for the dissemination of the culture of the ancient Asian country, the co-director of the Dang Dai magazine recounts his experiences among peoples and territories where the West has easy demonization.',
    link: 'https://www.tiempoar.com.ar/ta_article/la-china-profunda-vista-con-ojos-del-argentino-gustavo-ng/',
    image: 'images/Prensa/La China profunda vista con.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 20,
    title: 'Gustavo Ng: "Salta tiene una oportunidad enorme con China"',
    titleEn: 'Gustavo Ng: "Salta has a huge opportunity with China"',
    publication: 'Radio Nacional Salta',
    date: new Date('2022-07-14').toISOString(),
    summary: 'Lo indicó el periodista Gustavo Ng, especializado en las relaciones de Argentina y China, en el marco de su visita a Radio Nacional Salta, donde habló de la incidencia de los negocios del país asiático en Argentina y de las oportunidades.',
    summaryEn: 'This was indicated by journalist Gustavo Ng, specialized in the relations between Argentina and China, during his visit to Radio Nacional Salta, where he spoke about the impact of Asian country\'s business in Argentina and the opportunities.',
    link: 'https://www.radionacional.com.ar/gustavo-ng-salta-tiene-una-oportunidad-enorme-con-china/',
    image: 'images/Prensa/Gustavo Ng Salta tiene una.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 21,
    title: 'Gustavo Ng participó en el Foro Especial con Argentina de "China en la nueva expedición y el mundo"',
    titleEn: 'Gustavo Ng participated in the Special Forum with Argentina of "China in the new expedition and the world"',
    publication: 'CGTN Español',
    date: new Date('2022-11-02').toISOString(),
    summary: 'El Foro Especial con Argentina en el marco de la serie de coloquios televisivos "China en la nueva expedición y el mundo" se celebró el 31 de octubre, organizado por CGTN. Participó en el debate de forma virtual Gustavo Ng, el editor de Revista DangDai.',
    summaryEn: 'The Special Forum with Argentina within the framework of the television colloquium series "China in the new expedition and the world" was held on October 31, organized by CGTN. Gustavo Ng, the editor of DangDai Magazine, participated in the debate virtually.',
    link: 'https://www.youtube.com/watch?v=cPQ8nBXPSRghttps://www.youtube.com/watch?v=cPQ8nBXPSRg',
    image: 'images/Prensa/Gustavo Ng participó en el Foro.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 22,
    title: 'Gustavo Ng: “Con mi viaje le resolví a mi papá la contradicción de querer dejar China atrás, pero a la vez ser chino”',
    titleEn: 'Gustavo Ng: "With my trip, I solved for my dad the contradiction of wanting to leave China behind, but at the same time being Chinese"',
    publication: 'Medium',
    date: new Date('2017-07-31').toISOString(),
    summary: 'En Mariposa de otoño el autor esboza con sutileza trazos de un pasado que lo llevó a reencontrarse con su padre y con la cultura de China. Un viaje a Nueva York que fue además iniciativa para reconstruir la propia identidad.',
    summaryEn: 'In "Mariposa de otoño", the author subtly outlines traces of a past that led him to reunite with his father and with Chinese culture. A trip to New York that was also an initiative to rebuild one\'s own identity.',
    link: 'https://medium.com/@mariasingla/gustavo-ng-con-mi-viaje-le-resolv%C3%AD-a-mi-pap%C3%A1-la-contradicci%C3%B3n-de-querer-dejar-china-atr%C3%A1s-pero-c628328e86e6',
    image: 'images/Prensa/Gustavo Ng Con mi viaje le resolví.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 23,
    title: 'La oportunidad de Sam',
    titleEn: 'Sam\'s opportunity',
    publication: 'CGTN',
    date: new Date('2022-10-02').toISOString(),
    summary: 'Dice Gustavo Ng en un artículo, “China da oportunidades, o más bien habría que decir que ofrece oportunidades que pueden ser tomadas por quienes trabajan intensamente para aprovecharlas”.',
    summaryEn: 'Gustavo Ng says in an article, "China provides opportunities, or rather it should be said that it offers opportunities that can be taken by those who work hard to take advantage of them".',
    link: 'https://espanol.cgtn.com/news/2022-10-02/1575312192947163137/index.html?fbclid=IwZXh0bgNhZW0CMTEAAR2BTDFAQUPNHjAUFOEOdTITeqqqagEVo6L-mDLZzDi0QIUFXc9Qfk8lq6Q_aem_qrHURRT89rDCqY-HXA43ZQ',
    image: 'images/Prensa/La oportunidad de Sam.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 24,
    title: 'Cerca y Lejos: Gustavo NG, fundador de la revista Dangdai',
    titleEn: 'Close and Far: Gustavo NG, founder of Dangdai magazine',
    publication: 'CGTN Español',
    date: new Date('2022-02-28').toISOString(),
    summary: 'Gustavo NG, es un periodista argentino, descendiente de chinos. Hace 10 años con Néstor Restivo hicieron la revista DangDai para el intercambio cultural con China, la única revista de Hispanoamérica dedicada al intercambio cultural.',
    summaryEn: 'Gustavo NG, is an Argentine journalist, descendant of Chinese. 10 years ago with Néstor Restivo they made the DangDai magazine for cultural exchange with China, the only magazine in Hispanic America dedicated to cultural exchange.',
    link: 'https://www.youtube.com/watch?v=ReARKTqlfaE',
    image: 'images/Prensa/Cerca y Lejos Gustavo NG, fundador de la revista Dangdai.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 25,
    title: 'Discurso de Gustavo Ng, editor de Revista DangDai en el Foro de Hongqiao',
    titleEn: 'Speech by Gustavo Ng, editor of DangDai Magazine at the Hongqiao Forum',
    publication: 'CGTN Español',
    date: new Date('2022-11-14').toISOString(),
    summary: 'Gustavo Ng, editor de Revista DangDai, dio un discurso en línea para el Foro de Hongqiao, hablando del mismo objetivo que tienen China y Argentina. Según Gustavo Ng, la equidad social que busca el socialismo también es un principio y un sueño del pueblo argentino, en Argentina lo llaman justicia social.',
    summaryEn: 'Gustavo Ng, editor of DangDai Magazine, gave an online speech for the Hongqiao Forum, speaking of the same objective that China and Argentina have. According to Gustavo Ng, the social equity sought by socialism is also a principle and a dream of the Argentine people, in Argentina they call it social justice.',
    link: 'https://www.youtube.com/watch?v=RQU3X1KZr_A&t=6s',
    image: 'images/Prensa/Discurso de Gustavo Ng.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 26,
    title: 'El libro "Mariposa de otoño" fue distinguido por la Legislatura de Buenos Aires',
    titleEn: 'The book "Mariposa de otoño" was distinguished by the Legislature of Buenos Aires',
    publication: 'CGTN Español',
    date: new Date('2019-05-06').toISOString(),
    summary: 'En Argentina se ha publicado el primer libro redactado por un argentino de origen chino, Gustavo Ng, quien habla sobre la inmigración del gigante asiático al país del fin del mundo. Ng, recibió una distinción oficial por su obra “Mariposa de otoño.”',
    summaryEn: 'In Argentina, the first book written by an Argentine of Chinese origin, Gustavo Ng, has been published, who talks about the',
    link: 'https://www.youtube.com/watch?v=WCrqkMH9DVY&t=90s',
    image: 'images/Prensa/El libro Mariposa de otoño.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 27,
    title: 'Gustavo Ng: “Es posible que éste sea el punto de cruce entre el declive de Estados Unidos y el alza de China”',
    titleEn: 'Gustavo Ng: "This may be the crossroads between the decline of the United States and the rise of China"',
    publication: 'Radio UNAJ FM 88.5',
    date: new Date('2020-04-15').toISOString(),
    summary: 'Entrevistamos a Gustavo Ng, periodista especializado en China y director Ejecutivo del Proyecto Dang Dai de Intercambio Cultural entre Argentina y China.',
    summaryEn: 'We interviewed Gustavo Ng, a journalist specializing in China and Executive Director of the Dang Dai Cultural Exchange Project between Argentina and China.',
    link: 'https://radio.unaj.edu.ar/gustavo-ng-es-posible-que-este-sea-el-punto-de-cruce-entre-el-declive-de-estados-unidos-y-el-alza-de-china/',
    image: 'images/Prensa/Gustavo Ng Es posible que éste.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 28,
    title: 'Argentine journalist: China contributes Chinese wisdom to the world',
    titleEn: 'Argentine journalist: China contributes Chinese wisdom to the world',
    publication: 'People\’s Daily',
    date: new Date('2022-10-27').toISOString(),
    summary: 'An Argentine journalist covering the 20th National Congress of the CPC has spoken highly of its significance, saying China’s development is changing the shape of the world.',
    summaryEn: 'An Argentine journalist covering the 20th National Congress of the CPC has spoken highly of its significance, saying China’s development is changing the shape of the world.',
    link: 'http://en.people.cn/n3/2022/1027/c90000-10164385.html',
    image: 'images/Prensa/Periodista argentino China aporta.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 29,
    title: 'Gustavo Ng: “Escribo para tomar conciencia plena de las cosas”',
    titleEn: 'Gustavo Ng: "I write to become fully aware of things"',
    publication: 'Enredacción',
    date: new Date('2022-06-30').toISOString(),
    summary: 'En “La intimidad de las islas”, el periodista y escritor Gustavo Ng retoma y potencia algunos de los temas que transitó en su libro anterior “Mariposa de otoño”: la paternidad, la búsqueda del origen, la identidad y la propia vida convertida en literatura.',
    summaryEn: 'In "La intimidad de las islas", journalist and writer Gustavo Ng takes up and enhances some of the themes he explored in his previous book "Mariposa de otoño": fatherhood, the search for origin, identity, and one\'s own life turned into literature.',
    link: 'https://enredaccion.com.ar/gustavo-ng-escribo-para-tomar-conciencia-plena-de-las-cosas/',
    image: 'images/Prensa/Gustavo Ng Escribo para tomar.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 30,
    title: 'Gustavo Ng: Building a bridge between China and Argentina',
    titleEn: 'Gustavo Ng: Building a bridge between China and Argentina',
    publication: 'Chinese Social Sciences Today',
    date: new Date('2022-10-30').toISOString(),
    summary: 'Gustavo Ng is a renowned Argentine expert on Chinese issues, writer, journalist, editor-in-chief of Dang Dai magazine, and a researcher at the University of Congress (Universidad de Congreso) in Argentina. Born in Argentina in 1962, Ng is a descendant of early Chinese immigrants. His father is Chinese and his mother is Argentine.',
    summaryEn: 'Gustavo Ng is a renowned Argentine expert on Chinese issues, writer, journalist, editor-in-chief of Dang Dai magazine, and a researcher at the University of Congress (Universidad de Congreso) in Argentina. Born in Argentina in 1962, Ng is a descendant of early Chinese immigrants. His father is Chinese and his mother is Argentine.',
    link: 'http://english.cssn.cn/skw_dialogue/202211/t20221103_5654063.shtml',
    image: 'images/Prensa/Gustavo Ng Building a bridge.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 31,
    title: 'Senadores recibieron información sobre la actualidad de China',
    titleEn: 'Senators received information on the current situation in China',
    publication: 'PRENSA SENADO SALTA',
    date: new Date('2023-08-18').toISOString(),
    summary: 'Gustavo Ng presentó ante el Senado de la provincia de Salta un informe sobre la planificación, implementación y resultados del plan de China para suprimir la pobreza extrema.',
    summaryEn: 'Gustavo Ng presented a report to the Senate of the province of Salta on the planning, implementation, and results of China\'s plan to eliminate extreme poverty.',
    link: 'https://www.youtube.com/watch?v=5QYikXVRioA',
    image: 'images/Prensa/Senadores recibieron información.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 32,
    title: 'Gustavo Ng, experto argentino en temas chinos, descifra la lucha de China contra la pobreza',
    titleEn: 'Gustavo Ng, Argentine expert on Chinese issues, deciphers China\'s fight against poverty',
    publication: 'CRI en línea',
    date: new Date('2024-06-20').toISOString(),
    summary: 'El experto argentino en temas chinos Gustavo Ng descifra la lucha de China contra la pobreza Gustavo Ng.',
    summaryEn: 'Argentine expert on Chinese issues Gustavo Ng deciphers China\'s fight against poverty Gustavo Ng.',
    link: 'https://www.youtube.com/watch?v=PMcxjFPDzik',
    image: 'images/Prensa/Gustavo Ng experto argentino en.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 33,
    title: 'Entrevista a Gustavo Ng Dir. Ejecutivo en Proyecto Dang Dai',
    titleEn: 'Interview with Gustavo Ng Executive Director at Dang Dai Project',
    publication: 'Tv Canal 2 Salta, programa De Buena Fuente',
    date: new Date('2022-07-15').toISOString(),
    summary: 'Entrevista a Gustavo Ng Director Ejecutivo en Proyecto Dang Dai - Intercambio Cultural entre Argentina y China, en De Buena Fuente con Marcela Jesús.',
    summaryEn: 'Interview with Gustavo Ng Executive Director at Dang Dai Project - Cultural Exchange between Argentina and China, on De Buena Fuente with Marcela Jesús.',
    link: 'https://www.youtube.com/watch?v=q294hAKcnP0',
    image: 'images/Prensa/Entrevista a Gustavo Ng Dir.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 34,
    title: 'A los 8 años, mi papá escapó de China. 70 años después viajé a conocer su casa y a saber quién soy',
    titleEn: 'At 8 years old, my dad escaped from China. 70 years later I traveled to know his house and to know who I am',
    publication: 'Clarín',
    date: new Date('2017-01-21').toISOString(),
    summary: 'Es hijo de un cantonés que se radicó en la Argentina y formó familia. Luego, sin embargo, volvió con los suyos que vivían en Chinatown, Nueva York. El autor estuvo con ellos un tiempo pero no se adaptó.',
    summaryEn: 'He is the son of a Cantonese father who settled in Argentina and started a family. Later, however, he returned to his family, who lived in Chinatown, New York. The author stayed with them for a while but didn\'t adapt.',
    link: 'https://www.clarin.com/sociedad/mundos-ntimos-pap-escap-china-70-despu-viaj-conocer-casa-saber-qui_0_ryXvx9THe.html?srsltid=AfmBOoqN-VXb3o1pZ4OopPFYCC4hKawTM2npjrLWsZfC10zQcicNvhn7',
    image: 'images/Prensa/A los 8 años mi papá escapó.png',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 35,
    title: 'Periodista argentino: China aporta su sabiduría al mundo',
    titleEn: 'Argentine journalist: China contributes its wisdom to the world',
    publication: 'CGTN Español',
    date: new Date('2022-11-17').toISOString(),
    summary: 'Un periodista argentino que cubrió el XX Congreso Nacional del Partido Comunista de China ha valorado mucho su importancia, afirmando que el desarrollo de China está cambiando la forma del mundo.',
    summaryEn: 'An Argentine journalist who covered the 20th National Congress of the Communist Party of China has highly praised its significance, stating that China\'s development is changing the shape of the world.',
    link: 'https://espanol.cgtn.com/news/2022-11-17/1593148643468173313/index.html',
    image: 'images/Prensa/Periodista argentino China aporta.png',
    type: 'interview',
    typeEn: 'interview',
  },
 /*  {
    id: 36,
    title: '',
    titleEn: '',
    publication: '',
    date: new Date('2023-05-15').toISOString(),
    summary: '',
    summaryEn: '',
    link: '',
    image: '',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 37,
    title: '',
    titleEn: '',
    publication: '',
    date: new Date('2023-05-15').toISOString(),
    summary: '',
    summaryEn: '',
    link: '',
    image: '',
    type: 'interview',
    typeEn: 'interview',
  },
*/

  // Agrega más artículos de prensa según sea necesario
];

// Books
const booksData = [
  {
    id: 1,
    title: 'El Año del Gallo de Fuego',
    titleEn: 'The Year of the Fire Rooster',
    description: 'Estudio sobre la mitología china que asigna al totem Gallo uno de los doce lugares en la regencia de los años en su calendario tradicional.',
    descriptionEn: 'Study on Chinese mythology that assigns the Rooster totem one of the twelve places in the regency of the years in its traditional calendar.',
    cover: 'images/libros/TAPA El Año del Gallo de Fuego.png',
    publishDate: 'Buenos Aires, 2016',
    publisher: 'Atlántida',
    
  },
  {
    id: 2,
    title: 'El año del Perro de Tierra',
    titleEn: 'The Year of the Earth Dog',
    description: 'El Perro es uno de los arquetipos de la tradición de conocimiento que encierra el milenario zodíaco de los chinos, que integra mitología, literatura, realidades étnicas y filosofía.',
    descriptionEn: 'The Dog is one of the archetypes of the tradition of knowledge contained in the ancient Chinese zodiac, which integrates mythology, literature, ethnic realities, and philosophy.',
    cover: 'images/libros/Tapa Perro.jpg',
    publishDate: 'Buenos Aires, 2017',
    publisher: 'Atlántida',
   
  },
  {
    id: 3,
    title: 'El zoodíaco chino. Un viaje por los sueños del despertar',
    titleEn: 'The Chinese Zodiac. A Journey Through the Dreams of Awakening',
    description: 'Análisis del sistema de lógicas ensambladas en el conjunto de 12 tótems que convergieron en la historia de las relaciones entre los pueblos que formaron la actual China.',
    descriptionEn: 'Analysis of the system of logic assembled in the set of 12 totems that converged in the history of relations between the peoples that formed present-day China.',
    cover: 'images/libros/TAPA El Zoodíaco Chino 2023.png',
    publishDate: 'Buenos Aires, 2023',
    publisher: 'El Bien del Sauce',
  
  },
  {
    id: 4,
    title: 'El regalo del Dios Viento. Viaje al país de los budistas tibetanos',
    titleEn: 'The Gift of the Wind God. Journey to the Land of the Tibetan Buddhists',
    description: 'La vida de los tibetanos en las provincias de Sichuan, Qinghai y Gansu y en la Región Autónoma del Tibet. Relatos que surgieron de cinco visitas que incluyeron desde la convivencia en carpas en las montañas de pastores nómadas hasta la participación en un foro mundial sobre el desarrollo de la región.',
    descriptionEn: 'The lives of Tibetans in the provinces of Sichuan, Qinghai, and Gansu, and in the Tibet Autonomous Region. Stories from five visits, ranging from living in tents in the mountains with nomadic herders to participating in a global forum on the region\'s development.',
    cover: 'images/libros/Tapa Plana.png',
    publishDate: 'Buenos Aires, 2022',
    publisher: 'El Bien del Sauce',
  
  },
  {
    id: 5,
    title: 'China. La superación de la pobreza (con Néstor Restivo)',
    titleEn: 'China. Overcoming poverty (with Néstor Restivo)',
    description: 'Investigación sobre la lucha contra la pobreza extrema llevada a cabo con éxito por China, el país más poblado del mundo, como parte de su cometido socialista.',
    descriptionEn: 'Research on the fight against extreme poverty successfully carried out by China, the world\'s most populous country, as part of its socialist mission.',
    cover: 'images/libros/TAPA China, la superación de la pobreza.jpeg',
    publishDate: 'Mendoza, 2021',
    publisher: 'Universidad de Congreso',
  
  },
  {
    id: 6,
    title: '"Podemos vencer la pobreza. La experiencia china" (con Néstor Restivo)',
    titleEn: '"We can overcome poverty. The Chinese experience" (with Néstor Restivo)',
    description: 'Ensayo que recoge 8 años de investigación sobre el diseño e implementación de estrategias por parte de China para conseguir la hazaña de sacar de la pobreza extrema a 800 millones de personas.',
    descriptionEn: ' Essay that collects 8 years of research on the design and implementation of strategies by China to achieve the feat of lifting 800 million people out of extreme poverty.',
    cover: 'images/libros/Tapa Podemos vencer la pobreza.JPG',
    publishDate: 'Beijing, 2023',
    publisher: 'China Interncontinental Press',
  
  },
  {
    id: 7,
    title: 'El Tangram de China. ¿Qué ven los latinoamericanos cuando miran al gigante asiático?',
    titleEn: 'China\'s Tangram. What do Latin Americans see when they look at the Asian giant?',
    description: 'Ensayo sobre el complejo de percepciones que tienen argentinos y latinoamericanos sobre China, país con el que cada vez tienen más trato en un intercambio que sólo tiene como destino el incremento.',
    descriptionEn: ' Essay on the complex perceptions that Argentines and Latin Americans have about China, a country with which they are increasingly in contact in an exchange that only has as its destination an increase.',
    cover: 'images/libros/TAPA para difusión.png',
    publishDate: 'Buenos Aires, 2022',
    publisher: 'El Bien del Sauce',
  
  },
  {
    id: 8,
    title: 'El Año del Búfalo',
    titleEn: 'The Year of the Buffalo',
    description: 'Leyendas, saberes e historias milenarias sobre uno de los 12 animales de la astrología china, tradición de conocimiento que gravitó sobre emperadores en la antigüedad y hoy sigue vigente en el pueblo.',
    descriptionEn: 'Legends, knowledge, and ancient stories about one of the 12 animals of Chinese astrology, a tradition of knowledge that revolved around emperors in antiquity and is still in force today.',
    cover: 'images/libros/tapa Horoscopo Chino 2021 081220.png',
    publishDate: 'Córdoba, 2020',
    publisher: 'Enredacción',
  
  },
  {
    id: 9,
    title: '10.134 kilómetros a través de China',
    titleEn: '10,134 kilometers through China',
    description: 'Un recorrido de dos meses en tren por más de 20 ciudades, a través de grandes urbes, desiertos, campos de cultivo, montañas, sitios arqueológicos y aldeas de China. Y el encuentro con la aldea donde vivieron sus ancestros.',
    descriptionEn: 'A two-month train journey through more than 20 cities, through large cities, deserts, farmland, mountains, archaeological sites, and villages in China. And the encounter with the village where his ancestors lived.',
    cover: 'images/libros/IMG_3115.JPG',
    publishDate: 'Beijing, 2021',
    publisher: 'Blossom Press',
  
  },
  {
    id: 10,
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    cover: '',
    publishDate: '',
    publisher: '',
  
  },
  {
    id: 11,
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    cover: '',
    publishDate: '',
    publisher: '',
  
  },
  {
    id: 12,
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    cover: '',
    publishDate: '',
    publisher: '',
  
  },
  {
    id: 13,
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    cover: '',
    publishDate: '',
    publisher: '',
  
  }
];

// Photo Galleries
const galleries = [
  {
    id: 'china',
    title: 'Viajes a China',
    titleEn: 'China Travels',
    description: 'Una colección de fotografías tomadas durante mis diversos viajes a China, mostrando tanto la China tradicional como la moderna.',
    descriptionEn: 'A collection of photographs taken during my various trips to China, showing both traditional and modern China.',
    coverImage: 'images/placeholder.svg',
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `china-${i + 1}`,
      title: `China - Foto ${i + 1}`,
      titleEn: `China - Photo ${i + 1}`,
      description: `Descripción de la foto ${i + 1} tomada en China.`,
      descriptionEn: `Description of photo ${i + 1} taken in China.`,
      location: `Beijing, China`,
      locationEn: `Beijing, China`,
      date: new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      imageUrl: 'images/placeholder.svg'
    }))
  },
  {
    id: 'buenosaires',
    title: 'Buenos Aires',
    titleEn: 'Buenos Aires',
    description: 'Mi ciudad natal a través de mi lente. Lugares icónicos y rincones escondidos de Buenos Aires.',
    descriptionEn: 'My hometown through my lens. Iconic places and hidden corners of Buenos Aires.',
    coverImage: 'images/placeholder.svg',
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `buenosaires-${i + 1}`,
      title: `Buenos Aires - Foto ${i + 1}`,
      titleEn: `Buenos Aires - Photo ${i + 1}`,
      description: `Descripción de la foto ${i + 1} tomada en Buenos Aires.`,
      descriptionEn: `Description of photo ${i + 1} taken in Buenos Aires.`,
      location: `Buenos Aires, Argentina`,
      locationEn: `Buenos Aires, Argentina`,
      date: new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      imageUrl: 'images/placeholder.svg'
    }))
  },
  {
    id: 'newyork',
    title: 'Nueva York',
    titleEn: 'New York',
    description: 'Imágenes capturadas durante mis visitas a Nueva York, reflejando la energía y diversidad de esta metrópolis.',
    descriptionEn: 'Images captured during my visits to New York, reflecting the energy and diversity of this metropolis.',
    coverImage: 'images/placeholder.svg',
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `newyork-${i + 1}`,
      title: `Nueva York - Foto ${i + 1}`,
      titleEn: `New York - Photo ${i + 1}`,
      description: `Descripción de la foto ${i + 1} tomada en Nueva York.`,
      descriptionEn: `Description of photo ${i + 1} taken in New York.`,
      location: `Nueva York, EE.UU.`,
      locationEn: `New York, USA`,
      date: new Date(2019, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      imageUrl: 'images/placeholder.svg'
    }))
  },
  {
    id: 'misc',
    title: 'Varias',
    titleEn: 'Miscellaneous',
    description: 'Una colección ecléctica de fotografías de diferentes lugares y momentos que capturan mi atención.',
    descriptionEn: 'An eclectic collection of photographs from different places and moments that capture my attention.',
    coverImage: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37.jpeg',
    photos: [
      {
        id: 'misc-1',
        title: 'Foto Miscelánea 1',
        titleEn: 'Miscellaneous Photo 1',
        description: 'Descripción de la foto miscelánea 1.',
        descriptionEn: 'Description of miscellaneous photo 1.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 0, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37.jpeg'
      },
      {
        id: 'misc-2',
        title: 'Foto Miscelánea 2',
        titleEn: 'Miscellaneous Photo 2',
        description: 'Descripción de la foto miscelánea 2.',
        descriptionEn: 'Description of miscellaneous photo 2.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 1, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37 (2).jpeg'
      },
      // Agrega más fotos aquí
      {
        id: 'misc-3',
        title: 'Foto Miscelánea 3',
        titleEn: 'Miscellaneous Photo 3',
        description: 'Descripción de la foto miscelánea 3.',
        descriptionEn: 'Description of miscellaneous photo 3.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 2, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37 (1).jpeg'
      },
      {
        id: 'misc-4',
        title: 'Foto Miscelánea 4',
        titleEn: 'Miscellaneous Photo 4',
        description: 'Descripción de la foto miscelánea 4.',
        descriptionEn: 'Description of miscellaneous photo 4.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 3, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.38.jpeg'
      },
      {
        id: 'misc-5',
        title: 'Foto Miscelánea 5',
        titleEn: 'Miscellaneous Photo 5',
        description: 'Descripción de la foto miscelánea 5.',
        descriptionEn: 'Description of miscellaneous photo 5.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 4, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.07 (1).jpeg'
      },
      {
        id: 'misc-6',
        title: 'Foto Miscelánea 6',
        titleEn: 'Miscellaneous Photo 6',
        description: 'Descripción de la foto miscelánea 6.',
        descriptionEn: 'Description of miscellaneous photo 6.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 5, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.07.jpeg'
      },
      {
        id: 'misc-7',
        title: 'Foto Miscelánea 7',
        titleEn: 'Miscellaneous Photo 7',
        description: 'Descripción de la foto miscelánea 7.',
        descriptionEn: 'Description of miscellaneous photo 7.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 6, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.08.jpeg'
      },
      {
        id: 'misc-8',
        title: 'Foto Miscelánea 8',
        titleEn: 'Miscellaneous Photo 8',
        description: 'Descripción de la foto miscelánea 8.',
        descriptionEn: 'Description of miscellaneous photo 8.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 7, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.52.25 (1).jpeg'
      },
      {
        id: 'misc-9',
        title: 'Foto Miscelánea 9',
        titleEn: 'Miscellaneous Photo 9',
        description: 'Descripción de la foto miscelánea 9.',
        descriptionEn: 'Description of miscellaneous photo 9.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 8, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.52.25.jpeg'
      },
      {
        id: 'misc-10',
        title: 'Foto Miscelánea 10',
        titleEn: 'Miscellaneous Photo 10',
        description: 'Descripción de la foto miscelánea 10.',
        descriptionEn: 'Description of miscellaneous photo 10.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 9, 1).toISOString(),
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.57.59.jpeg'
      },
      {
        id: 'misc-11',
        title: 'Foto Miscelánea 11',
        titleEn: 'Miscellaneous Photo 11',
        description: 'Descripción de la foto miscelánea 11.',
        descriptionEn: 'Description of miscellaneous photo 11.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 10, 1).toISOString(),
        imageUrl: 'images/varias/photo11.jpg'
      },
      {
        id: 'misc-12',
        title: 'Foto Miscelánea 12',
        titleEn: 'Miscellaneous Photo 12',
        description: 'Descripción de la foto miscelánea 12.',
        descriptionEn: 'Description of miscellaneous photo 12.',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        date: new Date(2022, 11, 1).toISOString(),
        imageUrl: 'images/varias/photo12.jpg'
      }
    ]
  }
];

// Biography Content
const biographyContent = {
  es: `
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
  `,
  en: `
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
  `
};

// Helper functions to get data
function getArticleBySlug(slug) {
  return articlesData.find(article => article.slug === slug);
}

function getArticleCategories() {
  return [...new Set(articlesData.map(article => article.category))];
}

function getArticleCategoriesEn() {
  return [...new Set(articlesData.map(article => article.categoryEn))];
}

function getFeaturedArticles() {
  return articlesData.slice(0, 3);
}

function getPressMentions() {
  return pressData.filter(item => item.type === 'mention' || item.type === 'review');
}

function getPressInterviews() {
  return pressData.filter(item => item.type === 'interview');
}

function getFeaturedPress() {
  return pressData.slice(0, 3);
}

function getFeaturedBook() {
  return booksData[0];
}

function getGalleryById(id) {
  return galleries.find(gallery => gallery.id === id);
}

function getFeaturedGallery() {
  return galleries[0];
}
