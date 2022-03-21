import { useState, useEffect } from "react";
import axios from "axios";
export const useProducts=({categoryName})=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function fetchData(){
        try{
            const {data}=await axios.get("/api/products");
            const {products}=data;
         setProducts(products.filter((product)=>{
           return  categoryName?product.categoryName.includes(categoryName):product
         }));
        }catch(err){
            console.log(err);
        }
     }
     fetchData();
    },[])
    return {products,setProducts}
}