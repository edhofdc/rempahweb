
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  benefits?: string[];
  usage?: string;
}

export enum Category {
  BUBUK = 'Bubuk',
  KERING = 'Kering',
  BASAH = 'Basah',
  BIJI = 'Biji-bijian',
  HERBAL = 'Herbal'
}
