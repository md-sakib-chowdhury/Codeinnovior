import { useEffect, useState } from "react";
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
      {/* ================= NAVBAR (Desktop Only) ================= */}
      <nav
        className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1800px] z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white/80"}
        backdrop-blur-md rounded-2xl`}
      >
        <div className="px-10 h-20 flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="CodeInnovior"
              className="h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-8 text-lg font-medium text-gray-800">
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#about" className="hover:text-orange-500 transition">About Us</a>
            <a href="#courses" className="hover:text-orange-500 transition">Browse Course</a>
            <a href="#success" className="hover:text-orange-500 transition">Success Story</a>
            <a href="#blogs" className="hover:text-orange-500 transition">Blogs</a>
          </div>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            {/* Kids Program Button */}
            <button className="group flex items-center px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all duration-300 bg-[#e82074] hover:bg-white hover:text-[#e82074]">
              <span className="flex items-center gap-3 transition-all duration-300 group-hover:flex-row-reverse">
                <div className="relative w-8 h-6 flex items-center justify-center">
                  <img
                    src={vector2}
                    className="absolute w-full h-full transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90"
                    alt="icon"
                  />
                  <img
                    src={vector1}
                    className="absolute w-5 h-5 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90"
                    alt="icon"
                  />
                </div>
                <span>Kids Program</span>
              </span>
            </button>

            {/* Contact Button */}
            <button className="group flex items-center px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all duration-300 bg-[#9747ff] hover:bg-white hover:text-[#9747ff]">
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
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen pt-20 px-32 flex flex-col items-center relative overflow-visible mx-10 rounded-3xl mt-10"
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
          <div className="relative w-4 h-4 flex items-center justify-center">
            <img src={dot} alt="dot" className="w-3 h-3 relative z-10" />
            <span className="absolute w-4 h-4 bg-purple-500 opacity-30 blur-md rounded-full"></span>
          </div>
          <p className="text-purple-500 font-semibold text-xl whitespace-nowrap">
            Empowering Innovators of Tomorrow
          </p>
        </div>

        {/* MAIN HEADING */}
        <h1 className="font-extrabold text-7xl mt-8 leading-tight tracking-wide text-center">
          Build Skills. Create Impact. <br />
          Lead the{" "}
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
            Future
          </span>
          <span className="text-purple-500">.</span>
        </h1>

        {/* SUB TEXT */}
        <p className="mt-8 text-2xl px-32 text-black leading-relaxed tracking-wide text-center">
          Codeinnovior is where future-ready tech talent begins. From beginner to pro, we guide every step
          of your innovation journey.
        </p>

        {/* HERO BUTTONS */}
        <div className="flex justify-center gap-10 mt-12">
          <button className="group flex items-center justify-center px-14 py-5 bg-green-400 text-white rounded-2xl text-xl transition-all duration-300 hover:bg-white hover:text-green-500">
            <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
              <img
                src={v}
                alt="icon"
                className="w-8 h-8 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-[600%] group-hover:hue-rotate-[85deg]"
              />
              <span>Find Course</span>
            </span>
          </button>

          <button className="group flex items-center justify-center px-14 py-5 bg-white text-purple-600 rounded-2xl shadow-lg text-xl transition-all duration-300 hover:bg-transparent hover:text-white">
            <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
              <img
                src={v2}
                alt="icon"
                className="w-8 h-8 transition-all duration-300"
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
            className="bg-white/40 backdrop-blur-xl border border-white shadow-2xl rounded-2xl p-4 max-w-[1200px] w-full mx-6 transition-transform duration-300"
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