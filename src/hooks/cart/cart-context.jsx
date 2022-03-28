import { createContext, useContext } from "react";
import { useReducer } from "react";
import { reducerFunction } from "./cart-controllers";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)
export function CartProvider({ children }) {
 
    const [state,dispatch]=useReducer(reducerFunction,{
        totalPrice:0,
        cartItems:([]),cartCount:0})
    return <CartContext.Provider value={{ state,dispatch }}>
        {children}
    </CartContext.Provider>
}