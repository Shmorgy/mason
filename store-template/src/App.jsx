import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home"; // optional placeholder page you can make, or route to Products
import ProductsPageEntry from "./features/products/ProductsPageEntry";
import { AuthProvider } from "./context/AuthContext";
import { SettingsProvider } from "./context/SettingsContext";
import _sign_in from "./pages/sign-in";
import _dev from "./pages/dev";

export default function App() {
    return (
        <AuthProvider>
            <SettingsProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route
                            path="/products"
                            element={
                                <ProtectedRoute allowedRoles={["admin", "staff", "user"]}>
                                    <Layout>
                                        <ProductsPageEntry />
                                    </Layout>
                                </ProtectedRoute>
                            }
                        />
                        {/* add more routes here */}
                        <Route path="/home" element={<Home/>} />
                        <Route path="/sign-in" element={<_sign_in/>} />
                        <Route path="/dev" element={<_dev/>} />
                    </Routes>
                </Router>
            </SettingsProvider>
        </AuthProvider>
    );
}
