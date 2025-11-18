import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { currentUser, role, username } = useAuth();

    return (
        <Layout>
            {/* Hero Section */}
            <dev>testing</dev>
        </Layout>
    );
}
