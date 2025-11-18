import React, { useState } from "react";

export default function AddProductPanel({ addProduct, filters }) {
    const [form, setForm] = useState({ name: "", description: "", price: "", collection: "All", tags: [] });
    const onSubmit = async () => {
        await addProduct(form);
        setForm({ name: "", description: "", price: "", collection: "All", tags: [] });
    };
    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="grid gap-2">
                <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2 rounded" />
                <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="border p-2 rounded" />
                <input placeholder="Price" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="border p-2 rounded" />
                <select value={form.collection} onChange={e => setForm({ ...form, collection: e.target.value })} className="border p-2 rounded">
                    {filters.collections.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="flex gap-2">
                    <button className="px-3 py-2 bg-green-600 text-white rounded" onClick={onSubmit}>Add</button>
                </div>
            </div>
        </div>
    );
}
