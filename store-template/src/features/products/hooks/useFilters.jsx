import { useState, useMemo } from "react";

/**
 * Custom hook for filtering a list of items based on multiple filter criteria.
 * @param {Array} items - Array of items to filter
 * @param {Object} initialFilters - Object containing initial filter values
 * @returns {Object} - { filteredItems, filters, setFilters, resetFilters }
 */
export default function useFilters(items = [], initialFilters = {}) {
    const [filters, setFilters] = useState(initialFilters);

    // Function to reset all filters
    const resetFilters = () => setFilters(initialFilters);

    // Filtered items computed using useMemo for performance
    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            return Object.entries(filters).every(([key, value]) => {
                if (!value) return true; // Skip empty filter values
                if (Array.isArray(value)) {
                    // For multi-select filters
                    return value.includes(item[key]);
                }
                // Default comparison (string / number)
                return item[key] === value;
            });
        });
    }, [items, filters]);

    return { filteredItems, filters, setFilters, resetFilters };
}
