
import { useState } from "react";
import { clearFilterHandler, discountHandler, priceHighToLowHandler, priceLowToHighHandler, priceSortHandler, sortByCategoryHandler, stars1Handler, stars2Handler, stars3Handler, stars4Handler, useSortedProduct } from "../../hooks/Filters";

export const ProductFilter = () => {
    const { state,dispatch } = useSortedProduct();

    const [filterMenu, showFilterMenu] = useState(true)
    return (<div className="body-container">
        <div className="side-bar">
            {filterMenu ? <div className="filter-div-lg">
                <div className="h4 filter-header">
                    <div>Filters</div>
                    <div className="clear-filter"
                        onClick={()=>clearFilterHandler(dispatch)}
                    >Clear</div>
                </div>
                <div className="discount-percentage">
                    <div className="h5">Discount Price</div>

                    <input step="25-" type="range" min="0" max="1000"
                        list="tickmarks"
                        checked={state.discountValue}
                        onClick={(e)=>discountHandler(e,dispatch)}
                    />
                    <datalist id="tickmarks">
                        <option value="0">0</option>
                        <option value="25">250</option>
                        <option value="50">500</option>
                        <option value="75">750</option>
                    </datalist>
                    <label className="filter-price">
                        <p id="price-max">0</p>
                        <p id="price-min">250</p>
                        <p id="price-mid">500</p>
                        <p id="price-max">750</p>
                    </label>

                </div>
                <div className="category-selector">
                    <div className="h5">Sort Price</div>
                    <p>
                        <input
                            className="category"
                            type="radio" id="price_sort"
                            name="price_sort" value="price_sort"
                            checked={state.priceHighLow === "low_to_high"}
                            onClick={()=>priceHighToLowHandler(dispatch)}
                        />
                        <label className="category" htmlFor="price_sort">Low to high</label>
                    </p>
                    <p>
                        <input className="category" type="radio" id="price_sort" name="price_sort" value="price_sort"
                            checked={state.priceHighLow === "high_to_low"}
                            onClick={()=>priceLowToHighHandler(dispatch)}
                        />
                        <label className="category" htmlFor="footwear">High to low</label>
                    </p>
                </div>
                <div className="category-selector">
                    <div className="h5">I'm looking for</div>
                    <p>
                        <input
                            className="category"
                            type="radio" id="men"
                            name="category" value="men-clothing"
                            checked={state.sortBy === "men-clothing"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="category" htmlFor="men">Men Clothing</label>
                    </p>
                    <p>
                        <input className="category" type="radio" id="footwear" name="category" value="footwear"
                            checked={state.sortBy === "footwear"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="category" htmlFor="footwear">footwear</label>
                    </p>
                    <p>
                        <input className="category" type="radio" id="bags" name="category" value="bagpack"
                            checked={state.sortBy === "bagpack"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="category" htmlFor="kids">BagPacks</label>
                    </p>
                    <p>
                        <input className="category" type="radio" id="electronics" name="category" value="electronics"
                            checked={state.sortBy === "electronics"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="category" htmlFor="electronics">Electronics</label>
                    </p>

                </div>
                <div className="price-selector">
                    <div className="h5">Price</div>
                    <p>
                        <input type="radio"
                            value="499"
                            checked={state.priceSelector === 499}
                            onClick={(e)=>priceSortHandler(e,dispatch)}
                        />
                        <label className="price-container">499+</label>
                    </p>
                    <p>
                        <input type="radio"
                            value="1999"
                            checked={state.priceSelector === 1999}
                            onClick={(e)=>priceSortHandler(e,dispatch)}
                        />
                        <label className="price-container">1999+</label>
                    </p>
                    <p>
                        <input type="radio"
                            value="3599"
                            checked={state.priceSelector === 3599}
                            onClick={(e)=>priceSortHandler(e,dispatch)}
                        />
                        <label className="price-container">3599+</label>
                    </p>
                    <p>
                        <input type="radio"
                            value="4000"
                            checked={state.priceSelector === 4000}
                            onClick={(e)=>priceSortHandler(e,dispatch)}
                        />
                        <label className="price-container">4000+</label>
                    </p>
                </div>
                <div className="rating-selector">
                    <div className="h5">Rating</div>

                    <p>
                        <input type="checkbox"
                            checked={state.stars4}
                            onClick={()=>stars4Handler(dispatch)}
                        />
                        <label className="rating-container">4 Stars and above</label>
                    </p>
                    <p>
                        <input type="checkbox"
                            checked={state.stars3}
                            onClick={()=>stars3Handler(dispatch)}
                        />
                        <label className="rating-container">3 Stars and above</label>
                    </p>
                    <p>
                        <input type="checkbox"
                            checked={state.stars2}
                            onClick={()=>stars2Handler(dispatch)}
                        />
                        <label className="rating-container">2 Stars and above</label>
                    </p>
                    <p>
                        <input type="checkbox"
                            checked={state.stars1}
                            onClick={()=>stars1Handler(dispatch)}
                        />
                        <label className="rating-container">1 Star and above</label>
                    </p>
                </div>


            </div> : true}
            <div className="filter-div-md" onClick={() => showFilterMenu(!filterMenu)}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </div>)
}