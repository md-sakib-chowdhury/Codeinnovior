// import ui1 from "./ui1.png";
// import ui2 from "./ui2.png";
// import ui3 from "./ui3.png";
// import ui from "./ui.png";

// // stats section images - EXACT file names as shown in your folder
// import frame1 from "./Frame.png";
// import frame2 from "./Frame2.png";
// import frame3 from "./Frame3.png";

// export default function Hero() {
//   return (
//     <>
//       {/* --- Heading --- */}
//       <div className="text-center pt-20 px-4">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
//           Browse Top Essential Career{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
//             Courses.
//           </span>
//         </h1>

//         <p className="text-gray-800 text-base md:text-lg lg:text-xl max-w-3xl lg:max-w-[900px] mt-4 mx-auto">
//           Equip Yourself With The Most In-Demand Skills To Thrive In Today's
//           Tech-Driven Job Market. Choose A Course That Shapes Your Future.
//         </p>
//       </div>

//       {/* --- Hover Effect Style --- */}
//     {/* --- Hover Effect Style --- */}
//       <style>{`
//         .course-card {
//           transition: all 0.35s ease;
//         }
//         .course-card:hover {
//           background: white !important;
//           box-shadow: 0px 20px 35px rgba(0,0,0,0.15);
//         }
//         .course-card:hover h3,
//         .course-card:hover .divider {
//           color: inherit;
//         }
        
//         /* Individual card hover colors */
//         .course-card.blue-card:hover h3 {
//           background: linear-gradient(to bottom right, rgb(96, 165, 250), rgb(37, 99, 235));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .course-card.blue-light-card:hover h3 {
//           background: linear-gradient(to bottom right, rgb(125, 211, 252), rgb(59, 130, 246));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .course-card.pink-card:hover h3 {
//           background: linear-gradient(to bottom right, rgb(244, 114, 182), rgb(168, 85, 247));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .course-card.purple-card:hover h3 {
//           background: linear-gradient(to bottom right, rgb(168, 85, 247), rgb(192, 38, 211));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
        
//         /* Logo filter for gradient effect on hover */
//         .course-card.blue-card:hover img {
//           filter: hue-rotate(0deg) saturate(1.5);
//         }
//         .course-card.blue-light-card:hover img {
//           filter: hue-rotate(10deg) saturate(1.5);
//         }
//         .course-card.pink-card:hover img {
//           filter: hue-rotate(-30deg) saturate(1.5);
//         }
//         .course-card.purple-card:hover img {
//           filter: hue-rotate(-50deg) saturate(1.5);
//         }
//       `}</style>

//       {/* --- Cards --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-6 md:px-12 lg:px-16 py-26">
//         <div className="course-card blue-card p-10 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 text-white cursor-pointer text-center min-h-[280px] max-w-[320px] mx-auto w-full">
//           <div className="flex justify-center">
//             <img src={ui1} alt="UI/UX" className="h-16 mb-5 transition-all duration-300" />
//           </div>
//           <h3 className="text-2xl font-bold mb-3 transition-all duration-300">UI/UX Design</h3>
//           <div className="w-full h-[1px] bg-white/30 divider"></div>
//         </div>

//         <div className="course-card blue-light-card p-10 rounded-3xl bg-gradient-to-br from-blue-300 to-blue-500 text-white cursor-pointer text-center min-h-[280px] max-w-[320px] mx-auto w-full">
//           <div className="flex justify-center">
//             <img src={ui} alt="Graphics" className="h-16 mb-5 transition-all duration-300" />
//           </div>
//           <h3 className="text-2xl font-bold mb-3 transition-all duration-300">Graphics Design</h3>
//           <div className="w-full h-[1px] bg-white/30 divider"></div>
//         </div>

//         <div className="course-card pink-card p-10 rounded-3xl bg-gradient-to-br from-pink-400 to-purple-500 text-white cursor-pointer text-center min-h-[280px] max-w-[320px] mx-auto w-full">
//           <div className="flex justify-center">
//             <img src={ui2} alt="Web Dev" className="h-16 mb-5 transition-all duration-300" />
//           </div>
//           <h3 className="text-2xl font-bold mb-3 transition-all duration-300">Web Development</h3>
//           <div className="w-full h-[1px] bg-white/30 divider"></div>
//         </div>

//         <div className="course-card purple-card p-10 rounded-3xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white cursor-pointer text-center min-h-[280px] max-w-[320px] mx-auto w-full">
//           <div className="flex justify-center">
//             <img src={ui3} alt="Cyber Security" className="h-16 mb-5 transition-all duration-300" />
//           </div>
//           <h3 className="text-2xl font-bold mb-3 transition-all duration-300">Cyber Security</h3>
//           <div className="w-full h-[1px] bg-white/30 divider"></div>
//         </div>
//       </div>

//       {/* --- Browse All Button --- */}
//       <div className="flex justify-center pb-20">
//         <button className="group flex items-center gap-2 px-10 py-4 rounded-2xl text-lg font-semibold bg-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300">
//           Browse All
//           <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
//             →
//           </span>
//         </button>
//       </div>

//       {/* ================= Boost Your Skills Section ================= */}
//       <section className="py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-purple-50">
//         {/* Badge */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-purple-600 font-medium">
//             <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//             We Offer
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-center text-4xl md:text-4xl lg:text-6xl font-extrabold mb-8">
//           Boost Your Skills
//         </h2>

//         {/* Text */}
//         <p className="text-center text-gray-600 max-w-8xl mx-auto mb-16 text-2xl">
//           From Critical Skills To Technical Topics, We Support Your Professional
//           Development With Courses That Help You Grow And Succeed.
//         </p>

//         {/* Stats Cards */}
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-8xl mx-auto">
//   <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
//     <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-red-100">
//       <img src={frame1} alt="Hours" className="w-8 h-8 md:w-10 md:h-10" />
//     </div>
//     <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">100+</h3>
//     <p className="text-gray-500 uppercase text-xs md:text-sm">
//       Hours of Content
//     </p>
//   </div>

//   <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
//     <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-blue-100">
//       <img src={frame2} alt="Courses" className="w-8 h-8 md:w-10 md:h-10" />
//     </div>
//     <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">30+</h3>
//     <p className="text-gray-500 uppercase text-xs md:text-sm">Course</p>
//   </div>

//   <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px] sm:col-span-2 md:col-span-1">
//     <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-purple-100">
//       <img src={frame3} alt="Students" className="w-8 h-8 md:w-10 md:h-10" />
//     </div>
//     <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">20k+</h3>
//     <p className="text-gray-500 uppercase text-xs md:text-sm">Student</p>
//   </div>
// </div>
        
//       </section>
//     </>
//   );
// }
import ui1 from "./ui1.png";
import ui2 from "./ui2.png";
import ui3 from "./ui3.png";
import ui from "./ui.png";

// stats section images - EXACT file names as shown in your folder
import frame1 from "./Frame.png";
import frame2 from "./Frame2.png";
import frame3 from "./Frame3.png";

export default function Hero() {
  return (
    <>
      {/* --- Heading --- */}
   
{/* --- Heading --- */}
<div className="text-center pt-20 px-4 md:px-8 lg:px-20 mt-96">
  <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
    Browse Top Essential Career{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
      Courses.
    </span>
  </h1>
<p className="text-gray-800 text-base md:text-lg lg:text-xl max-w-[1600px] mx-auto px-4 text-lg md:text-xl lg:text-2xl mt-10">
    Equip Yourself With The Most In-Demand Skills To Thrive In Today's Tech-Driven Job Market. Choose A Course That Shapes Your Future.
  </p>
</div>

{/* --- Hover Effect Style --- */}
<style>{`
  .course-card {
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
  }

  .course-icon,
  .course-title {
    transition: all 0.35s ease;
  }

  .course-card:hover {
    background: white !important;
    transform: translateY(-8px);
    box-shadow: 0px 25px 50px rgba(0,0,0,0.25);
  }

  /* UI/UX */
  .uiux:hover .course-title,
  .uiux:hover .course-icon {
    color: #2563eb;
    filter: brightness(0) saturate(100%) invert(28%) sepia(92%) saturate(4725%) hue-rotate(206deg) brightness(99%) contrast(101%);
  }

  /* Graphics */
  .graphics:hover .course-title,
  .graphics:hover .course-icon {
    color: #3b82f6;
    filter: brightness(0) saturate(100%) invert(42%) sepia(86%) saturate(4505%) hue-rotate(202deg) brightness(96%) contrast(101%);
  }

  /* Web */
  .web:hover .course-title,
  .web:hover .course-icon {
    color: #ec4899;
    filter: brightness(0) saturate(100%) invert(46%) sepia(82%) saturate(4361%) hue-rotate(300deg) brightness(99%) contrast(101%);
  }

  /* Cyber */
  .cyber:hover .course-title,
  .cyber:hover .course-icon {
    color: #9333ea;
    filter: brightness(0) saturate(100%) invert(27%) sepia(48%) saturate(5431%) hue-rotate(256deg) brightness(96%) contrast(101%);
  }
`}</style>

{/* --- Cards --- */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-16 py-8 max-w-[1900px] mx-auto mt-10">

  {/* UI/UX */}
  <div className="course-card uiux p-12 rounded-[32px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white cursor-pointer text-center min-h-[280px] flex flex-col items-center justify-center shadow-xl">
    <div className="flex justify-center mb-8">
      <img src={ui1} alt="UI/UX" className="course-icon h-20 w-20 object-contain filter brightness-0 invert" />
    </div>
    <h3 className="course-title text-2xl font-bold">UI/UX Design</h3>
  </div>

  {/* Graphics */}
  <div className="course-card graphics p-12 rounded-[32px] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 text-white cursor-pointer text-center min-h-[280px] flex flex-col items-center justify-center shadow-xl">
    <div className="flex justify-center mb-8">
      <img src={ui} alt="Graphics" className="course-icon h-20 w-20 object-contain filter brightness-0 invert" />
    </div>
    <h3 className="course-title text-2xl font-bold">Graphics Design</h3>
  </div>

  {/* Web */}
  <div className="course-card web p-12 rounded-[32px] bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 text-white cursor-pointer text-center min-h-[280px] flex flex-col items-center justify-center shadow-xl">
    <div className="flex justify-center mb-8">
      <img src={ui2} alt="Web" className="course-icon h-20 w-20 object-contain filter brightness-0 invert" />
    </div>
    <h3 className="course-title text-2xl font-bold">Web Development</h3>
  </div>

  {/* Cyber */}
  <div className="course-card cyber p-12 rounded-[32px] bg-gradient-to-br from-purple-500 via-purple-600 to-fuchsia-600 text-white cursor-pointer text-center min-h-[280px] flex flex-col items-center justify-center shadow-xl">
    <div className="flex justify-center mb-8">
      <img src={ui3} alt="Cyber" className="course-icon h-20 w-20 object-contain filter brightness-0 invert" />
    </div>
    <h3 className="course-title text-2xl font-bold">Cyber Security</h3>
  </div>

</div>

{/*button*/}
<div className="flex justify-center pb-34 mt-14">
  <button className="group relative flex items-center justify-center px-18 py-5 rounded-xl text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl
    hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-500 overflow-hidden">

    {/* Text */}
    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
      Browse All
    </span>

    {/* Arrow */}
    <span className="absolute left-4 text-3xl transition-all duration-500 group-hover:left-full group-hover:-translate-x-full group-hover:text-white">
      →
    </span>

  </button>
</div>


      {/* ================= Boost Your Skills Section ================= */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-purple-50">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-purple-600 font-medium">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            We Offer
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-4xl lg:text-6xl font-extrabold mb-8">
          Boost Your Skills
        </h2>

        {/* Text */}
        <p className="text-center text-gray-600 max-w-8xl mx-auto mb-16 text-2xl">
          From Critical Skills To Technical Topics, We Support Your Professional
          Development With Courses That Help You Grow And Succeed.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-8xl mx-auto">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-red-100">
              <img src={frame1} alt="Hours" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">100+</h3>
            <p className="text-gray-500 uppercase text-xs md:text-sm">
              Hours of Content
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-blue-100">
              <img src={frame2} alt="Courses" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">30+</h3>
            <p className="text-gray-500 uppercase text-xs md:text-sm">Course</p>
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:scale-105 transition min-h-[320px] md:min-h-[360px] lg:min-h-[400px] sm:col-span-2 md:col-span-1">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-purple-100">
              <img src={frame3} alt="Students" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">20k+</h3>
            <p className="text-gray-500 uppercase text-xs md:text-sm">Student</p>
          </div>
        </div>
        
      </section>
    </>
  );
}