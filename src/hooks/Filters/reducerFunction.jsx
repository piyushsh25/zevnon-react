export function reducerFunction(state, action) {
    switch (action.type) {
        case "sort":
            return { ...state, sortBy: action.payload }
        case "rating1":

            return { ...state, stars1: !state.stars1 }
        case "rating2":

            return { ...state, stars2: !state.stars2 }
        case "rating3":

            return { ...state, stars3: !state.stars3 }
        case "rating4":

            return { ...state, stars4: !state.stars4 }
        case "price":

            return { ...state, priceSelector: action.payload }
        case "discount":
       
            return { ...state, discountValue: action.payload }
        case "clear":
            return {
                ...state,
                sortBy: null,
                priceSelector: null,
                discountValue: 0,
                priceHighLow: null,
                stars1: false,
                stars2: false,
                stars3: false,
                stars4: false,
                
            }
        case "price_sort":
            return { ...state, priceHighLow: action.payload }

        default:
            return state
    }
}