import { Link } from "react-router-dom";
import { useSortedProduct } from "../../hooks/Filters";
import { sortByCategoryHandler } from "../../hooks/Filters/filterControllers";
import { useCategory } from "../../hooks/useCategory";
import "../../styles/Categories.css"
const Categories=()=>{
    const {dispatch}=useSortedProduct();
   const {categories}=useCategory();
   const productCategoryHandler=(categoryName)=>{
      sortByCategoryHandler(categoryName,dispatch)
   }
    return(   <div className="shopping-section">
          {   categories.map((product)=>{
      return  <div className="card text-overlay-card" key={product.id}> 
          <div className="img-div">
              <img src={`${product.categoryImage}`} alt={`${product.categoryName}`}/>
          </div>
          <div className="text-div">
              <div className="header-top">{product.categoryInfo}</div>
              <div className="header-bottom"> {product.categoryName}</div>
              <div className="description">{product.description.slice(0,100)}...
              </div>
              <ul>
                  <li className="card-icons text-icon">
                  <Link to="/products"
                  onClick={()=>productCategoryHandler(product.categoryName)}
                  >Shop</Link> 
                  </li>
                  <li className="card-icons icons"> <i className="lni lni-share-alt-1"></i></li>
                  <li className="card-icons icons"><i className="lni lni-more-alt"></i></li>
              </ul>
          </div>

      </div>

      })
    
    }  
    </div>
    )
    }
    export {Categories}