import { CheckCircle, Squircle, X } from "lucide-react";
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
                            className={`sticky top-0 z-20 bg-white px-6 md:px-8 pt-6 pb-5 border-b transition ${isScrolled ? "shadow-md" : ""
                                }`}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 text-gray-500 hover:text-black"
                            >
                                <X size={22} />
                            </button>

                            <h2 className="text-xl md:text-3xl font-bold text-indigo-700 mb-4 pr-8">
                                {selectedCourse.title}
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">

                                <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-gray-500 text-xs">Code</p>
                                    <p className="font-medium">{selectedCourse.code}</p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-gray-500 text-xs">Category</p>
                                    <p className="font-medium">{selectedCourse.category}</p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-gray-500 text-xs">Duration</p>
                                    <p className="font-medium">{selectedCourse.duration}</p>
                                </div>

                                <div className="bg-indigo-50 rounded-lg p-2">
                                    <p className="text-gray-500 text-xs">Fees</p>
                                    <p className="font-semibold text-indigo-600">
                                        ₹{selectedCourse.fees}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* ================= SCROLLABLE CONTENT ================= */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto px-10 py-8 scrollbar-hide"
                        >
                            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-decoration-line: underline">
                                Course Syllabus :
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

                                            {/* Semester Badge */}
                                            <div className="inline-flex items-center gap-2 
      bg-indigo-100 text-indigo-700 
      px-3 py-1.5 rounded-full 
      font-semibold text-l md:text-l 
      mb-4">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                                {semester}
                                            </div>

                                            {/* Subjects */}
                                            <ul className="space-y-3">
                                                {subjects.map((subject, i) => (
                                                    <li
                                                        key={i}
                                                        className="bg-indigo-50 
                                                            px-4 py-3 
                                                            rounded-lg 
                                                            text-gray-700 
                                                            flex items-start gap-3
                                                            text-sm md:text-base
                                                            leading-relaxed"
                                                    >
                                                        <span className="mt-[3px] text-indigo-600">
                                                            <CheckCircle size={16} className="text-indigo-500" />
                                                        </span>

                                                        <span className="flex-1">
                                                            {subject}
                                                        </span>

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