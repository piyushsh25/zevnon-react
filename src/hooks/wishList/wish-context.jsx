import axios from "axios";
import { createContext ,useContext} from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

const WishContext=createContext();
export const useWishContext=()=>useContext(WishContext);

export const WishProvider=({children})=>{
    const {authState}=useAuth();
// const [wishState,wishDispatch]=useReducer(wishReducerFunction,{
// wishCount:0,
// addToWishListMessage:false,
// inWishlist:false
// })
const [wishItems,setWishItems]=useState([])
const addToWishList=async(product)=>{
    try{
        const addToishListResponse=await axios.post("/api/user/wishlist",
    {product},
    {
        headers:{
            authorization: authState.token
        }
    }
    )
    setWishItems(addToishListResponse.data.wishlist)
    }catch(err){
        console.log(err)
    }
}

const removeFromWishList=async(product)=>{
    const {_id :productId}=product;
    try{
        const removeFromWishResponse=await axios.delete(`/api/user/wishlist/${productId}`,
        {
            headers:{
                authorization:authState.token
            }
        })
        setWishItems(removeFromWishResponse.data.wishlist)
    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
        (async ()=>{
            if(authState.isLoggedIn){
             try{
                const response= await axios.get("/api/user/wishlist",
                {
                        headers:{
                            authorization: authState.token
                        }
                }
                )
                setWishItems(response.data.wishlist)
             }catch(err){
                 console.log(err)
             }
            }else{
                setWishItems([])
            }
        }

        )()
},[authState.isLoggedIn])
    return <WishContext.Provider value={{addToWishList,wishItems,removeFromWishList}}>
        {children}
    </WishContext.Provider>
}