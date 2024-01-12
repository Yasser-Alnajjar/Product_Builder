export type TProduct = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  key: number;
  colors: string[];
  category: TCategory;
};

type TCategory = {
  name: string;
  src: string;
  alt: string;
};
export type TProductList = {
  id: string;
  name: string;
  label: string;
  type: string;
};
