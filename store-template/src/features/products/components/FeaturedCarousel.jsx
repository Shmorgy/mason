import React, { useRef, useEffect } from "react";
export default function FeaturedCarousel({ featured = [] }) {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let raf;
        let x = 0;
        const tick = () => {
            x += 0.5;
            el.scrollLeft = x;
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [featured]);
    return (
        <div ref={ref} className="flex gap-4 overflow-x-auto p-2 bg-gray-100 rounded">
            {featured.map(f => (
                <div key={f.id} className="w-64 h-36 bg-white rounded shadow overflow-hidden">
                    {f.imageUrl ? <img src={f.imageUrl} alt={f.name} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full">No Image</div>}
                </div>
            ))}
        </div>
    );
}
