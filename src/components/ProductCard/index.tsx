import { TProduct } from "../../types/TProduct";
import { sliceText } from "../../utils";
import Image from "../Image";
import Button from "../ui/Button";
type TProps = {
  product: TProduct;
};
export default function ProductCard({ product }: TProps) {
  const { title, description, thumbnail, price, colors, category } = product;

  return (
    <div className="max-w-sm mx-auto md:mx-0 border border-slate-200 rounded-md p-2">
      <Image
        src={thumbnail.src}
        alt={thumbnail.alt}
        className="h-52 w-full rounded-md lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{sliceText(title, 20)}</h3>
      <p className="text-xs text-gray-500 break-words min-h-10">
        {sliceText(description)}
      </p>
      <div className="flex items-center gap-2 my-2">
        {colors.length ? (
          colors?.map((color, index) => {
            return (
              <span
                key={index}
                className="w-5 h-5 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              />
            );
          })
        ) : (
          <span className="text-xs text-gray-500">No color selected</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-indigo-700">${price}</span>
        <Image
          src={category.src}
          alt={category.alt}
          className="object-bottom object-cover rounded-full h-10 w-10"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button bg="bg-indigo-700">Edit</Button>
        <Button bg="bg-red-700">Delete</Button>
      </div>
    </div>
  );
}
