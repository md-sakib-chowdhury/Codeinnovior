import { useState } from "react";
import {
  HiOutlineAcademicCap,
} from "react-icons/hi";
import {
  FaCode,
  FaMobileAlt,
  FaBriefcase,
  FaBug,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { BsBrush } from "react-icons/bs";

// images
import c from "./c.png";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
import c4 from "./c4.png";
import c5 from "./c5.png";

export default function Cart() {
  const [active, setActive] = useState("All Course");

  /* ---------- CATEGORIES ---------- */
  const categories = [
    { name: "All Course", icon: <FaLayerGroup /> },
    { name: "UI/UX Design", icon: <BsBrush /> },
    { name: "Web Development", icon: <FaCode /> },
    { name: "Cyber Security", icon: <MdSecurity /> },
    { name: "Graphics Design", icon: <BsBrush /> },
    { name: "App Development", icon: <FaMobileAlt /> },
    { name: "Software Quality Assurance", icon: <FaBug /> },
    { name: "HR & General", icon: <FaUsers /> },
    { name: "Business Development", icon: <FaBriefcase /> },
  ];

  /* ---------- COURSES ---------- */
  const courses = [
    {
      title: "UI/UX Design Masterclass from Scratch",
      image: c,
      cat: "UI/UX Design",
    },
    {
      title: "Complete Web Development Bootcamp",
      image: c1,
      cat: "Web Development",
    },
    {
      title: "Professional Graphics Design Course",
      image: c2,
      cat: "Graphics Design",
    },
    {
      title: "Cyber Security Essentials",
      image: c3,
      cat: "Cyber Security",
    },
    {
      title: "Mobile App Development",
      image: c4,
      cat: "App Development",
    },
    {
      title: "Business Development Strategy",
      image: c5,
      cat: "Business Development",
    },
  ];

  const filtered =
    active === "All Course"
      ? courses
      : courses.filter((c) => c.cat === active);

  return (
    <section className="w-full bg-[#fafafa] py-20 px-4 sm:px-6 lg:px-20">

      {/* ---------- HEADING ---------- */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          All Career-Building Courses At{" "}
          <span className="text-orange-500">Code</span>
          <span className="text-yellow-400">innovior</span>
          <span className="text-purple-500">.</span>
        </h1>


 





      </div>

<div className="w-full mt-6 px-4">
  <div className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-9xl mx-30">
    <p className="text-left">
      Level Up Your Skills With Our Expertly Crafted, Hands-On Training Programs. Whether You're Just Starting Out Or Upskilling For The Next Big Opportunity — We've Got
    </p>
    <p className="text-center">
      The Course For You.
    </p>
  </div>
</div>


      {/* ---------- CATEGORY BUTTONS ---------- */}
      <div className="max-w-8xl mx-20 mt-12 flex flex-wrap gap-4 justify-start">
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(c.name)}
            className={`group flex items-center gap-3 px-6 py-3 rounded-full border 
              transition-all duration-300 text-sm sm:text-base font-medium
              min-w-[220px]
              ${active === c.name
                ? "bg-[#ff5a3c] text-white border-[#ff5a3c]"
                : "bg-white text-gray-800 border-gray-200 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700"
              }`}
          >
            <span
              className={`w-9 h-9 flex items-center justify-center rounded-full
                transition-all duration-300
                ${active === c.name
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-blue-600 group-hover:bg-purple-100 group-hover:text-purple-600"
                }`}
            >
              {c.icon}
            </span>
            {c.name}
          </button>
        ))}
      </div>

      {/* ---------- COURSES GRID ---------- */}
      <div className="max-w-8xl mx-20 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-[28px] shadow-lg overflow-hidden flex flex-col
              h-[480px] sm:h-[520px] lg:h-[560px]"
          >
            {/* image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 lg:h-60 object-cover"
              />
              <span className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-purple-600 shadow">
                🔥 {course.cat}
              </span>
            </div>

            {/* content */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-2 text-sm">
                ⭐⭐⭐⭐⭐ <span className="text-orange-500 font-semibold">4.9</span>
              </div>

              <h2 className="text-xl lg:text-2xl font-bold mt-2 leading-snug">
                {course.title}
              </h2>

              <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                Learn industry-ready skills with expert mentors and hands-on
                projects to accelerate your career growth.
              </p>

              <div className="flex gap-4 text-sm text-gray-600 mt-4">
                <span>⏳ 19hr 30min</span>
                <span>📚 29 Lectures</span>
                <span>👥 150+ Students</span>
              </div>

              <div className="flex-1"></div>

              {/* bottom */}
              <div className="flex items-center justify-between mt-6">
                <p className="text-2xl font-bold text-green-500">
                  ৳ 2000.00
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-full shadow hover:scale-105 transition">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
