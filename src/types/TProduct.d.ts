export type TProduct = {
  id: number;
  title: string;
  thumbnail: TImage;
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
type TImage = {
  src: string;
  alt: string;
};
