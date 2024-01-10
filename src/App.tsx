import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { TProduct } from "./types/TProduct";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

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
              className="max-w-40"
              size="md"
              onClick={() => setIsOpen(true)}
            >
              Create Product
            </Button>
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="cards  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
        </main>
      </div>
    </section>
  );
}

export default App;
