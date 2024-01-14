import { v4 as uuid } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
// import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { TCategory, TProduct } from "./types";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Form from "./components/ui/Form";
import { CATEGORIES, COLORS, formInputsList, productsList } from "./data";
import { DEFAULT_ERRORS, DEFAULT_PRODUCT } from "./constants";
import { productSchema } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import SelectedColor from "./components/SelectedColor";
import Select from "./components/ui/Select";

function App() {
  /* ------ States ------*/
  const [products, setProducts] = useState<TProduct[]>(productsList);
  const [currentProduct, setCurrentProduct] =
    useState<TProduct>(DEFAULT_PRODUCT);
  const [isOpen, setIsOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [productData, setProductData] = useState<TProduct>(DEFAULT_PRODUCT);
  const [selected, setSelected] = useState<TCategory>(CATEGORIES[0]);

  /* ------ Handlers ------*/
  const onCancel = () => {
    setErrors(DEFAULT_ERRORS);
    setProductData(DEFAULT_PRODUCT);
    setSelectedColors([]);
    setIsOpen(false);
  };
  const onEditCancel = () => {
    setModalEdit(false);
  };
  const onDeleteCancel = () => {
    setModalDelete(false);
  };
  const deleteConfirmation = () => {
    setProducts((prev) => prev.filter((item) => item.id !== currentProduct.id));
    setModalDelete(false);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = productSchema(productData);
    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...productData,
        colors: selectedColors,
        category: selected,
        id: uuid(),
      },
      ...prev,
    ]);
    onCancel();
  };
  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = productSchema(productData);
    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }
    // Add new product

    setProducts((prev) => [
      {
        ...productData,
        colors: selectedColors,
        category: selected,
        id: uuid(),
      },
      ...prev,
    ]);
    onCancel();
  };

  /* ------ Rendering ------*/
  const renderProducts = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setCurrentProduct={setCurrentProduct}
      setModalEdit={setModalEdit}
      setModalDelete={setModalDelete}
    />
  ));
  const renderColors = COLORS.map(
    (color) =>
      !selectedColors?.includes(color) && (
        <CircleColor
          key={color}
          color={color}
          className="cursor-pointer"
          onClick={() => {
            setSelectedColors((prev) => [...prev, color]);
          }}
        />
      )
  );
  const renderSelectedColors = selectedColors.map(
    (color) =>
      COLORS.includes(color) && (
        <SelectedColor
          key={color + "test"}
          color={color}
          onClick={() => {
            setSelectedColors((prev) =>
              prev.filter((prevColor) => prevColor !== color)
            );
          }}
        />
      )
  );
  const formList = formInputsList.map((input) => (
    <Form.Group key={input.id}>
      <Form.Label id={input.id}>{input.label}</Form.Label>
      <Form.Input
        type={input.type}
        name={input.name}
        id={input.id}
        title={input.label}
        onChange={handleChange}
        value={productData[input.name]}
      />
      <ErrorMessage message={errors[input.name]} />
    </Form.Group>
  ));
  const renderModal = (
    <Modal title="Create Product" setIsOpen={setIsOpen} isOpen={isOpen}>
      <Form onSubmit={handleSubmit}>
        {formList}
        <Select selected={selected} setSelected={setSelected} />
        {renderSelectedColors.length !== 0 && (
          <div className="flex items-center flex-wrap gap-1 mb-2 mt-4">
            {renderSelectedColors}
          </div>
        )}
        <div className="flex items-center flex-wrap space-x-1 mt-4">
          {renderColors}
        </div>
        <div className="mt-4 flex gap-4">
          <Button
            type="button"
            bg="bg-red-700"
            outline="outline-red-400"
            size="md"
            className="hover:bg-red-900 hover:red-indigo-900"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            bg="bg-indigo-700"
            outline="outline-indigo-400"
            size="md"
            className="hover:bg-indigo-900 hover:outline-indigo-900"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
  const renderEditModal = (
    <Modal title="Edit Product" isOpen={modalEdit} setIsOpen={setModalEdit}>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group key={"title"}>
          <Form.Label id={"title"}>{"title"}</Form.Label>
          <Form.Input
            type={"text"}
            name={"title"}
            id={"title"}
            title={"title"}
            onChange={handleEditChange}
            value={currentProduct["title"]}
          />
          {/* <ErrorMessage message={errors[input.name]} /> */}
        </Form.Group>
        <Select selected={selected} setSelected={setSelected} />
        {renderSelectedColors.length !== 0 && (
          <div className="flex items-center flex-wrap gap-1 mb-2 mt-4">
            {renderSelectedColors}
          </div>
        )}
        <div className="flex items-center flex-wrap space-x-1 mt-4">
          {renderColors}
        </div>
        <div className="mt-4 flex gap-4">
          <Button
            type="button"
            bg="bg-red-700"
            outline="outline-red-400"
            size="md"
            className="hover:bg-red-900 hover:red-indigo-900"
            onClick={onEditCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            bg="bg-indigo-700"
            outline="outline-indigo-400"
            size="md"
            className="hover:bg-indigo-900 hover:outline-indigo-900"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
  const renderDeleteModal = (
    <Modal
      title="Delete Product"
      isOpen={modalDelete}
      setIsOpen={setModalDelete}
    >
      <div>
        <h3 className="text-lg font-medium">Are You Sure!</h3>
        <p className="flex gap-2">
          You want to delete
          <span className="text-red-900">{currentProduct.title}</span> ?
        </p>
      </div>
      <div className="mt-4 flex gap-4">
        <Button
          type="button"
          bg="bg-red-700"
          outline="outline-red-400"
          size="md"
          className="hover:bg-red-900 hover:red-indigo-900"
          onClick={onDeleteCancel}
        >
          Cancel
        </Button>
        <Button
          type="button"
          bg="bg-indigo-700"
          outline="outline-indigo-400"
          size="md"
          onClick={deleteConfirmation}
          className="hover:bg-indigo-900 hover:outline-indigo-900"
        >
          Agree
        </Button>
      </div>
    </Modal>
  );

  return (
    <main className="container">
      {/* <header> */}
      {/* <Navbar name="login" path="/login" /> build using sass */}
      {/* </header> */}
      <main>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl lg:text-4xl  font-bold">
            Product <span className="text-indigo-700 ">List</span>
          </h2>
          <Button
            bg="bg-indigo-700"
            outline="outline-indigo-700"
            className="max-w-32 md:max-w-40 px-0 hover:bg-indigo-900 hover:outline-indigo-900"
            size="md"
            onClick={() => setIsOpen(true)}
          >
            Create Product
          </Button>
        </div>
        {products.length === 0 ? (
          <div className="grid place-content-center h-[80vh]">
            <h5>There are no products to display</h5>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
            {renderProducts}
          </div>
        )}

        {/* Modals */}
        {renderModal}
        {renderEditModal}
        {renderDeleteModal}
      </main>
    </main>
  );
}

export default App;
