import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./hooks/Filters/product-context";
import { CartProvider } from "./hooks/cart/cart-context";
import { WishProvider } from "./hooks/wishList/wish-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
      <WishProvider>
        <App />
        </WishProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
