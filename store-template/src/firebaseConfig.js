// src/firebaseConfig.js

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA62cUBTcILUkYQpDVU8yCaDlKMIIiaq4o",
    authDomain: "mason-8a8b7.firebaseapp.com",
    projectId: "mason-8a8b7",
    storageBucket: "mason-8a8b7.appspot.com",
    messagingSenderId: "181434489327",
    appId: "1:181434489327:web:3176486d4287f8f5147e1a",
    measurementId: "G-PSHS1HJ46R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const auth = getAuth(app);        // Authentication
export const db = getFirestore(app);     // Firestore database
export const storage = getStorage(app);   // Firebase Storage

export default app;
