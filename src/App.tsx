import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./App.scss";
// import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { TProduct, TSaveProduct } from "./types";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Form from "./components/ui/Form";
import { formInputsList } from "./data";
import { DEFAULT_PRODUCT } from "./constants";
import { productSchema } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  /* ------ States ------*/
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    thumbnail: "",
    price: "",
  });
  const [productData, setProductData] = useState<TProduct>(DEFAULT_PRODUCT);
  /* ------ Request API ------*/
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:9000/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };
  const AddNewProduct = async (data: TSaveProduct) => {
    try {
      await fetch("http://localhost:9000/products", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsOpen(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ------ Handlers ------*/
  const onCancel = () => {
    setIsOpen(false);
    setProductData(DEFAULT_PRODUCT);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
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
    // AddNewProduct(productData);
    console.log("success");
  };

  /* ------ Rendering ------*/
  const renderProducts = loading ? (
    <h2>Loading...</h2>
  ) : (
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
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

  return (
    <main className="container">
      {/* <header> */}
      {/* <Navbar name="login" path="/login" /> build using sass */}
      {/* </header> */}
      <main>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-4xl font-bold">
            Product <span className="text-indigo-700 ">List</span>
          </h2>
          <Button
            bg="bg-indigo-700"
            outline="outline-indigo-700"
            className="max-w-40 hover:bg-indigo-900 hover:outline-indigo-900"
            size="md"
            onClick={() => setIsOpen(true)}
          >
            Create Product
          </Button>
        </div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
          {renderProducts}
        </div>
        {renderModal}
      </main>
    </main>
  );
}

export default App;
