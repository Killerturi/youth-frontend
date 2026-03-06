import { useEffect, useState, useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";
import apurbaImg from "../assets/about/apurba.jpeg";
import sandipImg from "../assets/about/sandip.jpeg";

function About() {

  /* ================= Animated Counter ================= */

  function AnimatedNumber({ value, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.6 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!visible) return;

      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [visible, value]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }

  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white py-32 px-6 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              About NUYCTC
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
              Established in <span className="text-yellow-400 font-semibold">April 2009</span>,
              we proudly carry <span className="text-yellow-400 font-semibold">16+ years of excellence </span>
              in digital education and skill development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center text-[#0f172a] mb-24 tracking-tight">
            Message From Our Leadership
          </h2>
        </ScrollReveal>

        {/* ================= SANDIP SECTION ================= */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Speech Left */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100 relative order-2 md:order-1">

              <span className="text-7xl text-blue-100 absolute -top-8 left-6 font-serif">“</span>

              <p className="text-gray-700 leading-8 text-lg">
                At NUYCTC, our mission is to transform potential into professional success.
                We believe education should empower students with both knowledge and confidence.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                Discipline, dedication, and continuous learning are the pillars of long-term achievement.
                Together, we aim to shape skilled professionals ready for the evolving digital era.
              </p>

              <p className="mt-8 font-semibold text-blue-800">
                Your growth is our pride.
              </p>

            </div>

            {/* Image Right */}
            <div className="relative flex justify-center order-1 md:order-2">
              <div className="relative w-80 h-80">
                <img
                  src={sandipImg}
                  alt="Sandip Mondal"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-lg font-semibold text-[#0f172a]">
                    Sandip Mondal
                  </p>
                  <p className="text-sm text-blue-700">
                    Director (NEW UKHRA YCTC)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ================= APURBA SECTION ================= */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="relative w-80 h-80">
                <img
                  src={apurbaImg}
                  alt="Apurba Chattaraj"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-lg font-semibold text-[#0f172a]">
                    Apurba Chattaraj
                  </p>
                  <p className="text-sm text-blue-700">
                    Centre In-Charge (NEW UKHRA YCTC)
                  </p>
                </div>
              </div>
            </div>

            {/* Speech */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100 relative">

              <span className="text-7xl text-blue-100 absolute -top-8 left-6 font-serif">“</span>

              <p className="text-gray-700 leading-8 text-lg">
                I warmly welcome all of you to our New Ukhra Youth Computer Training Centre.
                By enrolling here, you have taken a meaningful step toward building a strong
                and independent future in today’s digital world.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                Computer knowledge is not just a skill — it is a gateway to employment,
                entrepreneurship, and self-reliance. Through this training, you are building
                confidence, discipline, and professional excellence.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                Believe in yourself. Stay focused. Work hard. Your success will inspire many others.
              </p>

              <p className="mt-8 font-semibold text-blue-800">
                With best wishes for your bright and successful future.
              </p>

            </div>

          </div>
        </ScrollReveal>



      </section>

      <ScrollReveal>
        <section className="relative py-12 px-6 bg-gradient-to-b from-white to-[#f8fafc]">

          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
                A Message to Our Students
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Premium Text Card */}
            <div className="bg-white p-14 rounded-3xl shadow-2xl border border-gray-100 relative leading-8 text-lg text-gray-700">

              {/* Decorative Quote */}
              <span className="absolute -top-12 left-6 text-[120px] text-blue-100 font-serif select-none">
                “
              </span>

              <div className="relative z-10 space-y-8">

                <p className="text-xl font-semibold text-gray-900">
                  Dear Students,
                </p>

                <p>
                  I warmly welcome all of you to our
                  <span className="font-semibold text-blue-800">
                    {" "}New Ukhra Youth Computer Training Centre
                  </span>. By enrolling here, you have taken a meaningful step toward building a strong and independent future in today’s digital world.
                </p>

                <p>
                  In today’s competitive era,
                  <span className="font-semibold"> computer knowledge is not just a skill</span> —
                  it is a gateway to employment, entrepreneurship, and self-reliance.
                </p>

                <p>
                  Our state,
                  <span className="font-semibold text-blue-800"> West Bengal</span>,
                  has always been known for its rich culture, intelligence, and talent.
                  You are the new generation who will carry this legacy forward in the field of technology and innovation.
                </p>

                <p>
                  Through this training, you are not only learning computer applications but also building confidence, discipline, and professional skills.
                </p>

                {/* Encouragement Block */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-2xl">
                  <p className="font-semibold text-blue-900 text-lg mb-4">
                    I encourage you to:
                  </p>
                  <ul className="space-y-3">
                    <li>• Attend classes regularly and practice daily.</li>
                    <li>• Stay curious and keep learning beyond the classroom.</li>
                    <li>• Maintain discipline and respect within the centre.</li>
                    <li>• Use your digital knowledge responsibly and ethically.</li>
                    <li>• Believe in your abilities and aim high.</li>
                  </ul>
                </div>

                <p>
                  The government has provided this platform for your growth. Make full use of this opportunity. Believe in yourself, stay focused on your goals, and never be afraid of hard work.
                </p>

                <p>
                  Your success will not only make your family proud but will also bring pride to our centre and our community. Remember, success comes to those who are dedicated and hardworking. The government has provided you with this opportunity—make the most of it. Your growth is our pride, and your success will inspire many others in your community.
                </p>

                <p className="font-semibold text-gray-900">
                  Stay focused, stay positive, and keep moving forward.
                </p>


              </div>

            </div>

          </div>

        </section>
      </ScrollReveal>

      {/* ================= STATS ================= */}
      <section className="bg-[#0f172a] py-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              { value: 2009, label: "Established" },
              { value: 16, label: "Years of Excellence", suffix: "+" },
              { value: 4400, label: "Students Trained", suffix: "+" },
              { value: 100, label: "Practical Focus", suffix: "%" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-14 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
                  <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                    <AnimatedNumber value={item.value} suffix={item.suffix || ""} />
                  </h2>
                  <p className="text-gray-200 text-lg">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>



      {/* ================= VISION MISSION ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-7">
                To become a center of excellence in digital education
                by fostering innovation, professionalism, and continuous growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Deliver industry-aligned programs</li>
                <li>• Bridge academic & industry gaps</li>
                <li>• Develop technical confidence</li>
                <li>• Prepare students for long-term success</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-32 bg-[#0f172a] text-white text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-300 leading-8">
              With over 16 years of legacy and 4,400+ trained students,
              we are dedicated to transforming learners into confident,
              future-ready professionals.
            </p>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

export default About;