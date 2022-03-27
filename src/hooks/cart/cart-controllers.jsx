   export function reducerFunction(state, action) {
    switch (action.type) {
        case "addToCartHandler":

            let productPresent = false
            const { id, title, price, discountedPrice } = action.payload;
            let updatedItems = state.cartItems.map((items) => {
                if (items.id === id) {
                    productPresent = true
                    return { ...items, quantity: items.quantity + 1 }
                }
                else {
                    return items
                }
            });
            if (!productPresent) {
                updatedItems = [...state.cartItems, { id, title, price, discountedPrice, quantity: 1 }]
            }
            return {
                ...state, cartCount: state.cartCount + 1, cartItems: updatedItems, totalPrice: state.totalPrice + action.payload.price

            }

        case "incrementHandler":
            let incrementedItems = state.cartItems.map((product) => {

                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity + 1 }
                }
                return product
            })
            return {
                ...state, cartCount: state.cartCount + 1, cartItems: incrementedItems, totalPrice: state.totalPrice + action.payload.price
            }
        case "decrementHandler":
            let decrementedItems = state.cartItems.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity - 1 }
                }
                return product
            })
            return {
                ...state, cartCount: state.cartCount - 1, cartItems: decrementedItems, totalPrice: state.totalPrice - action.payload.price
            }
        case "removeHandler":

            const removedItems = state.cartItems.filter((product) => {
                if (product.id === action.payload.id) {
                    return product !== action.payload
                }
                return product

            })
            return { ...state, cartCount: state.cartCount - action.payload.quantity, cartItems: removedItems, totalPrice: state.totalPrice - (action.payload.quantity * action.payload.price) }



        default:
            return state;
    }
}

