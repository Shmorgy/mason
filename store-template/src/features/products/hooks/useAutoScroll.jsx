import { useEffect } from "react";
export default function useAutoScroll(ref, items = []) {
    useEffect(() => {
        const el = ref?.current;
        if (!el) return;
        let raf;
        let x = 0;
        function tick() {
            x += 0.4;
            el.scrollLeft = x;
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
            raf = requestAnimationFrame(tick);
        }
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [ref, items]);
    return {
        pause: () => { },
        resume: () => { }
    };
}
