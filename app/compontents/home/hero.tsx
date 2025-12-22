import ui from "./ui.png";
import ui1 from "./ui1.png";
import ui2 from "./ui2.png";
import ui3 from "./ui3.png";

import frame1 from "./Frame.png";
import frame2 from "./Frame2.png";
import frame3 from "./Frame3.png";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="text-center max-w-8xl pt-120 px-4 sm:px-6 lg:px-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Browse Top Essential Career{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
            Courses.
          </span>
        </h1>

        <p className="text-gray-800 max-w-[1600px] mx-auto text-lg md:text-xl lg:text-2xl mt-10">
          Equip Yourself With The Most In-Demand Skills To Thrive In Today's
          Tech-Driven Job Market. Choose A Course That Shapes Your Future.
        </p>


        {/* HERO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-8xl mx-auto">
          {[
            { img: ui, title: "UI/UX Design", bg: "from-blue-400 to-blue-600" },
            { img: ui1, title: "Graphics Design", bg: "from-blue-300 to-blue-500" },
            { img: ui2, title: "Web Development", bg: "from-pink-400 to-purple-500" },
            { img: ui3, title: "Cyber Security", bg: "from-purple-500 to-fuchsia-600" },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl bg-gradient-to-br ${c.bg} text-white min-h-[260px]
              flex flex-col items-center justify-center shadow-xl`}
            >
              <img src={c.img} className="h-16 sm:h-20 mb-6 brightness-0 invert" />
              <h3 className="text-xl sm:text-2xl font-bold">{c.title}</h3>
            </div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="flex justify-center mt-14">
          <button className="px-10 sm:px-16 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold
          bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl
          hover:bg-white hover:text-purple-600 border-2 border-transparent hover:border-purple-600 transition">
            Browse All →
          </button>
        </div>
      </section>

      {/* ================= BOOST YOUR SKILLS ================= */}
      <section className="relative mt-32 px-4 sm:px-6 lg:px-20">
        {/* Badge */}
        
        <div className="relative flex justify-center mb-8 mt-40">
          <div className="flex items-center gap-2 px-8 py-4 border-2 border-white rounded-full
                          bg-white/80 backdrop-blur-md shadow text-purple-600 font-medium">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
            We Offer
          </div>
        </div>

        <h2 className="relative text-center text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6">
          Boost Your Skills
        </h2>

        <p className="relative text-center text-gray-800  max-w-[1600px] mx-auto text-lg md:text-xl lg:text-2xl mt-10">
          From Critical Skills To Technical Topics, We Support Your Professional
          Development With Courses That Help You Grow And Succeed.
        </p>




        {/* Stats */}
      {/* Stats */}
<div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12
                max-w-8xl h-[500px] mx-auto mt-24 lg:mt-40">

  {[
    ["100+", "Hours of Content", frame1],
    ["30+", "Course", frame2],
    ["20k+", "Student", frame3],
  ].map(([num, label, img], i) => (
    <div
      key={i}
      className="rounded-[28px] lg:rounded-[36px]
                 bg-white/55 backdrop-blur-xl
                 p-8 sm:p-10 lg:p-14
                 text-center
                 shadow-[0_35px_90px_rgba(138,56,245,0.18)]
                 border-2 lg:border-4 border-white"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36
                      mx-auto mb-6 lg:mb-10
                      flex items-center justify-center
                      rounded-full bg-white shadow-xl">
        <img
          src={img}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-contain"
        />
      </div>

      <h3 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-2 lg:mb-4">
        {num}
      </h3>
      <p className="text-gray-700 uppercase tracking-widest text-sm sm:text-base">
        {label}
      </p>
    </div>
  ))}
</div>

        

      </section>
    </>
  );
}
