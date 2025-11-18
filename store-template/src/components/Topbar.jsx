import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfileSidebar from "./ProfileSidebar";
import React, { useState } from "react";

export default function Topbar() {
    const { username, store_name } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (!username) {
            navigate("/sign-in");     // route if no user
        } else {
            setSidebarOpen(true);     // open sidebar
        }
    };

    const goHome = () => {
        navigate("/Home")
    }

    return (
        <>
            <header className="head">

                <button className="store-butt" onClick={goHome}>{store_name}
                </button>

                <button
                    className="profile-butt"
                    onClick={handleProfileClick}
                >
                    {username || "sign in"}
                </button>

            </header>

            <ProfileSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </>
    );
    
}


