import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("tokenFSP");
    return token ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;