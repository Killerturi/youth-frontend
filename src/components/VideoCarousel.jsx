import { useState } from "react";
import vid1 from "../assets/videos/vid1.mp4"


function VideoCarousel() {

    const videos = [
        vid1,
        vid1,
        vid1,
        vid1,
    ];

    const [current, setCurrent] = useState(1);

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? videos.length - 1 : prev - 1
        );
    };

    const next = () => {
        setCurrent((prev) =>
            prev === videos.length - 1 ? 0 : prev + 1
        );
    };

    const leftIndex =
        current === 0 ? videos.length - 1 : current - 1;

    const rightIndex =
        current === videos.length - 1 ? 0 : current + 1;

    return (
        <div className="relative flex items-center justify-center py-20">

            {/* LEFT BUTTON */}
            <button
                onClick={prev}
                className="absolute left-10 text-white text-3xl z-20"
            >
                ‹
            </button>

            <div className="flex items-center justify-center gap-10">

                {/* LEFT VIDEO */}
                <div className="w-[220px] h-[390px] opacity-40 scale-90 transform rotate-y-12 transition-all duration-500">
                    <video
                        src={videos[leftIndex]}
                        controls
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* CENTER VIDEO */}
                <div className="w-[260px] h-[460px] scale-110 shadow-2xl z-10 transition-all duration-500">
                    <video
                        src={videos[current]}
                        controls
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-[220px] h-[390px] opacity-40 scale-90 transform -rotate-y-12 transition-all duration-500">
                    <video
                        src={videos[rightIndex]}
                        controls
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>

            {/* RIGHT BUTTON */}
            <button
                onClick={next}
                className="absolute right-10 text-white text-3xl z-20"
            >
                ›
            </button>

        </div>
    );
}

export default VideoCarousel;