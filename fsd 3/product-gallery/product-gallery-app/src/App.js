import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} />
      <main className="main-section">
        <h1 className="heading">🛍️ Product Gallery</h1>
        <ProductList onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;
