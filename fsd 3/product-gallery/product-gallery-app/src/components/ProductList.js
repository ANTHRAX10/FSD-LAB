import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Noise-cancelling over-ear headphones with 20-hour battery life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCpYYt-9amzZ-5Iktq2gq9QmtFfeAsJxL_g&s",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 89.99,
    description: "Track your fitness and get notifications on the go.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj_8S6Q6BxUNHQWJJwKKZfHy5OB0WfidHjw&s",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 49.99,
    description: "Compact design with powerful, crystal-clear sound.",
    image: "https://rukminim2.flixcart.com/image/300/300/xif0q/speaker/mobile-tablet-speaker/u/f/b/x594-waterproof-bluetooth-speaker-outdoor-wireless-speaker-with-original-imahdydchqmrbgsv.jpeg",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39.99,
    description: "Ergonomic design with RGB lighting and fast response.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bTupok6h1gepSl9f1EXBh_natP_oB4oRLg&s",
  },
];

function ProductList({ onAddToCart }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
