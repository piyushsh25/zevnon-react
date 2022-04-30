import { Navbar } from "../components/navigation/navbar"
import { WishItems } from "../components/wishList/wishItems";
import "../styles/wishlist.css"
export const WishList = () => {
  return <div>
    <Navbar />
    <WishItems />
  </div>
}