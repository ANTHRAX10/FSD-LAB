import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="catalog">
      {products.map(p => (
        <div className="card" key={p._id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}