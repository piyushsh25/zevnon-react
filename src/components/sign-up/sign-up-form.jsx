import { Link } from "react-router-dom"
import { SignUpWays } from "./sign-up-ways"
import { useReducer } from "react";
import { reducerSignupFucntion } from "../../hooks/signup/reducerFunction";

export const SignUpForm = () => {
    const stateVariables = {
        showPassword: false,
        checkPassword: null,
        checkFinalPassword: null,
        name: "",
        email: "",

    }
    const [state, dispatch] = useReducer(reducerSignupFucntion, stateVariables)


    return <div className="main-login-container">
        <div className="form-signup-login">
            <div className="form">
                <div className="nav-sign-up">

                    <div className="title-logo header"><i className="fab fa-deezer"></i></div>
                    <div className="title header">
                        <Link to="/">Zevnon</Link>
                    </div>

                </div>
                <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                    value={state.name}
                    placeholder="enter name"
                    required />
                <input
                    className="input"
                    type="email"
                    id="email"
                    onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
                    value={state.email}
                    name="email"
                    placeholder="email-id"
                    required />
                <div className="input-password1">
                    <input
                        className="input"
                        type={!state.showPassword && "password"}

                        onChange={(e) => dispatch({ type: "checkPassword", payload: e.target.value })}
                        id="password"
                        name="password1"
                        placeholder="password" />

                    {state.showPassword ? <i onClick={() => dispatch({ type: "password" })} className="fas fa-eye"></i>
                        : <i onClick={() => dispatch({ type: "password" })} className="fas fa-eye-slash"></i>}
                </div>
                <div>
                    <input
                        className={(state.checkPassword === state.checkFinalPassword) ? "input" : "input error-input"}
                        type="password"
                        onChange={(e) => dispatch({ type: "checkFinalPassword", payload: e.target.value })}
                        id="password1"
                        name="password2"
                        placeholder="confirm password"
                    />

                </div>
                {!(state.checkPassword === state.checkFinalPassword) && <div className="error-message">Password do not match</div>}
                <button
                    className="submit"
                    disabled={!(state.checkPassword === state.checkFinalPassword)}
                    id="submit" >signup</button>
                <div className="change-method"><Link to="/login">Already have an account? Login Instead</Link></div>
            </div>
        </div>
        <SignUpWays />
    </div>
}