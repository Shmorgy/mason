import React from "react";
import ProductCard from "./ProductCard";
import { filterProducts } from "../utils/productFunctions";

export default function ProductGrid({ products = [], filters, uploadImage }) {
    const displayed = filterProducts(products, filters.selectedFilter, filters.filterType);
    if (!displayed.length) return <div className="text-gray-500">No products found</div>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map(p => <ProductCard key={p.id} product={p} uploadImage={uploadImage} />)}
        </div>
    );
}
