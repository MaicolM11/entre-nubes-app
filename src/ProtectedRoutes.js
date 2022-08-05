import { getRole } from "./services/storage";
import { Navigate } from "react-router-dom";

export const SalesmanProtectedRoute = ({ children }) => {
    let user = getRole();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (user === "SALESMAN") {
        return children;
    }

    if (user === "ADMIN") {
        return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/" replace />;
};

export const AdminProtectedRoute = ({ children }) => {
    let user = getRole();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (user === "SALESMAN") {
        return <Navigate to="/salesman" replace />;;
    }

    if (user === "ADMIN") {
        return children;
    }

    return <Navigate to="/" replace />;
};

export const LoginProtectedRoute = ({children}) => {
    let user = getRole();

    if (!user) {
        return children;
    }

    if (user === "SALESMAN") {
        return <Navigate to="/salesman" replace />;
    }

    if (user === "ADMIN") {
        return <Navigate to="/admin" replace />;
    }

    return children;
}