import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./hooks/Filters/product-context";
import { CartProvider } from "./hooks/cart/cart-context";
import { WishProvider } from "./hooks/wishList/wish-context";
import { AuthProvider } from "./hooks/auth/AuthContext";
import { SignupProvider } from "./hooks/signup/signup-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishProvider>
            <SignupProvider>
              <App />
            </SignupProvider>
          </WishProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
