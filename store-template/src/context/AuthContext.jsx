import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig.js"; // import initialized auth

const AuthContext = createContext();
const store_name = "Mason";

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [role, setRole] = useState(null); // fetched from Firestore
    const [loading, setLoading] = useState(true);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);

                // Fetch user role from Firestore
                try {
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setRole(docSnap.data().role || "user");
                    } else {
                        setRole("user"); // default role
                    }
                } catch (err) {
                    console.error("Failed to fetch user role:", err);
                    setRole("user");
                }
            } else {
                setCurrentUser(null);
                setRole(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Login
    const login = async (email, password) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            throw err; // UI can catch and display
        } finally {
            setLoading(false);
        }
    };

    // Signup
    const signup = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Create Firestore user doc
            await setDoc(doc(db, "users", userCredential.user.uid), {
                role: "user",
                email: email,
                createdAt: new Date()
            });
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Logout
    const logout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        store_name,
        currentUser,
        role,
        loading,
        login,
        signup,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
