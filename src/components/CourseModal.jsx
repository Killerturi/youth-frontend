import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../style/courseModal.css";

function CourseModal({ selectedCourse, onClose }) {
    const scrollRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    /* ================= BODY LOCK + ESC ================= */
    useEffect(() => {
        if (selectedCourse) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [selectedCourse, onClose]);

    /* ================= SCROLL SHADOW DETECTION ================= */
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setIsScrolled(scrollRef.current.scrollTop > 5);
            }
        };

        const current = scrollRef.current;
        if (current) {
            current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (current) {
                current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <AnimatePresence>
            {selectedCourse && (
                <motion.div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm 
                     flex items-center justify-center z-50 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ duration: 0.35 }}
                        className="bg-white/95 backdrop-blur-xl
                       w-full max-w-4xl
                       rounded-3xl
                       shadow-2xl
                       relative border border-white/40
                       flex flex-col
                       max-h-[90vh]
                       overflow-hidden"
                    >

                        {/* ================= STICKY HEADER ================= */}
                        <div
                            className={`sticky top-0 z-20
                         bg-white/95 backdrop-blur-xl
                         px-10 pt-8 pb-6
                         border-b
                         rounded-t-3xl
                         transition-all duration-300
                         ${isScrolled ? "shadow-md" : ""}`}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-500 hover:text-black transition"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-3xl font-bold text-indigo-700 mb-4 pr-10">
                                {selectedCourse.title}
                            </h2>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <p><strong>Code:</strong> {selectedCourse.code}</p>
                                <p><strong>Category:</strong> {selectedCourse.category}</p>
                                <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                                <p className="text-indigo-600 font-semibold">
                                    <strong>Fees:</strong> ₹{selectedCourse.fees}
                                </p>
                            </div>
                        </div>

                        {/* ================= SCROLLABLE CONTENT ================= */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto px-10 py-8 scrollbar-hide"
                        >
                            <h3 className="text-xl font-semibold text-slate-800 mb-6">
                                Course Syllabus
                            </h3>

                            {Array.isArray(selectedCourse.syllabus) ? (
                                <ul className="space-y-3">
                                    {selectedCourse.syllabus.map((item, i) => (
                                        <li
                                            key={i}
                                            className="bg-indigo-50 p-3 rounded-lg text-gray-700"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                Object.entries(selectedCourse.syllabus).map(
                                    ([semester, subjects], index) => (
                                        <div key={index} className="mb-8">
                                            <h4 className="font-semibold text-indigo-600 mb-4 capitalize">
                                                {semester}
                                            </h4>
                                            <ul className="space-y-3">
                                                {subjects.map((subject, i) => (
                                                    <li
                                                        key={i}
                                                        className="bg-indigo-50 p-3 rounded-lg text-gray-700"
                                                    >
                                                        {subject}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )
                            )}

                            <div className="mt-10 border-t pt-6 text-sm text-gray-600 space-y-2">
                                <p>✔ Practical Lab Sessions</p>
                                <p>✔ Real-world Assignments</p>
                                <p>✔ Industry-Recognized Certificate</p>
                                <p>✔ Career Guidance & Interview Prep</p>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CourseModal;