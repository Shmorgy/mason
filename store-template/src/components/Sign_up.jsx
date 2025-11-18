import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
    const navigate = useNavigate();
    const { currentUser, login, signup, loading } = useAuth();

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Redirect if already logged in
    useEffect(() => {
        if (currentUser) navigate("/home", { replace: true });
    }, [currentUser, navigate]);

    const handleAuth = async (e) => {
        e.preventDefault();
        setError("");

        try {
            if (isSignUp) {
                await signup(email, password);
            } else {
                await login(email, password);
            }
            navigate("/home", { replace: true });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="gap">
            <div className="sign_sect">
                <h1 className="welcome">
                    {isSignUp ? "Create an Account" : "Welcome"}
                </h1>
                <p className="supsin">
                    {isSignUp ? "Sign up to continue" : "Sign in to continue"}
                </p>

                {error && (
                    <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
                )}

                <form onSubmit={handleAuth} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            required
                            className="type"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            required
                            className="type"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="butt" disabled={loading}>
                        {loading
                            ? "Loading..."
                            : isSignUp
                                ? "Sign Up"
                                : "Sign In"}
                    </button>
                </form>
            </div>

            <div className="gap"></div>
            <button
                className="text"
                onClick={() => setIsSignUp(!isSignUp)}
                disabled={loading}
            >
                {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
            </button>
        </div>
    );
}
