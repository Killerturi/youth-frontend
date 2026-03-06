import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children, delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.25 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
        >
            {children}
        </div>
    );
}

export default ScrollReveal;