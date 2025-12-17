// // import kidsimg from "./kidsimg.png";

// // export default function Newcart() {
// //     return (
// //         <div className="w-full flex flex-col items-center py-12">

// //             {/* Top Title */}
// //             <h2 className="text-center max-w-4xl text-lg md:text-2xl lg:text-3xl font-medium mb-12 px-4">
// //                 Discover A Range Of Features Designed To Elevate Your Experience, Combining Innovation,
// //                 Functionality, And Uniqueness To Meet Your Needs Like Never Before.
// //             </h2>

// //             {/* Cards Container */}
// //             <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

// //                 {/* Card 1 */}
// //                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
// //                     <div className="bg-orange-100 p-6 rounded-full mb-5">
// //                         <img src="/icons/learn.png" className="w-14 h-14" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold mb-3">Tailored Learning<br />Experiences</h3>
// //                     <p className="text-gray-600">
// //                         We Offer Customized Learning Experiences Designed To Empower Individuals To Launch
// //                         Their Careers With Confidence.
// //                     </p>
// //                 </div>

// //                 {/* Card 2 */}
// //                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
// //                     <div className="bg-orange-100 p-6 rounded-full mb-5">
// //                         <img src="/icons/course.png" className="w-14 h-14" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold mb-3">Comprehensive Course<br />Offerings</h3>
// //                     <p className="text-gray-600">
// //                         We Offers A Variety Of Courses In Web Development, Cyber Security, UI/UX Design,
// //                         & Graphic Design With Industry Level Training.
// //                     </p>
// //                 </div>

// //                 {/* Card 3 */}
// //                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
// //                     <div className="bg-orange-100 p-6 rounded-full mb-5">
// //                         <img src="/icons/rocket.png" className="w-14 h-14" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold mb-3">Hands-On Projects &<br />Expert Mentorship</h3>
// //                     <p className="text-gray-600">
// //                         Students Enjoy Hands-On Projects, Interactive Workshops, & Guidance From Industry
// //                         Professionals To Build Practical Skills.
// //                     </p>
// //                 </div>

// //             </div>

// //             {/* Moving Text */}
// //             <div className="relative w-full overflow-hidden mt-16">
// //                 <div className="flex animate-marquee gap-10 text-[40px] md:text-[60px] lg:text-[80px] font-extrabold text-purple-600 whitespace-nowrap">
// //                     <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
// //                     <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
// //                 </div>
// //             </div>

// //             {/* Kids Program Section */}
// //             <div className="w-full flex justify-center py-10">
// //                 <div
// //                     className="w-[95%] bg-[#4C5BF0] text-white rounded-[40px] p-10 md:p-16
// //                     flex flex-col md:flex-row items-center justify-between relative overflow-hidden
// //                     border-l-8 border-white/50"
// //                 >

// //                     {/* Left Text */}
// //                     <div className="md:w-1/2 space-y-5">

// //                         {/* Small Tag */}
// //                         <button className="border border-white/70 px-5 py-2 rounded-xl text-white flex items-center gap-2">
// //                             <span>📹</span> Kids Program
// //                         </button>

// //                         {/* Main Title */}
// //                         <h1 className="text-4xl md:text-5xl font-bold font-[cursive]">
// //                             Codeinnovior Kids Program
// //                         </h1>

// //                         {/* Description */}
// //                         <p className="text-white/90 max-w-md">
// //                             Fun Learning, Bright Futures! Unlock your child's potential with playful tech learning!
// //                         </p>

// //                         {/* Bullet Points */}
// //                         <div className="space-y-3 text-lg">
// //                             <p className="flex items-center gap-2">
// //                                 <span className="text-orange-400 text-2xl">*</span> AGES: 8 TO 14
// //                             </p>
// //                             <p className="flex items-center gap-2">
// //                                 <span className="text-orange-400 text-2xl">*</span> WEEKEND & EVENING BATCHES
// //                             </p>
// //                             <p className="flex items-center gap-2">
// //                                 <span className="text-orange-400 text-2xl">*</span> ONLINE & IN-PERSON OPTIONS
// //                             </p>
// //                         </div>

// //                         {/* Buttons */}
// //                         <div className="flex flex-wrap gap-5 pt-5">
// //                             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
// //                                 📲 Enroll Your Child Today
// //                             </button>

// //                             <button className="bg-white text-purple-700 px-6 py-3 rounded-xl shadow-lg hover:bg-green-100 flex items-center gap-2">
// //                                 🎥 View Demo Class
// //                             </button>
// //                         </div>
// //                     </div>

// //                     {/* Right Image */}
// //                     <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
// //                         <img
// //                             src={kidsimg}
// //                             alt="Kids Program"
// //                             className="w-[280px] md:w-[380px]"
// //                         />
// //                     </div>

// //                 </div>
// //             </div>
// //             <div className="w-full flex flex-col items-center py-12 bg-white">
// //                 {/* Top Badge */}
// //                 <div className="mb-6">
// //                     <span className="inline-flex items-center px-4 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full">
// //                         <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
// //                         We Are Working With
// //                     </span>
// //                 </div>

// //                 {/* Main Heading */}
// //                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6">
// //                     Building a Stronger Future Through Collaboration
// //                 </h1>

// //                 {/* Paragraph */}
// //                 <p className="max-w-4xl text-center text-base md:text-lg text-gray-700 px-4">
// //                     We partner with tech companies, educational institutions, mentors, and non-profits to create a learning ecosystem that bridges education and industry. These collaborations help us deliver real-world learning, placement opportunities, and social impact — together.
// //                 </p>
// //             </div>

// //         </div>
// //     );
// // }
// import kidsimg from "./kidsimg.png";
// import rImg from "./r.png";

// export default function Newcart() {
//   return (
//     <div className="w-full flex flex-col items-center overflow-x-hidden">

//       {/* ================= TOP TITLE ================= */}
//       <div className="w-full bg-[#fff7f3] py-20 px-4">
//   {/* Badge */}
//   <div className="flex justify-center mb-6">
//     <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border">
//       <span className="w-2 h-2 rounded-full bg-orange-500"></span>
//       <p className="text-sm font-medium text-orange-600">
//         Why we are Unique?
//       </p>
//     </div>
//   </div>

//   {/* Heading */}
//   <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
//     Unmatched Unique Features
//   </h2>

//   {/* Description (ei ta tumi jeita bolcho) */}
//   <div className="w-full flex justify-center mt-6">
//     <p className="max-w-4xl text-center text-sm sm:text-base md:text-lg 
//                   text-gray-600 leading-relaxed">
//       Discover A Range Of Features Designed To Elevate Your Experience,
//       Combining Innovation, Functionality, And Uniqueness To Meet Your Needs
//       Like Never Before.
//     </p>
//   </div>
// </div>


//       {/* ================= FEATURE CARDS ================= */}
//       <div className="w-full max-w-8xl max-h-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//         {[
//           {
//             title: "Tailored Learning\nExperiences",
//             text:
//               "We Offer Customized Learning Experiences Designed To Empower Individuals To Launch Their Careers With Confidence.",
//             icon: "/icons/learn.png",
//           },
//           {
//             title: "Comprehensive Course\nOfferings",
//             text:
//               "We Offers A Variety Of Courses In Web Development, Cyber Security, UI/UX Design & Graphic Design With Industry Level Training.",
//             icon: "/icons/course.png",
//           },
//           {
//             title: "Hands-On Projects &\nExpert Mentorship",
//             text:
//               "Students Enjoy Hands-On Projects, Interactive Workshops, & Guidance From Industry Professionals.",
//             icon: "/icons/rocket.png",
//           },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
//           >
//             <div className="bg-orange-100 p-6 rounded-full mb-6">
//               <img src={item.icon} className="w-14 h-14" />
//             </div>
//             <h3 className="text-2xl font-bold mb-3 whitespace-pre-line">
//               {item.title}
//             </h3>
//             <p className="text-gray-600">{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* ================= MOVING TEXT ================= */}
//       <div className="relative w-full overflow-hidden mt-20">
//         <div className="flex gap-12 animate-marquee text-[42px] md:text-[64px] lg:text-[80px] font-extrabold text-purple-600 whitespace-nowrap">
//           <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
//           <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
//         </div>
//       </div>

//       {/* ================= KIDS PROGRAM ================= */}
//       <div className="w-full flex justify-center py-20 bg-white">
//         <div
//           className="
//             relative
//             w-[190%] max-w-[1600px]
//             rounded-[80px]
//             overflow-hidden
//             px-12 py-16 md:px-20 md:py-24 lg:px-24 lg:py-28
//             flex flex-col lg:flex-row
//             justify-between
//             min-h-[800px]
//           "
//         >
//           {/* Background (CORNER FIXED) */}
//           <img
//             src={rImg}
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover rounded-[80px]"
//           />

//           {/* Left Content */}
//           <div className="lg:w-[55%] relative z-10 text-white space-y-6">
//             <div className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded-lg w-fit">
//               📹 Kids Program
//             </div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
//               Codeinnovior Kids Program
//             </h1>

//             <p className="max-w-xl text-lg md:text-xl">
//               Fun Learning, Bright Futures! Unlock your child's potential with
//               playful tech learning!
//             </p>

//             <div className="space-y-3 font-semibold">
//               <p>✱ AGES: 8 TO 14</p>
//               <p>✱ WEEKEND & EVENING BATCHES</p>
//               <p>✱ ONLINE & IN-PERSON OPTIONS</p>
//             </div>

//             <div className="flex gap-4 pt-6 flex-wrap">
//               <button className="bg-green-500 text-white px-7 py-4 rounded-xl font-semibold shadow-lg">
//                 📱 Enroll Your Child Today
//               </button>
//               <button className="bg-white text-black px-7 py-4 rounded-xl font-semibold shadow-lg">
//                 🎬 View Demo Class
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="lg:w-[45%] flex justify-center lg:justify-end mt-14 lg:mt-0 relative z-10">
//             <img src={kidsimg} className="w-[520px]" alt="Kids" />
//           </div>
//         </div>
//       </div>

//       {/* ================= COLLABORATION SECTION ================= */}
     

//           {/* Button */}
//           <div className="mb-8 flex justify-center">
//             <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-green-600 font-semibold shadow-md">
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
//               We Are Working With
//             </span>
//           </div>
// <div>
//     <h1 className="max-w-full text-left text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//   Building a Stronger Future Through Collaboration
// </h1>


// </div>
//           {/* Heading */}
      

//           {/* Description — FORCE 2 LINES */}
//      <div className="mt-8 text-left text-gray-600 text-lg md:text-2xl leading-relaxed space-y-2">

//   {/* Line 1 */}
//   <p className="max-w-full text-left ">
//     We Partner With Tech Companies, Educational Institutions, Mentors,
//     And Non-Profits To Create A Learning Ecosystem That Bridges Education
//     And Industry. These
//   </p>

//   {/* Line 2 */}
//   <p className="max-w-full text-center">
//     Collaborations Help Us Deliver Real-World Learning,
//     Placement Opportunities, And Social Impact — Together.
//   </p>

// </div>




//       {/* ================= MARQUEE ANIMATION ================= */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 18s linear infinite;
//         }
//       `}</style>

//     </div>
//   );
// }
// import kidsimg from "./kidsimg.png";

// export default function Newcart() {
//     return (
//         <div className="w-full flex flex-col items-center py-12">

//             {/* Top Title */}
//             <h2 className="text-center max-w-4xl text-lg md:text-2xl lg:text-3xl font-medium mb-12 px-4">
//                 Discover A Range Of Features Designed To Elevate Your Experience, Combining Innovation,
//                 Functionality, And Uniqueness To Meet Your Needs Like Never Before.
//             </h2>

//             {/* Cards Container */}
//             <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

//                 {/* Card 1 */}
//                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
//                     <div className="bg-orange-100 p-6 rounded-full mb-5">
//                         <img src="/icons/learn.png" className="w-14 h-14" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">Tailored Learning<br />Experiences</h3>
//                     <p className="text-gray-600">
//                         We Offer Customized Learning Experiences Designed To Empower Individuals To Launch
//                         Their Careers With Confidence.
//                     </p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
//                     <div className="bg-orange-100 p-6 rounded-full mb-5">
//                         <img src="/icons/course.png" className="w-14 h-14" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">Comprehensive Course<br />Offerings</h3>
//                     <p className="text-gray-600">
//                         We Offers A Variety Of Courses In Web Development, Cyber Security, UI/UX Design,
//                         & Graphic Design With Industry Level Training.
//                     </p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
//                     <div className="bg-orange-100 p-6 rounded-full mb-5">
//                         <img src="/icons/rocket.png" className="w-14 h-14" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">Hands-On Projects &<br />Expert Mentorship</h3>
//                     <p className="text-gray-600">
//                         Students Enjoy Hands-On Projects, Interactive Workshops, & Guidance From Industry
//                         Professionals To Build Practical Skills.
//                     </p>
//                 </div>

//             </div>

//             {/* Moving Text */}
//             <div className="relative w-full overflow-hidden mt-16">
//                 <div className="flex animate-marquee gap-10 text-[40px] md:text-[60px] lg:text-[80px] font-extrabold text-purple-600 whitespace-nowrap">
//                     <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
//                     <span>EMPOWERING INNOVATION • SHAPING FUTURES •</span>
//                 </div>
//             </div>

//             {/* Kids Program Section */}
//             <div className="w-full flex justify-center py-10">
//                 <div
//                     className="w-[95%] bg-[#4C5BF0] text-white rounded-[40px] p-10 md:p-16
//                     flex flex-col md:flex-row items-center justify-between relative overflow-hidden
//                     border-l-8 border-white/50"
//                 >

//                     {/* Left Text */}
//                     <div className="md:w-1/2 space-y-5">

//                         {/* Small Tag */}
//                         <button className="border border-white/70 px-5 py-2 rounded-xl text-white flex items-center gap-2">
//                             <span>📹</span> Kids Program
//                         </button>

//                         {/* Main Title */}
//                         <h1 className="text-4xl md:text-5xl font-bold font-[cursive]">
//                             Codeinnovior Kids Program
//                         </h1>

//                         {/* Description */}
//                         <p className="text-white/90 max-w-md">
//                             Fun Learning, Bright Futures! Unlock your child's potential with playful tech learning!
//                         </p>

//                         {/* Bullet Points */}
//                         <div className="space-y-3 text-lg">
//                             <p className="flex items-center gap-2">
//                                 <span className="text-orange-400 text-2xl">*</span> AGES: 8 TO 14
//                             </p>
//                             <p className="flex items-center gap-2">
//                                 <span className="text-orange-400 text-2xl">*</span> WEEKEND & EVENING BATCHES
//                             </p>
//                             <p className="flex items-center gap-2">
//                                 <span className="text-orange-400 text-2xl">*</span> ONLINE & IN-PERSON OPTIONS
//                             </p>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex flex-wrap gap-5 pt-5">
//                             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
//                                 📲 Enroll Your Child Today
//                             </button>

//                             <button className="bg-white text-purple-700 px-6 py-3 rounded-xl shadow-lg hover:bg-green-100 flex items-center gap-2">
//                                 🎥 View Demo Class
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
//                         <img
//                             src={kidsimg}
//                             alt="Kids Program"
//                             className="w-[280px] md:w-[380px]"
//                         />
//                     </div>

//                 </div>
//             </div>
//             <div className="w-full flex flex-col items-center py-12 bg-white">
//                 {/* Top Badge */}
//                 <div className="mb-6">
//                     <span className="inline-flex items-center px-4 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full">
//                         <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                         We Are Working With
//                     </span>
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6">
//                     Building a Stronger Future Through Collaboration
//                 </h1>

//                 {/* Paragraph */}
//                 <p className="max-w-4xl text-center text-base md:text-lg text-gray-700 px-4">
//                     We partner with tech companies, educational institutions, mentors, and non-profits to create a learning ecosystem that bridges education and industry. These collaborations help us deliver real-world learning, placement opportunities, and social impact — together.
//                 </p>
//             </div>

//         </div>
//     );
// }
import kidsimg from "./kidsimg.png";
import rImg from "./r.png";

import f from "./f.png";
import f2 from "./f2.png";
import f3 from "./f3.png";

export default function Newcart() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">

      {/* ================= TOP TITLE ================= */}
<div className="w-full bg-gradient-to-b from-[#fff7f3] to-white py-20 px-4">
  <div className="max-w-[1600px] mx-auto">
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
    <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6">
      Unmatched Unique Features
    </h2>

    {/* Description */}
    <p className="max-w-8xl mx-auto text-center text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-16">
      Discover A Range Of Features Designed To Elevate Your Experience, Combining Innovation, Functionality, And Uniqueness To Meet Your Needs Like Never Before.
    </p>

    {/* ================= FEATURE CARDS ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4">
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
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 lg:p-12 text-center shadow-lg"
        >
          {/* Icon circle */}
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-5 leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Navigation arrows - if needed */}
    <div className="flex justify-center gap-4 mt-12">
      <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center">
        ←
      </button>
      <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center">
        →
      </button>
    </div>
  </div>
</div>

      {/* ================= MOVING TEXT ================= */}
{/* ================= MOVING TEXT (NO OVERLAP) ================= */}
<style>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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

<div className="relative mt-12 flex justify-center overflow-hidden w-full">
  <div className="w-[88%] overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap items-center gap-10">

      {/* COPY 1 */}
      <div className="min-w-max inline-flex items-center leading-none font-extrabold tracking-wide
                      text-[32px] sm:text-[48px] md:text-[64px] lg:text-[70px]">
        <span className="text-purple-600">
          EMPOWERING INNOVATION
        </span>

        <span className="mx-15 text-purple-600">•</span>

        <span className="outline-text">
          SHAPING FUTURES
        </span>

        <span className="mx-8 outline-text">•</span>
      </div>

      {/* COPY 2 */}
      <div className="min-w-max inline-flex items-center leading-none font-extrabold tracking-wide
                      text-[32px] sm:text-[48px] md:text-[64px] lg:text-[70px]">
        <span className="text-purple-600">
          EMPOWERING INNOVATION
        </span>

        <span className="mx-5 text-purple-600">•</span>

        <span className="outline-text">
          SHAPING FUTURES
        </span>

        <span className="mx-8 outline-text">•</span>
      </div>

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

            <div className="flex gap-4 pt-6 flex-wrap">
              <button className="bg-green-500 text-white px-7 py-4 rounded-xl font-semibold shadow-lg">
                📱 Enroll Your Child Today
              </button>
              <button className="bg-white text-black px-7 py-4 rounded-xl font-semibold shadow-lg">
                🎬 View Demo Class
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end mt-14 lg:mt-0 relative z-10">
            <img src={kidsimg} className="w-[520px]" alt="Kids" />
          </div>
        </div>
      </div>

      {/* ================= MARQUEE CSS ================= */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>

    </div>
  );
}
