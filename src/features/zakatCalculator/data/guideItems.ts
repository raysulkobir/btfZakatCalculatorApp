import { images } from '@/utils/images'
export type GuideItem = {
  id: 'what' | 'who' | 'whom' | 'faq' | 'cases' | 'benef';
  title: string;
  // optional extras you might add later:
  icon?: any;           // ImageSourcePropType
  route?: string;       // screen name to navigate to
  url?: string;         // external link
};

export const GUIDE_ITEMS: GuideItem[] = [
  { id: 'what',  title: 'What is Zakat?', 'icon': images.zakat },
  { id: 'who',   title: 'Who Pays Zakat?', 'icon': images.paysZakat },
  { id: 'whom',  title: 'Whom to Give Zakat?', 'icon': images.giveZakat },
  { id: 'faq',   title: 'Zakat FAQ', 'icon': images.zakatFAQ },
  { id: 'cases', title: 'Special Cases', 'icon':images.zakatFAQ },
  { id: 'benef', title: 'Benefits of Zakat', 'icon': images.zakatVS },
];
