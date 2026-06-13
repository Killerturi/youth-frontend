import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import courses from "../data/coursesData";
import courseHeaderBg from "../assets/images/coursebg.jpg";
import { Laptop, Calculator, Code, PenTool, Search } from "lucide-react";
import CourseModal from "../components/CourseModal";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const icons = [Laptop, Calculator, Code, PenTool];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      let syllabusText = "";

      if (Array.isArray(course.syllabus)) {
        syllabusText = course.syllabus.join(" ");
      } else if (course.syllabus && typeof course.syllabus === "object") {
        syllabusText = Object.values(course.syllabus).flat().join(" ");
      }

      const searchableText = `
        ${course.title}
        ${course.code}
        ${course.category}
        ${course.duration}
        ${syllabusText}
      `.toLowerCase();

      return searchableText.includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]);

  return (
    <>
      <Helmet>
        <title>Computer Courses in Ukhra | DDTA, Tally, Web Development</title>

        <meta
          name="description"
          content="Explore computer courses in Ukhra: DDTA, Tally, Spoken English & Web Development. Affordable training with certification."
        />

        <meta
          name="keywords"
          content="Basic Computer,DDTA course Ukhra, Tally course Ukhra and Pandaveswar, Web development Ukhra, computer courses Haripur, Ukhra"
        />
      </Helmet>

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70"></div>

          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
              Explore Our Courses
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Build Skills. Gain Confidence. Shape Your Future.
            </p>
          </div>
        </section>

        {/* ================= SEARCH SECTION ================= */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xl">
                  📚
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {filteredCourses.length} Courses Available
                  </h3>

                  <p className="text-sm text-slate-500">
                    Explore our training programs
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search courses, skills, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
            w-full
            pl-12
            pr-12
            py-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            focus:outline-none
            focus:ring-4
            focus:ring-indigo-100
            focus:border-indigo-500
            transition-all
          "
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-12
              h-8
              flex
              items-center
              justify-center
              rounded
              bg-slate-200
              hover:bg-red-100
              text-slate-600
              hover:text-red-500
              transition
            "
                  >
                  clear
                  </button>
                )}
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["AI", "Python", "English", "Word", "Excel", "React"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="
                px-3
                py-1.5
                text-sm
                rounded-full
                bg-indigo-50
                text-indigo-600
                hover:bg-indigo-100
                transition
              "
                    >
                      {tag}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= COURSE GRID ================= */}
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-10">
                {filteredCourses.map((course, index) => {
                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={course.id}
                      className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 hover:scale-105 transition duration-500"
                    >
                      <div className="bg-white rounded-2xl p-8 h-full shadow-lg flex flex-col">
                        {/* Icon */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white mb-6 shadow-md">
                          <Icon size={26} />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-snug">
                          {course.title}
                        </h3>

                        {/* Badge */}
                        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4 w-fit">
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
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No courses found
                </h3>

                <p className="text-gray-500 mt-3">
                  Try searching with keywords like:
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  {[
                    "React",
                    "Python",
                    "AI",
                    "Excel",
                    "Accounting",
                    "Node.js",
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================= MODAL ================= */}
        <CourseModal
          selectedCourse={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      </div>
    </>
  );
}

export default Courses;
