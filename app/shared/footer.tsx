import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "./Footer 1.png"; // Footer image
import vector1 from "../shared/vector 1.png";
import vector2 from "../shared/vector 2.png";
import vector3 from "../shared/vector3.png";
import frame12 from "../shared/Frame12.png"; // Frame12 import
import frame22 from "../shared/Frame 22.png";
// Frame22 import

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="w-full h-screen relative flex justify-center items-start mt-25">
      
      {/* Full-screen logo as background */}
      <img 
        src={logo} 
        alt="Footer Background" 
        className="w-[1800px] h-[700px] object-cover rounded-4xl"
      />

      {/* Overlay content */}
      <div className="absolute top-0 w-full h-full flex flex-col items-center pt-10 px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Text */}
        <div className="text-center">
          <h6 className="text-black text-base sm:text-lg md:text-2xl lg:text-3xl drop-shadow-lg">
            Are you ready?
          </h6>
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg mt-4 sm:mt-6">
            Let’s Build the Future, Together
          </h1>
        </div>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Kids Program Button */}
          <button
            className="group flex items-center px-8 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 bg-[#e82074] hover:bg-white hover:text-[#e82074] min-w-[180px] sm:min-w-[220px] md:min-w-[260px]"
          >
            <span className="flex items-center gap-2 sm:gap-3 transition-all duration-300 group-hover:flex-row-reverse">
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-8 flex items-center justify-center">
                <img 
                  src={vector2} 
                  className="absolute w-full h-full transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90" 
                  alt="icon"
                />
                <img 
                  src={vector1} 
                  className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90" 
                  alt="icon"
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg">Kids Program</span>
            </span>
          </button>

          {/* Contact Button */}
          <button
            className="group flex items-center px-8 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 bg-[#9747ff] hover:bg-white hover:text-[#9747ff] min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
          >
            <span className="flex items-center gap-2 sm:gap-3 transition-all duration-300 group-hover:flex-row-reverse">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
                <img 
                  src={vector3} 
                  className="w-full h-full transition-all duration-300 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-90" 
                  alt="icon"
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg">Contact</span>
            </span>
          </button>
        </div>

        {/* Frame12 Image below buttons */}
        <div className="mt-4 sm:mt-8 md:mt-10 w-full flex justify-start max-w-[600px]">
          <img 
            src={frame12} 
            alt="Frame 12" 
            className="w-full object-contain"
          />
        </div>

        {/* Payment Channels text below Frame12, fully left aligned */}
        <div className="mt-4 w-full text-left">
          <h6 className="text-black text-lg mt-10 mx-50 sm:text-small md:text-xl lg:text-xl">
            Payment Channels
          </h6>
        </div>

        {/* Frame22 Image below Payment Channels, aligned left */}
        <div className="mt-4 w-full flex justify-start max-w-[1500px]">
          <img 
            src={frame22} 
            alt="Frame 22" 
            className="w-full object-contain"
          />
        </div>

      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden absolute top-4 right-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>
    </footer>
  );
}
