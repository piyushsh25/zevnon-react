import "../../styles/HomeBanner.css"
import { Link } from "react-router-dom";
import { clearFilterHandler, useSortedProduct } from "../../hooks/Filters";
export const HomeBanner = () => {
  const {dispatch}=useSortedProduct();
    return <div className="body-div">
        <div className="image-body">
            <img className="img-responsive" src={require("../../assets/main-img.png")} alt="alt-text-img" />
        </div>
        <div className="body-div-content h3">
            Great stores. Great choices.
        </div>
        <div className="body-div-content h3">
      

            <Link to="/products"  onClick={()=>clearFilterHandler(dispatch)}>Shop Products</Link>
        </div>
    </div>
}