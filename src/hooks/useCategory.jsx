import { useState, useEffect } from "react";
import axios from "axios";
export const useCategory=()=>{
const [categories,setCategories]=useState([])
useEffect(()=>{
    async function fetchData(){
    try{
        const {data}=await axios.get("/api/categories");
        const {categories}=data;
     setCategories(categories)
    }catch(err){
        console.log(err);
    }

 }
 fetchData();
},[])
return {categories,setCategories}
}