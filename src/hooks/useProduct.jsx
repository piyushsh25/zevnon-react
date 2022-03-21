import { useState, useEffect } from "react";
import axios from "axios";
export const useProducts=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function fetchData(){
        try{
            const {data}=await axios.get("/api/products");
            const {products}=data;
         setProducts(products.filter((product)=>{
           return product
         }));
        }catch(err){
            console.log(err);
        }
     }
     fetchData();
    },[])
    return {products,setProducts}
}