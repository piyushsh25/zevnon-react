import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
  return  <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
    </CartContext.Provider>
}