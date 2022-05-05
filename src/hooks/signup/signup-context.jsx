import { createContext,useContext,useReducer } from "react";
import { reducerSignupFucntion } from "./reducerFunction";

const SignupContext=createContext();
export const useSignup=()=>useContext(SignupContext)
export const SignupProvider=({children})=>{
    const stateVariables = {
        showPassword: false,
        checkPassword: "",
        checkFinalPassword: "",
        name: "",
        email: "",
    }
    const [signupState, signupDispatch] = useReducer(reducerSignupFucntion, stateVariables)
    return <SignupContext.Provider value={{signupState, signupDispatch}}>
        {children}
    </SignupContext.Provider>
}