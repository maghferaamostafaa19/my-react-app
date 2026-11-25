import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Home from "./components/Pages/home";
import Movies from "./components/Pages/movise";
import Notfound from "./components/Pages/Notfound";
import { Routes, Route, Navigate } from "react-router-dom";

const initialProducts = [
  { id: 0, name: "shipcy", price: 100, items: 1 },
  { id: 1, name: "pepsi", price: 150, items: 1 },
  { id: 2, name: "molto", price: 200, items: 1 },
  { id: 3, name: "cigaretes", price: 250, items: 1 },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const increment = (productID) =>
    setProducts((current) =>
      current.map((product) =>
        product.id === productID
          ? { ...product, items: product.items + 1 }
          : product,
      ),
    );
  const decrement = (productID) =>
    setProducts((current) =>
      current.map((product) =>
        product.id === productID
          ? { ...product, items: Math.max(1, product.items - 1) }
          : product,
      ),
    );
  const removeProduct = (productID) =>
    setProducts((current) =>
      current.filter((product) => product.id !== productID),
    );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart
                products={products}
                increment={increment}
                decrement={decrement}
                removeProduct={removeProduct}
                emptyCart={() => setProducts([])}
                resetCart={() => setProducts(initialProducts)}
              />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;


