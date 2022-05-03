import { Link, useLocation, useNavigate } from "react-router-dom"
import { SignUpWays } from "./sign-up-ways"
import { useSignup } from "../../hooks/signup/signup-context";
import { SignUpSubmitHandler } from "../../hooks/auth/Signup-SubmitHandler";
import { useAuth } from "../../hooks/auth/AuthContext";

export const SignUpForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { authDispatch } = useAuth()
    const { signupState, signupDispatch } = useSignup();
    const navigateTo = location?.state?.from?.pathname || "/"
    const checkFromData = (signupState.name.split(" ").join().length < 5) || (signupState.checkPassword.length < 8) || (signupState.checkPassword.length < 8) || !(signupState.checkPassword === signupState.checkFinalPassword)
    const SignUpButton = async (signupState,authDispatch) => {
        await SignUpSubmitHandler(signupState,authDispatch);
        navigate(navigateTo)
        signupDispatch({type:"clear"})
    }

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
                    onChange={(e) => signupDispatch({ type: "name", payload: e.target.value })}
                    value={signupState.name}
                    placeholder="enter name"
                    required />
                <input
                    className="input"
                    type="email"
                    id="email"
                    onChange={(e) => signupDispatch({ type: "email", payload: e.target.value })}
                    value={signupState.email}
                    name="email"
                    placeholder="email-id"
                    required />
                <div className="input-password1">
                    <input
                        className="input"
                        type={(!signupState.showPassword && "password") || "text"}
                        onChange={(e) => signupDispatch({ type: "checkPassword", payload: e.target.value })}
                        id="password"
                        name="password1"
                        placeholder="password" />

                    {signupState.showPassword ? <i onClick={() => signupDispatch({ type: "password" })} className="fas fa-eye"></i>
                        : <i onClick={() => signupDispatch({ type: "password" })} className="fas fa-eye-slash"></i>}
                </div>
                <div>
                    <input
                        className={(signupState.checkPassword === signupState.checkFinalPassword) ? "input" : "input error-input"}
                        type="password"
                        onChange={(e) => signupDispatch({ type: "checkFinalPassword", payload: e.target.value })}
                        id="password1"
                        name="password2"
                        placeholder="confirm password"
                    />

                </div>

                {!(signupState.checkPassword === signupState.checkFinalPassword) && <div className="error-message">Password do not match</div>}
                <button
                    onClick={() => SignUpButton(signupState,authDispatch)}
                    className="submit"
                    disabled={checkFromData}
                    id="submit" >signup</button>
                <div className="change-method"><Link to="/login">Already have an account? Login Instead</Link></div>

            </div>
        </div>
        <SignUpWays />
    </div>
}