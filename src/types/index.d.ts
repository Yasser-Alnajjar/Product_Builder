export type TProduct = {
  id?: string | number;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    image: string;
  };
};
export type TProductName = "title" | "thumbnail" | "description" | "price";

export type TCategory = {
  id: string;
  name: string;
  image: string;
};
export type TFormInput = {
  id: string;
  name: TProductName;
  label: string;
  type: string;
};
