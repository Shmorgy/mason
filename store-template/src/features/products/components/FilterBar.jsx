import React, { useState, useRef, useEffect } from "react";

export default function FilterBar({ filters, onAdd }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onDoc = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);
    return (
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded" ref={ref}>
            <div className="relative">
                <button className="px-4 py-2 bg-white border rounded" onClick={() => setOpen(v => !v)}>Filter: {filters.selectedFilter}</button>
                {open && (
                    <div className="absolute mt-2 bg-white border rounded shadow p-2 w-48 right-0">
                        {filters.displayedFilters.map(f => (
                            <div key={f} className="px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => { filters.setSelectedFilter(f); setOpen(false); }}>{f}</div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                <button className="px-3 py-2 bg-blue-500 text-white rounded" onClick={onAdd}>Add Product</button>
            </div>
        </div>
    );
}
