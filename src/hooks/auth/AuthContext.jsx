import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => {

    const authVariables = {
        isLoggedIn:localStorage.getItem("isLoggedIn") || false,
        token:  localStorage.getItem("token") || null,
    }
    const authReducerFunction = (state, action) => {
        switch (action.type) {
            case "SIGNUP":
                return { ...state, isLoggedIn:true , token: action.payload,}
            case "LOGOUT":
                localStorage.clear()
                return { ...state, isLoggedIn: false }
            case "LOGIN":
                return { ...state, isLoggedIn:true , token: action.payload,}
            default:
                return { ...state }
        }
    }
    const [authState, authDispatch] = useReducer(authReducerFunction, authVariables)
    useEffect(() => {
        localStorage?.getItem("token")
        localStorage?.getItem("isLoggedIn")
        JSON.parse(localStorage?.getItem("userDetails"))
    },[localStorage])
    return <AuthContext.Provider value={{ authState, authDispatch }}>
        {children}
    </AuthContext.Provider>
}