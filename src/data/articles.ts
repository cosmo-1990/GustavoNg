
export interface Article {
  id: number;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  date: string;
  category: string;
  categoryEn: string;
  image: string;
  slug: string;
}

export const articlesData: Article[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `El arte de la escritura en la era digital ${i + 1}`,
  titleEn: `The art of writing in the digital age ${i + 1}`,
  summary: `Una exploración sobre cómo la tecnología ha transformado la forma en que escribimos y compartimos nuestras ideas en el siglo XXI.`,
  summaryEn: `An exploration of how technology has transformed the way we write and share our ideas in the 21st century.`,
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <blockquote>
      La escritura es la pintura de la voz. - Voltaire
    </blockquote>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  `,
  contentEn: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <blockquote>
      Writing is the painting of the voice. - Voltaire
    </blockquote>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  `,
  date: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
  category: ['Cultura', 'Tecnología', 'Literatura', 'Sociedad', 'Periodismo'][Math.floor(Math.random() * 5)],
  categoryEn: ['Culture', 'Technology', 'Literature', 'Society', 'Journalism'][Math.floor(Math.random() * 5)],
  image: `/placeholder.svg`,
  slug: `el-arte-de-la-escritura-en-la-era-digital-${i + 1}`,
}));

export const getFeaturedArticles = (): Article[] => {
  return articlesData.slice(0, 3);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find(article => article.slug === slug);
};

export const getArticleCategories = (): string[] => {
  return [...new Set(articlesData.map(article => article.category))];
};

export const getArticleCategoriesEn = (): string[] => {
  return [...new Set(articlesData.map(article => article.categoryEn))];
};
