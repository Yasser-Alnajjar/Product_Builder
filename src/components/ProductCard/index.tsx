import { TProduct } from "../../types";
import { numberWithCommas, sliceText } from "../../utils";
import CircleColor from "../CircleColor";
import Image from "../Image";
import Button from "../ui/Button";
type TProps = {
  product: TProduct;
  setCurrentProduct: (product: TProduct) => void;
  setModalEdit: (val: boolean) => void;
  setModalDelete: (val: boolean) => void;
};

export default function ProductCard({
  product,
  setCurrentProduct,
  setModalEdit,
  setModalDelete,
}: TProps) {
  const { title, description, thumbnail, price, colors, category } = product;
  /* ------ Rendering ------*/
  const renderProductColors = colors?.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* ------ Handlers ------*/
  const onEdit = () => {
    setCurrentProduct(product);
    setModalEdit(true);
  };
  const onDelete = () => {
    setCurrentProduct(product);
    setModalDelete(true);
  };
  return (
    <div className="w-full max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <Image
        src={thumbnail}
        alt={title}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{sliceText(title, 20)}</h3>
      <p className="text-xs text-gray-500 break-words min-h-10">
        {sliceText(description)}
      </p>
      <div className="flex items-center flex-wrap space-x-1">
        {!colors?.length ? (
          <p className="text-sm text-gray-500">Not Selected colors !</p>
        ) : (
          renderProductColors
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-indigo-700">${numberWithCommas(price)}</span>
        <Image
          src={category?.image}
          alt={category?.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button
          bg="bg-indigo-700"
          outline="outline-indigo-400"
          className="hover:bg-indigo-900 hover:outline-indigo-900"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          bg="bg-red-700"
          outline="outline-red-400"
          className="hover:bg-red-900 hover:outline-red-900"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
