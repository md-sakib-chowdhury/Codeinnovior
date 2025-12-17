import { useState } from "react";

import partner1 from "./imges.png";
import partner2 from "./imges2.png";
import partner3 from "./imges3.png";
import partner4 from "./imges4.png";
import partner5 from "./imges5.png";
import partner6 from "./imges6.png";
import partner7 from "./imges7.png";
import partner8 from "./imges8.png";
import partner9 from "./imges9.png";
import partner10 from "./imges10.png";
import partner11 from "./imges11.png";
import partner12 from "./imges12.png";
import partner13 from "./imges13.png";
import partner14 from "./imges1.png";
import partner15 from "./CashApp.png";

export default function NavSection() {
  const [activeTab, setActiveTab] = useState("partners");

  return (
    <div className="w-full mt-20">

      {/* ================= NAVIGATION ================= */}
      <div className="w-full py-10 flex justify-center">
        <ul className="flex items-center gap-20">

          {/* Our Partners */}
          <li
            onClick={() => setActiveTab("partners")}
            className="cursor-pointer"
          >
            <span
              className={`
                text-3xl font-medium transition-all
                ${activeTab === "partners"
                  ? "text-orange-500 border-b-4 border-orange-500 pb-2"
                  : "text-gray-600 hover:text-orange-500"}
              `}
            >
              Our Partners
            </span>
          </li>

          {/* CSR */}
          <li
            onClick={() => setActiveTab("csr")}
            className="cursor-pointer"
          >
            <span
              className={`
                text-3xl font-medium transition-all
                ${activeTab === "csr"
                  ? "text-orange-500 border-b-4 border-orange-500 pb-2"
                  : "text-gray-600 hover:text-orange-500"}
              `}
            >
              Corporate Social Responsibilities
            </span>
          </li>

          {/* I2I */}
          <li
            onClick={() => setActiveTab("i2i")}
            className="cursor-pointer"
          >
            <span
              className={`
                text-3xl font-medium transition-all
                ${activeTab === "i2i"
                  ? "text-orange-500 border-b-4 border-orange-500 pb-2"
                  : "text-gray-600 hover:text-orange-500"}
              `}
            >
              I2I Program
            </span>
          </li>

        </ul>
      </div>

      {/* ================= CONTENT ================= */}

      {/* ===== OUR PARTNERS ===== */}
      {activeTab === "partners" && (
        <section className="w-full bg-white py-16">
          <div className="w-full flex flex-col items-center space-y-14">

            {/* Row 1 */}
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-10">
                {[partner1, partner2, partner3, partner4, partner5, partner6].map((logo, i) => (
                  <img key={i} src={logo} className="logo-style" />
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-14 gap-y-10">
                {[partner7, partner8, partner9, partner10, partner11].map((logo, i) => (
                  <img key={i} src={logo} className="logo-style" />
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-16 gap-y-10">
                {[partner12, partner13, partner14, partner15].map((logo, i) => (
                  <img key={i} src={logo} className="logo-style" />
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ===== CSR PLACEHOLDER ===== */}
      {activeTab === "csr" && (
        <div className="py-32 text-center text-2xl text-gray-500">
          CSR Content Here
        </div>
      )}

      {/* ===== I2I PLACEHOLDER ===== */}
      {activeTab === "i2i" && (
        <div className="py-32 text-center text-2xl text-gray-500">
          I2I Program Content Here
        </div>
      )}

    </div>
  );
}
