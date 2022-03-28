import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./hooks/Filters/product-context";
import { CartProvider } from "./hooks/cart/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
