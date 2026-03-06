import contactBg from "../assets/images/coursebg.jpg";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <div>

      {/* ===== PREMIUM HERO ===== */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-bold text-white tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg">
            Let’s connect and build your future together.
          </p>
        </div>
      </section>


      {/* ===== ELITE CONTACT SECTION ===== */}
      <section className="py-28 bg-[#f1f5f9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-stretch">

          {/* LEFT SIDE FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500">
            <h3 className="text-2xl font-semibold text-[#0f172a] mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              ></textarea>

              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
                Send Message
              </button>
            </form>
          </div>


          {/* RIGHT SIDE – CLASSY GLASS CARD */}
          <div className="relative group">

            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-[#0f172a]/95 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/10 text-white overflow-hidden">

              {/* Decorative Circle */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>

              <h3 className="text-3xl font-bold mb-8 tracking-wide">
                Our Address
              </h3>

              <div className="space-y-6 text-gray-300">

                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-400 mt-1" size={22} />
                  <p>
                    Near New Sannyasi Kali Mandir,  
                    Ananda More, MG Rd,  
                    Ukhra, West Bengal 713363
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-orange-400" size={20} />
                  <p>9749616555 / 9732081768</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-orange-400" size={20} />
                  <p>info@yourinstitute.com</p>
                </div>

              </div>

              {/* Bottom Accent Line */}
              <div className="mt-10 h-[2px] w-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;