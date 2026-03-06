import { NavLink } from "react-router-dom";
import { MapPin, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../style/navbar.css";

function Navbar() {
  const texts = [
    "নিউ উখরা যুব কম্পিউটার প্রশিক্ষণ কেন্দ্র",
    "New Ukhra Youth Computer Training Centre",
  ];

  const [index, setIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-sky-600 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>
              Near New Sannyasi Kali Mandir, Ananda More, MG Rd, Ukhra, WB
              713363
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>9749616555 / 9732081768</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="relative bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* LOGO + TITLE */}
          <NavLink to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Institute Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              {index === 0 ? (
                <>
                  <h1 className="text-blue-900 font-bold text-sm md:text-lg">
                    নিউ উখরা যুব
                  </h1>
                  <p className="text-blue-800 text-xs md:text-sm font-medium">
                    কম্পিউটার প্রশিক্ষণ কেন্দ্র
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-blue-900 font-bold text-sm md:text-lg">
                    New Ukhra Youth
                  </h1>
                  <p className="text-blue-800 text-xs md:text-sm font-medium">
                    Computer Training Centre
                  </p>
                </>
              )}
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <NavLink to="/" className="hover:text-blue-900 transition">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-900 transition">
              About
            </NavLink>
            <NavLink to="/courses" className="hover:text-blue-900 transition">
              Courses
            </NavLink>
            <NavLink to="/gallery" className="hover:text-blue-900 transition">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-900 transition">
              Contact
            </NavLink>
            <NavLink
              to="https://quiz-frontend-psi-six.vercel.app/"
              target="_blank"
              className="relative group text-blue-900 font-semibold flex items-center"
            >
              Mock Test
              <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 
                   transition-all duration-300 
                   group-hover:w-full"></span>
            </NavLink>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-blue-900"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
        >
          <div className="flex flex-col space-y-4 px-6 text-gray-700 font-medium">
            <NavLink onClick={() => setMobileOpen(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/courses">
              Courses
            </NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/gallery">
              Gallery
            </NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/contact">
              Contact
            </NavLink>
            <NavLink to="https://quiz-frontend-psi-six.vercel.app/" target="_blank" className="hover:text-blue-900 transition">
              Mock Test
            </NavLink>
          </div>
        </div>

        <div className="scallop"></div>
      </nav>
    </>
  );
}

export default Navbar;
