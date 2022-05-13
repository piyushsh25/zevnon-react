import axios from "axios";
import { createContext, useContext } from "react";
import { useReducer, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { reducerFunction } from "./cart-controllers";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)
export function CartProvider({ children }) {
    const { authState } = useAuth();
    const [cartItems, setcartItems] = useState([])
    const [state, dispatch] = useReducer(reducerFunction, {
        totalPrice: 0,
        cartCount: 0
    })


    const addToCartHandler = async (product) => {
        try {
            const addToCartResponse = await axios.post("/api/user/cart",
                { product },
                {
                    headers: {
                        authorization: authState.token
                    }
                }
            )
            setcartItems(addToCartResponse.data.cart)
        } catch (err) {
            console.log(err)
        }
    }
    const removeFromCartHandler = async (product) => {
        const { _id: productId } = product
        try {
            const removeFromCartResponse = await axios.delete(`api/user/cart/${productId}`, {
                headers: {
                    authorization: authState.token,
                },
            })

            setcartItems(removeFromCartResponse.data.cart)
        } catch (err) {
            console.log(err)
        }
    }
    const updateItemHandler = async (productId, type) => {
        try {
            const updateItemResponse = await axios.post(`api/user/cart/${productId}`,
                {
                    action: {
                        type: type
                    }
                },
                {
                    headers: {
                        authorization: authState.token
                    }
                })
            setcartItems(updateItemResponse.data.cart)
        } catch (err) {
            console.log(err)
        }
    }

    const totalCartItemsHandler = (accumulator, currentValue) => {
        return accumulator + currentValue.qty
    }

    const totalPriceHandler = (accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.qty)
    }
    const totalCartItemsCount = cartItems.reduce(totalCartItemsHandler, 0)
    const totalPrice = cartItems.reduce(totalPriceHandler, 0)
    useEffect(() => {
        (async () => {
            if (authState.isLoggedIn) {
                try {
                    const response = await axios.get(`api/user/cart`, {
                        headers: {
                            authorization: authState.token,
                        }
                    })

                    setcartItems(response.data.cart)
                } catch (err) {
                    console.log("err", err)
                }
            } else {
                setcartItems([])
            }
        })()

    }, [authState.isLoggedIn], [cartItems])
    return <CartContext.Provider value={{ state, dispatch, addToCartHandler, cartItems, removeFromCartHandler, updateItemHandler, totalCartItemsCount, totalPrice, setcartItems }}>
        {children}
    </CartContext.Provider>
}