
export interface PressItem {
  id: number;
  title: string;
  titleEn: string;
  publication: string;
  date: string;
  summary: string;
  summaryEn: string;
  link: string;
  image: string;
  type: 'interview' | 'mention' | 'review';
  typeEn: 'interview' | 'mention' | 'review';
}

export const pressData: PressItem[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Gustavo Ng analiza la influencia de la cultura china en Latinoamérica ${i + 1}`,
  titleEn: `Gustavo Ng analyzes the influence of Chinese culture in Latin America ${i + 1}`,
  publication: ['La Nación', 'Clarín', 'Página/12', 'Infobae', 'Télam'][Math.floor(Math.random() * 5)],
  date: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
  summary: `Una entrevista en profundidad sobre los puntos de contacto entre la cultura oriental y occidente, y cómo estos influyen en la sociedad contemporánea.`,
  summaryEn: `An in-depth interview about the points of contact between Eastern and Western culture, and how these influence contemporary society.`,
  link: '#',
  image: `/placeholder.svg`,
  type: ['interview', 'mention', 'review'][Math.floor(Math.random() * 3)] as 'interview' | 'mention' | 'review',
  typeEn: ['interview', 'mention', 'review'][Math.floor(Math.random() * 3)] as 'interview' | 'mention' | 'review',
}));

export const getFeaturedPress = (): PressItem[] => {
  return pressData.slice(0, 3);
};

export const getPressInterviews = (): PressItem[] => {
  return pressData.filter(item => item.type === 'interview');
};

export const getPressMentions = (): PressItem[] => {
  return pressData.filter(item => item.type === 'mention' || item.type === 'review');
};
