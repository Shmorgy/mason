import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles = [], children }) {
    const { currentUser, role, loading } = useAuth();

    if (loading) return null;

    // If not logged in ? go home nigga
    if (!currentUser) {
        return <Navigate to="/home" replace />;
    }

    // If logged in but wrong role ? send home
    if (allowedRoles.length && !allowedRoles.includes(role)) {
        return <Navigate to="/home" replace />;
    }

    return children;
}
