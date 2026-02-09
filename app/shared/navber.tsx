
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "./imges/codeinnovior logo transparent 1.png";
import bg from "./bg.png";
import image from "./image.png";
import dot from "./dot.png";
import v from "./v.png";
import v2 from "./v2.png";
import vector1 from "../shared/vector 1.png";
import vector2 from "../shared/vector 2.png";
import vector3 from "../shared/vector3.png";

export default function HeroWithNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [shiftRight, setShiftRight] = useState(false);



  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations
  const scale = 1 + Math.min(scrollY / 1000, 0.3);
  const translateY = Math.min(scrollY / 3, 100);
  const textScale = Math.max(1 - scrollY / 2000, 0.7);
  const textOpacity = Math.max(1 - scrollY / 800, 0.3);
  const shiftValue = shiftRight ? 150 : 0;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed relative
        top-4 sm:top-8 lg:top-16 
        left-1/2 -translate-x-1/2 
        w-[92vw] sm:w-[88vw] lg:w-[86vw] xl:w-[90vw]
        z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white/80"}
        backdrop-blur-md rounded-2xl`}
      >
        <div
          className="
          max-w-7xl  
          px-4 sm:px-6 lg:px-8
          h-18 sm:h-18 lg:h-26
          flex items-center justify-between
          "
        >
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img
              src={logo}
              alt="CodeInnovior"
              className="h-9 sm:h-11 lg:h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div
            className="
            hidden lg:flex
            items-center
            ml-35
            gap-15 lg:gap-20
            flex-nowrap whitespace-nowrap
            text-[15px] lg:text-[25px]
            font-medium text-gray-800
            "
          >
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#about" className="hover:text-orange-500 transition">About Us</a>
            <a href="#courses" className="hover:text-orange-500 transition">Browse Course</a>
            <a href="#success" className="hover:text-orange-500 transition">Success Story</a>
            <a href="#blogs" className="hover:text-orange-500 transition">Blogs</a>
          </div>

          {/* Desktop Buttons - Kids Program & Contact */}
          <div className="hidden lg:flex items-center absolute right-10 gap-4 ">
            {/* Kids Program Button */}
            <button
              className="
            group
            flex items-center
            px-12 py-4
            rounded-xl
            font-bold
            text-white
            shadow-lg
            transition-all duration-300
            bg-[#e82074]
            hover:bg-white
            hover:text-[#e82074]
            min-w-[260px]
          "
            >
              <span className="flex items-center gap-3 transition-all duration-300 group-hover:flex-row-reverse">
                <div className="relative w-12 h-8 flex items-center justify-center">
                  {/* Base icon */}
                  <img
                    src={vector2}
                    className="absolute w-full h-full transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90"
                    alt="icon"
                  />
                  {/* Top icon */}
                  <img
                    src={vector1}
                    className="absolute w-6 h-6 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90"
                    alt="icon"
                  />
                </div>

                <span>Kids Program</span>
              </span>
            </button>

            {/* Contact Button */}
            <button
              className="
            group
            flex items-center
            px-14 py-6
            rounded-xl
            font-bold
            text-white
            shadow-lg
            transition-all duration-300
            bg-[#9747ff]
            hover:bg-white
            hover:text-[#9747ff]
            min-w-[160px]
          "
            >
              <span className="flex items-center gap-3 transition-all duration-300 group-hover:flex-row-reverse">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <img
                    src={vector3}
                    className="w-6 h-6 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90"
                    alt="icon"
                  />
                </div>
                <span>Contact</span>
              </span>
            </button>

          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            {/* Mobile Menu Links */}
            <a
              href="#home"
              className="block py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#courses"
              className="block py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Browse Course
            </a>
            <a
              href="#success"
              className="block py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Success Story
            </a>
            <a
              href="#blogs"
              className="block py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </a>

            {/* Mobile Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              {/* Kids Program Button */}
              <button
                className="
                  w-full
                  flex items-center justify-center
                  px-6 py-3
                  rounded-xl
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all duration-300
                "
                style={{ backgroundColor: "#e82074" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <img src={vector1} className="absolute w-5 h-5" />
                    <img src={vector2} className="absolute w-2.5 h-2.5" />
                  </div>
                  <span>Kids Program</span>
                </span>
              </button>

              {/* Contact Button */}
              <button
                className="
                  w-full
                  flex items-center justify-center
                  px-6 py-3
                  rounded-xl
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all duration-300
                "
                style={{ backgroundColor: "#9747ff" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <img src={vector3} className="w-5 h-5" />
                  <span>Contact</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen pt-20 px-12 sm:px-20 lg:px-32 flex flex-col items-center relative overflow-visible mx-10 rounded-3xl mt-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* HERO TEXT WITH DOT */}
        <div
          className="relative z-10 inline-flex items-center justify-center gap-2 mt-20 px-4 py-4 rounded-full border border-white/40 bg-white/40 backdrop-blur-md transition-all duration-700"
          style={{
            transform: `translateX(${shiftValue}px) scale(${textScale})`,
            opacity: textOpacity,
          }}
        >
          {/* DOT */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <img src={dot} alt="dot" className="w-3 h-3 relative z-10" />
            <span className="absolute w-4 h-4 bg-purple-500 opacity-30 blur-md rounded-full"></span>
          </div>

          {/* TEXT */}
          <p className="text-purple-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
            Empowering Innovators of Tomorrow
          </p>
        </div>

        {/* MAIN HEADING */}
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-6 md:mt-8 leading-tight tracking-wide text-center">
          Build Skills. Create Impact. <br className="hidden sm:block" />
          Lead the{" "}
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
            Future
          </span>
          <span className="text-purple-500">.</span>
        </h1>

        {/* SUB TEXT */}
        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-8 md:px-32 text-black leading-relaxed tracking-wide text-center">
          Codeinnovior is where future-ready tech talent begins. From beginner to pro, we guide every step
          of your innovation <span className="block">journey.</span>
        </p>

        {/* HERO BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 mt-8 sm:mt-12">
          <button className="group flex items-center justify-center px-8 sm:px-14 py-4 sm:py-5 bg-green-400 text-white rounded-2xl text-base sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-green-500">
            <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
              <img
                src={v}
                alt="icon"
                className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-[600%] group-hover:hue-rotate-[85deg]"
              />
              <span>Find Course</span>
            </span>
          </button>

          <button className="group flex items-center justify-center px-8 sm:px-14 py-4 sm:py-5 bg-white text-purple-600 rounded-2xl shadow-lg text-base sm:text-lg md:text-xl transition-all duration-300 hover:bg-transparent hover:text-white">
            <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
              <img
                src={v2}
                alt="icon"
                className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300"
              />
              <span>Learn More</span>
            </span>
          </button>
        </div>

        {/* IMAGE CARD */}
        <div
          className="w-full flex justify-center absolute bottom-0 left-0 right-0 z-20"
          style={{ transform: "translateY(50%)" }}
        >
          <div
            className="bg-white/40 backdrop-blur-xl border border-white shadow-2xl rounded-2xl p-4 max-w-[1200px] w-full mx-6 transition-transform duration-300 mt-50"
            style={{
              transform: `scale(${scale}) translateY(-${translateY}px) translateX(${shiftValue}px)`,
            }}
          >
            <img src={image} alt="frame" className="w-full rounded-4xl mt-2" />


          </div>
        </div>
      </section>
    </>
  );
}
