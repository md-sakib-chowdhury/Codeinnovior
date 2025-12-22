
import { useState } from "react";
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

import c from "./c.png";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
import c4 from "./c4.png";
import c5 from "./c5.png";

export default function Courses() {
  const [active, setActive] = useState("All Course");

  const categories = [
    { name: "All Course", icon: <FaLayerGroup /> },
    { name: "UI/UX Design", icon: <BsBrush /> },
    { name: "Web Development", icon: <FaCode /> },
    { name: "Cyber Security", icon: <MdSecurity /> },
    { name: "Graphics Design", icon: <BsBrush /> },
    { name: "App Development", icon: <FaMobileAlt /> },
    { name: "Software QA", icon: <FaBug /> },
    { name: "HR & General", icon: <FaUsers /> },
    { name: "Business Development", icon: <FaBriefcase /> },
  ];

  const courses = [
    { title: "UI/UX Design Masterclass", image: c, cat: "UI/UX Design" },
    { title: "Complete Web Development", image: c1, cat: "Web Development" },
    { title: "Professional Graphics Design", image: c2, cat: "Graphics Design" },
    { title: "Cyber Security Essentials", image: c3, cat: "Cyber Security" },
    { title: "Mobile App Development", image: c4, cat: "App Development" },
    { title: "Business Development Strategy", image: c5, cat: "Business Development" },
  ];

  const filtered =
    active === "All Course" ? courses : courses.filter(c => c.cat === active);

  return (
   <section className="w-full bg-[#fafafa] py-20 sm:py-98 lg:py-36 px-4 sm:px-6 lg:px-20 mt-32 lg:mt-80">
  <div className="max-w-[1900px] mx-auto">

    {/* Header */}
 <div className="text-center mb-12 sm:mb-16 mt-34 sm:mt-38 lg:mt-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
    All Career-Building Courses At{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
      Codeinnovior.
    </span>
  </h2>




      <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl
                    max-w-8xl mx-auto leading-relaxed">
        Level Up Your Skills With Our Expertly Crafted, Hands-On Training Programs.
        Whether You're Just Starting Out Or Upskilling For The Next Big Opportunity —
        We've Got The Course For You.
      </p>
    </div>

    {/* Categories */}
    <div className="flex flex-wrap justify-center lg:justify-start
                    gap-3 sm:gap-4 mb-12 lg:mb-14">

      {categories.map((c, i) => {
        const iconColors = [
          "text-purple-500",
          "text-blue-500",
          "text-pink-500",
          "text-orange-500",
          "text-green-500",
          "text-red-500",
          "text-yellow-500",
          "text-indigo-500",
          "text-cyan-500",
        ];

        return (
          <button
            key={i}
            onClick={() => setActive(c.name)}
            className={`flex items-center gap-2 sm:gap-3
              px-6 sm:px-10 lg:px-14
              py-3 sm:py-5 lg:py-7
              rounded-full
              text-sm sm:text-base lg:text-lg
              font-medium transition-all
              ${
                active === c.name
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border hover:bg-purple-100/30 hover:border-purple-200"
              }`}
          >
            <span className={active === c.name ? "" : iconColors[i]}>
              {c.icon}
            </span>
            {c.name}
          </button>
        );
      })}
    </div>

    {/* Course Cards */}
  <div
  className="
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    gap-6 sm:gap-8
    w-full max-w-[1900px] mx-auto
  "
>
  {filtered.map((course, i) => (
    <div
      key={i}
      className="
        bg-white rounded-3xl shadow-lg overflow-hidden
        flex flex-col
        min-h-[520px] sm:min-h-[560px]
        lg:min-h-[680px] xl:min-h-[740px]
      "
    >
      {/* Image Section */}
      <div
        className="
          relative w-full
          h-56 sm:h-64
          lg:h-80 xl:h-96
        "
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-500 text-xl sm:text-2xl">
            ⭐⭐⭐⭐⭐
          </span>
          <span className="font-semibold text-orange-500 ml-2 text-lg sm:text-xl">
            4.9
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-6 line-clamp-2">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            🕐 <span>19hr 30min</span>
          </div>
          <div className="flex items-center gap-2">
            📚 <span>29 Lectures</span>
          </div>
          <div className="flex items-center gap-2">
            👥 <span>150+ Students</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-500">
            ৳ 2000.00
          </p>

          <button
            className="
              bg-blue-600 hover:bg-blue-700
              text-white
              px-5 sm:px-6 py-2.5 sm:py-3
              rounded-full
              text-sm sm:text-base
              font-medium
              flex items-center gap-2
              transition
            "
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
  <div className="flex justify-center mt-14">
  <button
    className="
      group relative overflow-hidden
      flex items-center justify-center
      px-10 sm:px-16 py-4 sm:py-5
      rounded-xl text-lg sm:text-xl font-semibold
      text-white shadow-xl
      border-2 border-transparent
      transition-all duration-300
    "
  >
    {/* GRADIENT BASE */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-purple-600 to-purple-700
        transition-opacity duration-300
        group-hover:opacity-0
        rounded-xl
      "
    ></span>

    {/* WHITE HOVER OVERLAY */}
    <span
      className="
        absolute inset-0
        bg-white
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        rounded-xl
        border-2 border-purple-600
      "
    ></span>

    {/* LEFT ARROW */}
    <span
      className="
        absolute left-6 z-10
        transition-all duration-300
        group-hover:opacity-0
        group-hover:-translate-x-3
        text-white group-hover:text-purple-600
      "
    >
      →
    </span>

    {/* TEXT */}
    <span
      className="
        relative z-10
        transition-colors duration-300
        group-hover:text-purple-600
      "
    >
      Browse All
    </span>

    {/* RIGHT ARROW */}
    <span
      className="
        absolute right-6 z-10
        opacity-0
        transition-all duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
        text-purple-600
      "
    >
      →
    </span>
  </button>
</div>

</section>

  );
}
