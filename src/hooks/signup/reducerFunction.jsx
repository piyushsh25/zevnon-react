export function reducerSignupFucntion(state, action) {
    switch (action.type) {
        case "password":
            return { ...state, showPassword: !state.showPassword }
        case "checkPassword":
            return { ...state, checkPassword: action.payload }
        case "checkFinalPassword":
            return { ...state, checkFinalPassword: action.payload }
        case "name":
            return { ...state, name: action.payload }
        case "email":
            return { ...state, email: action.payload }
        case "clear":
            return {
                ...state, email: "",
                showPassword: false,
                checkPassword: "",
                checkFinalPassword: "",
                name: ""
            }
        default:
            return state
    }
}