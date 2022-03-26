
function clearFilterHandler(dispatch) {
    dispatch({ type: "clear" })
}
function discountHandler(e,dispatch) {
    dispatch({ type: "discount", payload: e.target.value })
}
function priceHighToLowHandler(dispatch) {
    dispatch({ type: "price_sort", payload: "low_to_high" })

}
function priceLowToHighHandler(dispatch) {
    dispatch({ type: "price_sort", payload: "high_to_low" })
}

function sortByCategoryHandler(e, dispatch) {
    dispatch({ type: "sort", payload: e.target.value })
}
function priceSortHandler(e, dispatch) {
    dispatch({ type: "price", payload: Number(e.target.value) })
}
function stars4Handler(dispatch) {
    dispatch({ type: "rating4", payload: "stars4" })
}
function stars3Handler(dispatch) {
    dispatch({ type: "rating3", payload: "stars3" })
}
function stars2Handler(dispatch) {
    dispatch({ type: "rating2", payload: "stars2" })
}
function stars1Handler(dispatch) {
    dispatch({ type: "rating1", payload: "stars1" })
}

export {
    clearFilterHandler, discountHandler, priceHighToLowHandler, priceLowToHighHandler, sortByCategoryHandler, priceSortHandler, stars4Handler, stars3Handler, stars2Handler, stars1Handler
}