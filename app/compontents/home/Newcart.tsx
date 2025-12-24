import kidsimg from "./kidsimg.png";
import rImg from "./R.png";

import f from "./f.png";
import f2 from "./f2.png";
import f3 from "./f3.png";

export default function Newcart() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden mt-20">

      {/* ================= TOP TITLE ================= */}
      <div className="w-full bg-gradient-to-b from-[#fff7f3] to-white py-20 px-4">
        <div className="max-w-[1900px] mx-auto ">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <p className="text-sm font-medium text-orange-600">
                Why we are Unique?
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-6xl sm:text-5xl lg:text-8xl font-extrabold text-black mb-6">
            Unmatched Unique Features
          </h2>

          {/* Description */}
          <p className="relative text-center text-gray-800  max-w-[1800px] mx-auto text-lg md:text-xl lg:text-2xl mt-10">
            Discover A Range Of Features Designed To Elevate Your Experience,
            Combining Innovation, Functionality, And Uniqueness To Meet Your Needs Like Never Before.
          </p>

          {/* ================= FEATURE CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-8 lg:gap-12 
                px-4 mt-10 
                max-w-[1900px] mx-auto">
            {[
              {
                title: "Tailored Learning Experiences",
                text: "We Offer Customized Learning Experiences Designed To Empower Individuals To Launch Their Careers With Confidence.",
                img: f,
              },
              {
                title: "Comprehensive Course Offerings",
                text: "We Offers A Variety Of Courses In Web Development, Cyber Security, UI/UX Design, & Graphic Design With Industry Level Training Etc.",
                img: f2,
              },
              {
                title: "Hands-On Projects & Expert Mentorship",
                text: "Students Enjoy Hands-On Projects, Interactive Workshops, & Guidance From Industry Professionals To Build Practical Skills And Real-World Expertise.",
                img: f3,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        p-10 sm:p-12 lg:p-14
        text-center
        shadow-lg
        min-h-[420px] sm:min-h-[460px] lg:min-h-[520px]
        flex flex-col
      "
              >
                {/* ICON */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 
                      mx-auto mb-8 rounded-full 
                      bg-gradient-to-br from-orange-100 to-pink-100 
                      flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                     font-bold text-black mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MOVING TEXT ================= */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 16s linear infinite;
        }
        .outline-text {
          -webkit-text-stroke: 3px #8b5cf6;
          color: transparent;
        }
        @media (max-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 2px #8b5cf6;
          }
        }
      `}</style>

      <div className="relative mt-86 flex justify-center overflow-hidden w-full ">
        <div className="w-[90%] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-10 font-extrabold tracking-wide
                          text-[32px] sm:text-[48px] md:text-[64px] lg:text-[70px]">

            <span className="text-purple-600">EMPOWERING INNOVATION</span>
            <span className="mx-6 text-purple-600">•</span>
            <span className="outline-text">SHAPING FUTURES</span>
            <span className="mx-6 outline-text">•</span>

            <span className="text-purple-600">EMPOWERING INNOVATION</span>
            <span className="mx-6 text-purple-600">•</span>
            <span className="outline-text">SHAPING FUTURES</span>
          </div>
        </div>
      </div>

      {/* ================= KIDS PROGRAM ================= */}
      <div className="w-full flex justify-center py-20 bg-white">
        <div className="relative w-[190%] max-w-[1600px] rounded-[80px] overflow-hidden px-12 py-16 md:px-20 md:py-24 lg:px-24 lg:py-28 flex flex-col lg:flex-row justify-between min-h-[800px]">

          {/* Background */}
          <img
            src={rImg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover rounded-[80px]"
          />

          {/* Left Content */}
          <div className="lg:w-[55%] relative z-10 text-white space-y-6">
            <div className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded-lg w-fit">
              📹 Kids Program
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Codeinnovior Kids Program
            </h1>

            <p className="max-w-xl text-lg md:text-xl">
              Fun Learning, Bright Futures! Unlock your child's potential with
              playful tech learning!
            </p>

            <div className="space-y-3 font-semibold">
              <p>✱ AGES: 8 TO 14</p>
              <p>✱ WEEKEND & EVENING BATCHES</p>
              <p>✱ ONLINE & IN-PERSON OPTIONS</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 mt-8 sm:mt-12">
              {/* Enroll Your Child Today */}
              <button className="group flex items-center justify-center px-8 sm:px-14 py-4 sm:py-5 bg-green-500 text-white rounded-2xl text-base sm:text-lg md:text-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-green-500">
                <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
                  <span className="text-xl bg-white">📱</span>
                  <span>Enroll Your Child Today</span>
                </span>
              </button>

              {/* View Demo Class (Normal White → Hover Transparent) */}
              <button className="group flex items-center justify-center px-8 sm:px-14 py-4 sm:py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-2xl shadow-lg text-base sm:text-lg md:text-xl transition-all duration-300 hover:bg-transparent hover:text-purple-600 hover:border-purple-600">
                <span className="flex items-center gap-4 transition-all duration-300 group-hover:flex-row-reverse">
                  <span className="text-xl  bg-white">🎬</span>
                  <span>View Demo Class</span>
                </span>
              </button>
            </div>



          </div>

          {/* Right Image */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end mt-14 lg:mt-0 relative z-10">
            <img src={kidsimg} className="w-[520px]" alt="Kids" />
          </div>
        </div>
      </div>


    </div>
  );
}
