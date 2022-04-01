import { useReducer,createContext ,useContext} from "react";
import { wishReducerFunction } from "./wishlist-controller";

const WishContext=createContext();
export const useWishContext=()=>useContext(WishContext);

export const WishProvider=({children})=>{

const [wishState,wishDispatch]=useReducer(wishReducerFunction,{
wishCount:0,
wishItems:[],
addToishListMessage:false,
inWishlist:false
})
    return <WishContext.Provider value={{wishState,wishDispatch}}>
        {children}
    </WishContext.Provider>
}