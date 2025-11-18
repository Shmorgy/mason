import React from "react";
import { useAuth } from "../context/AuthContext";

export default function ProfileSidebar({ isOpen, onClose }) {
    const { logout, username, role } = useAuth();

    return (
        <>
            {/* Overlay with smooth opacity transition */}
            <div
                className={`fixed inset-0 backdrop-blur-sm bg-black/1 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            ></div>

            {/* Sidebar Drawer with slide transition */}
            <div
                className={`fixed top-0 right-0 h-full w-48 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <button
                        onClick={onClose}
                        
                    >
                        {username || "User"}
                    </button>
                </div>

                <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                        {/* Additional profile links/buttons can go here */}
                    </div>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
