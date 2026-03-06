import { useState } from "react";
import courses from "../data/coursesData";
import courseHeaderBg from "../assets/images/coursebg.jpg";
import { Laptop, Calculator, Code, PenTool, X } from "lucide-react";
import CourseModal from "../components/CourseModal";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const icons = [Laptop, Calculator, Code, PenTool];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${courseHeaderBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-800/80"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Build Skills. Gain Confidence. Shape Your Future.
          </p>
        </div>
      </section>

      {/* ================= COURSE GRID ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {courses.map((course, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={course.id}
                  className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 hover:scale-105 transition duration-500"
                >
                  <div className="bg-white rounded-2xl p-8 h-full shadow-lg">

                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white mb-6 shadow-md">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-snug">
                      {course.title}
                    </h3>

                    {/* Badge */}
                    <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4">
                      {course.category}
                    </span>

                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Duration:</strong> {course.duration}
                    </p>

                    <p className="text-sm font-semibold text-indigo-600 mb-6">
                      Fees: ₹{course.fees}
                    </p>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="mt-auto text-indigo-600 font-medium hover:text-indigo-800 transition"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <CourseModal
        selectedCourse={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}

export default Courses;