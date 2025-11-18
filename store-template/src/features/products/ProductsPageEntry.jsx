import React, { useState } from "react";
import FeaturedCarousel from "./components/FeaturedCarousel";
import FilterBar from "./components/FilterBar";
import AddProductPanel from "./components/AddProductPanel";
import ProductGrid from "./components/ProductGrid";
import useProducts from "./hooks/useProducts";
import useFilters from "./hooks/useFilters";

export default function ProductsPageEntry() {
    const { products, featured, addProduct, uploadImage } = useProducts();
    const filters = useFilters();
    const [showAdd, setShowAdd] = useState(false);

    return (
        <div className="gap">
        
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Products</h1>
            {featured.length > 0 && <FeaturedCarousel featured={featured} />}
            <FilterBar filters={filters} onAdd={() => setShowAdd(v => !v)} />
            {showAdd && <AddProductPanel addProduct={addProduct} filters={filters} />}
            <ProductGrid products={products} filters={filters} uploadImage={uploadImage} />
            </div>
        </div>
    );
}
