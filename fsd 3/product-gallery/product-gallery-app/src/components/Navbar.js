import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>ShopEasy</h2>
      <span>🛒 Cart: {cartCount}</span>
    </nav>
  );
}

export default Navbar;
