import React from "react";
import HeroCTA from "../components/HeroCTA";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { currentUser, role, username } = useAuth();

    return (
        <Layout>
            {/* Hero Section */}
            <HeroCTA />
        </Layout>
    );
}
