import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useAuth } from "./AuthContext";

export const RequiresAuth = () => {
    const location = useLocation();
    const { authState } = useAuth();
    const checkAuth = ((authState.token) && (authState.isLoggedIn))
    return (
        checkAuth ?
            <Outlet /> :
            <Navigate to="/sign-up" state={{ from: location }} replace />)
}