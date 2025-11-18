export const filterProducts = (products, selectedFilter, filterType) => {
    if (!products) return [];
    if (selectedFilter === "All") return products;
    return products.filter(p => filterType === "collections" ? p.collection === selectedFilter : (p.tags || []).includes(selectedFilter));
};
