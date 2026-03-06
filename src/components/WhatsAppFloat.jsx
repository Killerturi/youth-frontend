import { Phone } from "lucide-react";

function WhatsAppFloat() {
  const whatsappNumber = "919749616555";
  const whatsappMessage = "Hello, I want to know more about your courses.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* ===== CALL (LEFT) ===== */}
      <a
        href="tel:9749616555"
        className="
          absolute
          opacity-0 scale-0
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300 ease-out
        "
        style={{ transform: "translate(-90px, 0px)" }}
      >
        <div
          className="
          w-16 h-16 
          bg-white 
          rounded-full 
          shadow-2xl 
          flex items-center justify-center 
          hover:scale-110 transition
        "
        >
          <Phone size={28} className="text-blue-600" />
        </div>
      </a>

      {/* ===== WHATSAPP (TOP) ===== */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          opacity-0 scale-0
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300 ease-out delay-75
        "
        style={{ transform: "translate(0px, -90px)" }}
      >
        <div
          className="
          w-16 h-16 
          bg-white 
          rounded-full 
          shadow-2xl 
          flex items-center justify-center 
          hover:scale-110 transition
        "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </div>
      </a>

      {/* ===== MAIN BUTTON ===== */}
      <div
        className="
          relative w-16 h-16
          bg-gradient-to-r from-green-500 to-emerald-600
          rounded-full
          shadow-[0_15px_40px_rgba(0,0,0,0.35)]
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          group-hover:opacity-60
          group-hover:scale-90
        "
      >
        {/* Pulse only when NOT hovered */}
        <span
          className="
          absolute inset-0 rounded-full bg-green-400 
          animate-ping opacity-30
          group-hover:opacity-0
          transition duration-300
        "
        ></span>

        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="Main WhatsApp"
          className="w-9 h-9 relative z-10"
        />
      </div>
    </div>
  );
}

export default WhatsAppFloat;
