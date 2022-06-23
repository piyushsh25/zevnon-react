import { createContext, useReducer, useContext,useState } from "react";
import { useProducts } from "../index";
import { filterProducts } from "./categoryFilter";
import { discountedItems } from "./discountPercentage-filter";
import { pricedProducts } from "./priceFilter";
import { reducerFunction } from "./reducerFunction";
import { SortedProducts } from "./sort_priceFilter";
import { starredProducts } from "./starredProduct";

const reducerValues = {
    sortBy: null,
    priceSelector: null,
    discountValue: 0,
    priceHighLow: null,
    stars1: false,
    stars2: false,
    stars3: false,
    stars4: false,
    filterMenu:true
}
const ProudctContext = createContext();
export const useSortedProduct = () => useContext(ProudctContext)
export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducerFunction, reducerValues)
    const { products } = useProducts() ;
    const filteredProducts = filterProducts(products, state.sortBy)
    const starProducts = starredProducts(filteredProducts, state)
    const priceProducts = pricedProducts(starProducts, state.priceSelector)
    const discountItems = discountedItems(priceProducts, state.discountValue)
    const sortPriceHighLow = SortedProducts(discountItems, state.priceHighLow)
    return <ProudctContext.Provider value={{ state, dispatch, sortPriceHighLow }}>
        {children}
    </ProudctContext.Provider>
}
