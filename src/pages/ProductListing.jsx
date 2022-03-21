import { ListingProducts, Navbar, ProductFilter } from "../components"
import "../styles/Listing.css"


export const ProductListing = () => {
    return <div>
        <Navbar />
        <ProductFilter />
        <ListingProducts />
    </div>
}