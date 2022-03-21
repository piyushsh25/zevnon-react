
import { useState } from "react";

import { useSortedProduct } from "../../hooks/Filters/product-context";

export const ProductFilter = () => {
const {state,dispatch}=useSortedProduct();

const [filterMenu, showFilterMenu] = useState(true)

return (<div className="body-container">
    <div className="side-bar">
        {filterMenu ? <div className="filter-div-lg">
            <div className="h4 filter-header">
                <div>Filters</div>
                <div className="clear-filter"
                    onClick={() => dispatch({ type: "clear" })}
                >Clear</div>
            </div>
            <div className="discount-percentage">
                <div className="h5">Discount %</div>

                <input step="25" type="range" min="0" max="90"
                    list="tickmarks"
                    checked={state.discountValue}
                    onClick={(e) => dispatch({ type: "discount", payload: e.target.value })}
                />
                <datalist id="tickmarks">
                    <option value="0">0</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                </datalist>
                <label className="filter-price">
                    <p id="price-max">0%</p>
                    <p id="price-min">25%</p>
                    <p id="price-mid">50%</p>
                    <p id="price-max">75%</p>
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
                        onClick={() => dispatch({ type: "price_sort", payload: "low_to_high" })}
                    />
                    <label className="category" htmlFor="price_sort">Low to high</label>
                </p>
                <p>
                    <input className="category" type="radio" id="price_sort" name="price_sort" value="price_sort"
                        checked={state.priceHighLow === "high_to_low"}
                        onClick={() => dispatch({ type: "price_sort", payload: "high_to_low" })}
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
                        name="category" value="men"
                        checked={state.sortBy === "men-clothing"}
                        onClick={() => dispatch({ type: "sort", payload: "men-clothing" })}
                    />
                    <label className="category" htmlFor="men">Men Clothing</label>
                </p>
                <p>
                    <input className="category" type="radio" id="footwear" name="category" value="footwear"
                        checked={state.sortBy === "footwear"}
                        onClick={() => dispatch({ type: "sort", payload: "footwear" })}
                    />
                    <label className="category" htmlFor="footwear">footwear</label>
                </p>
                <p>
                    <input className="category" type="radio" id="bags" name="category" value="bags"
                        checked={state.sortBy === "bagpack"}
                        onClick={() => dispatch({ type: "sort", payload: "bagpack" })}
                    />
                    <label className="category" htmlFor="kids">BagPacks</label>
                </p>
                <p>
                    <input className="category" type="radio" id="electronics" name="category" value="electronics"
                        checked={state.sortBy === "electronics"}
                        onClick={() => dispatch({ type: "sort", payload: "electronics" })}
                    />
                    <label className="category" htmlFor="electronics">Electronics</label>
                </p>

            </div>
            <div className="price-selector">
                <div className="h5">Price</div>
                <p>
                    <input type="radio"
                        checked={state.priceSelector === 499}
                        onClick={() => dispatch({ type: "price", payload: 499 })}
                    />
                    <label className="price-container">499+</label>
                </p>
                <p>
                    <input type="radio"
                        checked={state.priceSelector === 1999}
                        onClick={() => dispatch({ type: "price", payload: 1999 })}
                    />
                    <label className="price-container">1999+</label>
                </p>
                <p>
                    <input type="radio"
                        checked={state.priceSelector === 3599}
                        onClick={() => dispatch({ type: "price", payload: 3599 })}
                    />
                    <label className="price-container">3599+</label>
                </p>
                <p>
                    <input type="radio"
                        checked={state.priceSelector === 4000}
                        onClick={() => dispatch({ type: "price", payload: 4000 })}
                    />
                    <label className="price-container">4000+</label>
                </p>
            </div>
            <div className="rating-selector">
                <div className="h5">Rating</div>
                <p>
                    <input type="checkbox"
                        checked={state.stars4}
                        onClick={() => dispatch({ type: "rating4", payload: "stars4" })}
                    />
                    <label className="rating-container">4 Stars and above</label>
                </p>
                <p>
                    <input type="checkbox"
                        checked={state.stars3}
                        onClick={() => dispatch({ type: "rating3", payload: "stars3" })}
                    />
                    <label className="rating-container">3 Stars and above</label>
                </p>
                <p>
                    <input type="checkbox"
                        checked={state.stars2}
                        onClick={() => dispatch({ type: "rating2", payload: "stars2" })}
                    />
                    <label className="rating-container">2 Stars and above</label>
                </p>
                <p>
                    <input type="checkbox"
                        checked={state.stars1}
                        onClick={() => dispatch({ type: "rating1", payload: "stars1" })}
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