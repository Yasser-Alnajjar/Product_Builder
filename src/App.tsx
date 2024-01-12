import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { TProduct } from "./types";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { fromProductList } from "./data";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="cards  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

  const renderModal = (
    <Modal
      title="Create Product"
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      submitButtons={
        <>
          <Button
            type="button"
            bg="bg-red-700"
            outline="outline-red-400"
            size="md"
            className="hover:bg-red-900 hover:red-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            bg="bg-indigo-700"
            outline="outline-indigo-400"
            size="md"
            className="hover:bg-indigo-900 hover:outline-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Submit
          </Button>
        </>
      }
    >
      <form>
        {fromProductList.map((input) => (
          <Input
            type={input.type}
            name={input.name}
            id={input.id}
            title={input.label}
          />
        ))}
      </form>
    </Modal>
  );

  return (
    <section>
      <div className="container">
        <header>
          <Navbar name="login" path="/login" />
        </header>
        <main>
          <div className="flex justify-between items-center my-4">
            <h2 className="text-2xl font-bold">
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
          {renderProducts}
          {renderModal}
        </main>
      </div>
    </section>
  );
}

export default App;
