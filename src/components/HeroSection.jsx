import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import herobg1 from "../assets/images/herobg1.jpeg";
import herobg2 from "../assets/images/herobg2.jpeg";
import herobg3 from "../assets/images/herobg3.jpeg";
import herobg4 from "../assets/images/herobg4.jpeg";
import herobg5 from "../assets/images/herobg5.jpeg";
import herobg6 from "../assets/images/herobg6.jpeg";

import "../style/heroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  const backgrounds = [herobg1, herobg2, herobg3, herobg4,herobg5,herobg6];
  const [currentBg, setCurrentBg] = useState(0);

  const [typedText, setTypedText] = useState("");
  const [show, setShow] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnVisible(true);
    }, 2000); // delay after text animation

    return () => clearTimeout(timer);
  }, []);

  const fullText = "Career Development Courses | Anytime Admission";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  // Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Entrance animation delay
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* ===== BACKGROUND SLIDER WITH ZOOM ===== */}
      <div
        className="absolute inset-0 flex transition-transform duration-[2000ms] ease-in-out"
        style={{
          width: `${backgrounds.length * 100}%`,
          transform: `translateX(-${currentBg * (100 / backgrounds.length)}%)`,
        }}
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="elite-bg w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/50 z-10"></div>

      {/* Subtle Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <div
          className={`transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="royal-heading leading-tight mb-6 text-4xl md:text-6xl text-white">
            New Ukhra Youth <br />
            Computer Training Centre
          </h1>

          <p className="text-lg md:text-xl mb-8 text-orange-400 font-medium h-8">
            {typedText}
          </p>

          <button
            onClick={() => navigate("/courses")}
            className={`
    bg-orange-500 hover:bg-orange-600 
    px-10 py-3 rounded-full text-white 
    font-semibold shadow-xl
    transition-all duration-700 ease-out
    ${btnVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
  `}
          >
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
