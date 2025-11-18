import { useEffect, useState } from "react";
// Placeholder: this hook stores product list in memory; replace with Firestore listeners
export default function useProducts() {
    const [products, setProducts] = useState([
        { id: "1", name: "Example", description: "Demo product", price: "99", featured: true, imageUrl: null, collection: "Bundles", tags: ["New"] }
    ]);
    useEffect(() => { }, []);
    const addProduct = async (p) => {
        const id = Date.now().toString();
        setProducts(prev => [{ id, ...p }, ...prev]);
    };
    const uploadImage = async (productId, fileOrFileObj) => {
        // implement upload -> set imageUrl once uploaded
        console.log("uploadImage called", productId);
    };
    const featured = products.filter(p => p.featured);
    return { products, featured, addProduct, uploadImage };
}
