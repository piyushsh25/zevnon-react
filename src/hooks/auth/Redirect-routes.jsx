import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext";

export const RedirectRoute = () => {
    const { authState } = useAuth();
    const location=useLocation()
    const toNavigatePath=location?.state?.from?.pathname || "/";
    return (
        !authState.isLoggedIn ?
            <Outlet/> : <Navigate to={toNavigatePath} replace/>)
}