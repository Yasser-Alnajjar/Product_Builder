import { TCategory, TFormInput, TProduct } from "../types";
import { v4 as uuid } from "uuid";

export const productsList: TProduct[] = [
  {
    id: uuid(),
    title: "K-SWISS Shoe",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "350",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#1F8A70",
    ],
    category: {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1659107377449-27ff3997070e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500000",
    colors: [],
    category: {
      name: "Cars",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120000",
    colors: ["#A31ACB", "#FF6E31", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1524275539700-cf51138f679b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    colors: ["#A31ACB", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Clothes",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Converse Shoe",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "350",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#1F8A70",
    ],
    category: {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "2022 BMW GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1558958806-d5088c90f389?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1000000",
    colors: ["#FF0032", "#2563eb", "#FF6E31", "#000000"],
    category: {
      name: "Cars",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Pc Mi2022 3-3",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120000",
    colors: ["#A31ACB", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "PC Desktop",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Pc Mi219 1-3",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    thumbnail:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    colors: ["#CB1C8D", "#000000", "#645CBB"],
    category: {
      name: "PC Desktop",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const formInputsList: TFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "thumbnail",
    name: "thumbnail",
    label: "Product Thumbnail URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const COLORS: string[] = [
  "#a855f7",
  "#2563eb",
  "#A31ACB",
  "#FF6E31",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#FF0032",
  "#820000",
  "#1F8A70",
  "#645CBB",
];

export const CATEGORIES: TCategory[] = [
  {
    id: uuid(),
    name: "Cars",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Clothes",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
