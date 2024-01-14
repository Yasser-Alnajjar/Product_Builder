export type TProduct = {
  id?: string | number | undefined;
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

export type TCategory = {
  id?: string;
  name: string;
  image: string;
};
export type TFormInput = {
  id: string;
  name: "title" | "thumbnail" | "description" | "price";
  label: string;
  type: string;
};
