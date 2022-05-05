import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext";

export const RequiresAuth = () => {
    const location = useLocation();
    const { authState } = useAuth();
    return (
        authState.isLoggedIn && authState.token?
            <Outlet /> :
            <Navigate to="/sign-up" state={{ from: location }} replace />)
}