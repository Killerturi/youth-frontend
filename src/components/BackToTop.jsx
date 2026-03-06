import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percent = (scrollTop / height) * 100;

            setScrollPercent(percent);

            if (scrollTop > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    const dash = (scrollPercent / 100) * circumference;

    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <button
                onClick={scrollTop}
                className="relative w-16 h-16 flex items-center justify-center 
        rounded-full backdrop-blur-xl
        bg-white/20 border border-white/30
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        hover:scale-110 transition"
            >
                {/* Progress Ring */}
                <svg
                    className="absolute w-16 h-16 rotate-[-90deg]"
                    viewBox="0 0 60 60"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r={radius}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="4"
                        fill="transparent"
                    />

                    <circle
                        cx="30"
                        cy="30"
                        r={radius}
                        stroke="#3b82f6"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - dash}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Arrow */}
                <ArrowUp size={22} className="text-black relative z-10" />
            </button>
        </div>
    );
}

export default BackToTop;