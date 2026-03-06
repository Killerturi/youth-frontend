import { useState, useEffect } from "react";
import galleryImages from "../data/galleryImages";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const [fade, setFade] = useState(true);

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex].src : null;

  /* ================= ZOOM ================= */

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.2, 4));
    } else {
      setScale((prev) => Math.max(prev - 0.2, 1));
    }
  };

  const handleDoubleClick = () => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  };

  /* ================= IMAGE CHANGE WITH FADE ================= */

  const changeImage = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setScale(1);
      setFade(true);
    }, 200);
  };

  const nextImage = () => {
    const newIndex =
      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
    changeImage(newIndex);
  };

  /* ================= KEYBOARD SUPPORT ================= */

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="bg-[#0b1120] py-28 min-h-screen">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl font-bold text-white tracking-wide">
          Our Gallery
        </h1>
        <div className="w-24 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
            onClick={() => {
              setSelectedIndex(index);
              setScale(1);
            }}
          >
            <img
              src={image.src}
              alt="Gallery"
              className="w-full rounded-2xl transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 overflow-hidden"
          onWheel={handleWheel}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-8 right-8 z-[200] text-white hover:text-orange-500 transition"
          >
            <X size={36} />
          </button>

          {/* COUNTER */}
          <div className="absolute top-8 left-8 z-[200] text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur">
            {selectedIndex + 1} / {galleryImages.length}
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prevImage}
            className="absolute left-6 md:left-12 z-[200]
              bg-white/10 hover:bg-orange-500
              p-4 rounded-full
              backdrop-blur-lg
              transition duration-300 text-white"
          >
            <ChevronLeft size={32} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextImage}
            className="absolute right-6 md:right-12 z-[200]
              bg-white/10 hover:bg-orange-500
              p-4 rounded-full
              backdrop-blur-lg
              transition duration-300 text-white"
          >
            <ChevronRight size={32} />
          </button>

          {/* IMAGE */}
          <div className="relative z-10 flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full View"
              onDoubleClick={handleDoubleClick}
              className={`max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl
              transition-all duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
              style={{
                transform: `scale(${scale})`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
