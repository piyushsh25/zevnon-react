import { useParams } from "react-router-dom"
import { ProductBody } from "../components/Single_Product/ProductBody";
import { useProducts } from "../hooks";
import { Navbar } from "../components/navigation/navbar"
import { useWishContext } from "../hooks/wishList/wish-context";
import { useAuth } from "../hooks/auth/AuthContext";
export const ProductPage = () => {
    const { productId } = useParams();
    const { products } = useProducts();
   
    function findProductDetails(products, productId) {
        return products.find((product) => product._id === productId)
    }
    
    const productDetails = findProductDetails(products, productId)

    return <>
        <Navbar />
        <ProductBody {...productDetails} />
    </>
}