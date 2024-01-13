export type TProduct = {
  id?: string | undefined;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  colors: string[];
  category: TCategory;
};
export type TSaveProduct = {
  title: string;
  thumbnail: string;
  description: string;
  price: string;
};

type TCategory = {
  name: string;
  src: string;
};
export type TFormInput = {
  id: string;
  name: "title" | "thumbnail" | "description" | "price";
  label: string;
  type: string;
};
