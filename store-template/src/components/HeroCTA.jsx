import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // for role-based actions


export default function HeroCTA({ title, subtitle, ctaText, ctaLink }) {
    const navigate = useNavigate();
    const { role, store_name } = useAuth(); // optional: use role if needed
    const handleClick = () => navigate('/sign-in');

    return (
        <section >
            <div className="gap"></div>
            <div className="sect">
                <h1 className="title"> {title || "welcome to"} </h1>
                <p className="store"> {store_name} </p> 
                <p className="info"> {subtitle || "We're busy setting up an awesome store!"}</p>
                <button onClick={handleClick} className="butt">
                {ctaText || "Get Started"}
                </button>
                
                    
            </div>
        </section>
    );
}
