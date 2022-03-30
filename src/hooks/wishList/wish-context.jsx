import { useReducer,createContext ,useContext} from "react";

const WishContext=createContext();
export const useWishContext=()=>useContext(WishContext);

export const WishProvider=({children})=>{
    function wishReducerFunction(state,action){
 
      switch (action.type){
          case "wishlist":
              let productInWishList=false;
              let updatedWishList=state.wishItems.map((items)=>{
                  if(action.payload.id===items.id){
                      productInWishList=true;
                      return items;
                  }
                  return items;
              })
              const {id,title,img,price,discountedPrice}=action.payload
              if(!productInWishList){
                  updatedWishList=[...state.wishItems,{id,title,img,price,discountedPrice}]
                  return {...state,wishCount:state.wishCount+1,wishItems:updatedWishList}
              }
              
              return {...state}
            case "remove":
                const removedItems=state.wishItems.filter((items)=> {
                    if (items.id===action.payload.id){
                        return  action.payload!==items
                    }
                    return items
                })
                return {...state,wishItems:removedItems,wishCount:state.wishCount-1}
         default:
             return {...state}
      }
    }
let addToishListMessage;
const [wishState,wishDispatch]=useReducer(wishReducerFunction,{
wishCount:0,
wishItems:[]
})
    return <WishContext.Provider value={{wishState,wishDispatch,addToishListMessage}}>
        {children}
    </WishContext.Provider>
}