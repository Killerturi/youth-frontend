import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [hideAtBottom, setHideAtBottom] = useState(false);

  const whatsappNumber = "919732081768";
  const whatsappMessage = "Hello, I want to know more about your courses.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;

      setHideAtBottom(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= MOBILE ================= */}
      <div
        className={`fixed right-4 bottom-6 z-40 flex flex-col items-center gap-3 md:hidden transition-all duration-300 ${
          hideAtBottom
            ? "opacity-0 translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* TOGGLE BUTTON */}

        {/* ACTIONS */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* CALL */}
          <a
            href="tel:9749616555"
            onClick={() => setOpen(false)}
            className="w-12 h-12 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full shadow-md flex items-center justify-center"
          >
            <Phone size={20} className="text-blue-600" />
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappURL}
            target="_blank"
            onClick={() => setOpen(false)}
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full shadow-md flex items-center justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="relative w-13 h-13 flex items-center justify-center rounded-full"
        >
          {/* OUTER GLOW */}
          {!open && (
            <span className="absolute w-16 h-16 rounded-full bg-green-500/30 animate-ping"></span>
          )}

          {/* SOFT RING */}
          {!open && (
            <span className="absolute w-14 h-14 rounded-full bg-green-500/30 blur-md"></span>
          )}

          {/* MAIN BUTTON */}
          <div
            className={`relative w-13 h-13 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              open
                ? "bg-gray-800 text-white rotate-90 scale-95"
                : "bg-gradient-to-br from-green-500 to-emerald-600"
            }`}
          >
            {open ? (
              "✕"
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            )}
          </div>
        </button>
      </div>

      {/* ================= DESKTOP UI (OLD STYLE) ================= */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        {/* CALL */}
        <a
          href="tel:9749616555"
          onClick={() => setOpen(false)}
          className={`absolute transition-all duration-300 ${
            open
              ? "opacity-100 scale-100 translate-x-[-90px]"
              : "opacity-0 scale-0"
          }`}
        >
          <div className="w-16 h-16 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition">
            <Phone size={26} className="text-blue-600" />
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={`absolute transition-all duration-300 delay-75 ${
            open
              ? "opacity-100 scale-100 translate-y-[-90px]"
              : "opacity-0 scale-0"
          }`}
        >
          <div className="w-16 h-16 bg-green-500/90 backdrop-blur-xl border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-7 h-7"
            />
          </div>
        </a>

        {/* MAIN BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`relative w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer transition-all duration-300 ${
            open ? "scale-90 opacity-60" : ""
          }`}
        >
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
          )}

          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="Main WhatsApp"
            className="w-9 h-9"
          />
        </button>
      </div>
    </>
  );
}

export default WhatsAppFloat;
