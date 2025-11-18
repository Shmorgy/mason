import React, { useState } from "react";

export default function ProductCard({ product, uploadImage }) {
    const [editing, setEditing] = useState(false);
    return (
        <div className="bg-white rounded shadow p-4 flex flex-col">
            <div className="h-40 bg-gray-100 mb-3 overflow-hidden">
                {product.imageUrl ? <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" /> : <div className="h-full flex items-center justify-center">No Image</div>}
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2 truncate-2">{product.description}</p>
            <div className="mt-auto flex items-center justify-between">
                <div className="font-bold">{product.price ? `R${product.price}` : "—"}</div>
                <div className="flex gap-2">
                    <label className="px-2 py-1 border rounded cursor-pointer">
                        Upload <input type="file" className="hidden" onChange={e => uploadImage(product.id, e.target.files[0])} />
                    </label>
                </div>
            </div>
        </div>
    );
}
