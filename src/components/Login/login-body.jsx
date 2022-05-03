import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth/AuthContext";
import { LoginSubmitHandler } from "../../hooks/auth/Login-SubmitHandler";


import { useSignup } from "../../hooks/signup/signup-context";

export const LoginForm = () => {
    const {authDispatch}=useAuth();
    const { signupState, signupDispatch } = useSignup()
    const LoginButton = async (email,password,authDispatch) => {
        await LoginSubmitHandler(email, password,authDispatch)
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

                    {signupDispatch.showPassword ? <i onClick={() => signupDispatch({ type: "password" })} className="fas fa-eye"></i>
                        : <i onClick={() => signupDispatch({ type: "password" })} className="fas fa-eye-slash"></i>}
                </div>
                <button
                    onClick={() => LoginButton(signupState.email, signupState.checkPassword,authDispatch)}
                    className="submit"
                    id="submit" >Login</button>
                <div className="change-method"><Link to="/sign-up">New here? signup Instead</Link></div>
            </div>
        </div>
    </div>
}